import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

type Payload = { _type?: string; slug?: string };

// Editorias aparecem dentro das matérias, então alterá-las revalida as matérias.
const TAGS_POR_TIPO: Record<string, string[]> = {
  editoria: ["materia"],
};

/**
 * Webhook do Sanity (GROQ-powered). Configure em sanity.io/manage → API → Webhooks:
 * URL: https://SEU-DOMINIO/api/revalidate · Projeção: {_type, "slug": slug.current}
 * Secret: o mesmo valor de SANITY_REVALIDATE_SECRET.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ erro: "SANITY_REVALIDATE_SECRET não configurado" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<Payload>(request, secret);
  if (!isValidSignature) {
    return NextResponse.json({ erro: "Assinatura inválida" }, { status: 401 });
  }
  if (!body?._type) {
    return NextResponse.json({ erro: "Payload sem _type" }, { status: 400 });
  }

  const tags = TAGS_POR_TIPO[body._type] ?? [body._type];
  // Webhook exige expiração imediata, não stale-while-revalidate.
  tags.forEach((tag) => revalidateTag(tag, { expire: 0 }));

  return NextResponse.json({ revalidado: tags, slug: body.slug ?? null });
}
