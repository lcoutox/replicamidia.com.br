import { getTodasMaterias } from "@/lib/content";
import { FORMATO_ROTULO, hrefMateria } from "@/lib/secoes";
import { SITE, urlAbsoluta } from "@/lib/site";

export const revalidate = 300;

function escapar(texto: string) {
  return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** RSS das últimas publicações: também serve de gatilho para automações (WhatsApp, redes). */
export async function GET() {
  const materias = (await getTodasMaterias()).slice(0, 30);

  const itens = materias
    .map((m) => {
      const link = urlAbsoluta(hrefMateria(m));
      return [
        "<item>",
        `<title>${escapar(m.titulo)}</title>`,
        `<link>${link}</link>`,
        `<guid isPermaLink="true">${link}</guid>`,
        `<pubDate>${new Date(m.publicadoEm).toUTCString()}</pubDate>`,
        `<category>${escapar(FORMATO_ROTULO[m.formato])}</category>`,
        m.linhaFina ? `<description>${escapar(m.linhaFina)}</description>` : "",
        "</item>",
      ].join("");
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${SITE.nome}</title><link>${SITE.url}</link><description>${escapar(SITE.descricao)}</description><language>pt-BR</language><atom:link href="${urlAbsoluta("/feed.xml")}" rel="self" type="application/rss+xml"/>${itens}</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
