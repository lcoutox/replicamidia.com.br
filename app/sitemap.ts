import type { MetadataRoute } from "next";
import { getTodasMaterias } from "@/lib/content";
import { hrefMateria, SECOES } from "@/lib/secoes";
import { urlAbsoluta } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const materias = await getTodasMaterias();

  return [
    { url: urlAbsoluta("/"), changeFrequency: "hourly", priority: 1 },
    ...SECOES.map((s) => ({ url: urlAbsoluta(`/${s.slug}`), changeFrequency: "daily" as const, priority: 0.8 })),
    { url: urlAbsoluta("/sobre"), changeFrequency: "monthly", priority: 0.4 },
    ...materias.map((m) => ({
      url: urlAbsoluta(hrefMateria(m)),
      lastModified: m.atualizadoEm ?? m.publicadoEm,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
