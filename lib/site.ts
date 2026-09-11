/**
 * Endereço público do site. Um valor vazio ou inválido não pode derrubar o build:
 * cai para o domínio de produção informado pela Vercel e, por último, para o localhost.
 */
function resolverUrlDoSite() {
  const candidatos = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  ];

  for (const candidato of candidatos) {
    const valor = candidato?.trim().replace(/^["']|["']$/g, "");
    if (!valor) continue;
    try {
      return new URL(valor).origin;
    } catch {
      console.warn(`[site] URL inválida ignorada: "${valor}"`);
    }
  }

  return "http://localhost:3000";
}

export const SITE = {
  nome: "Réplica",
  lema: "Informação e opinião sobre Nova Serrana.",
  descricao:
    "A Réplica cobre o que acontece em Nova Serrana: política, cultura, cotidiano e o que importa de fora.",
  cidade: "Nova Serrana, MG",
  url: resolverUrlDoSite(),
};

/**
 * Modo prévia: site publicado, mas com aviso de conteúdo ilustrativo e sem indexação.
 * Desligue removendo NEXT_PUBLIC_MODO_PREVIA (ou usando "false") no lançamento.
 */
export const MODO_PREVIA = process.env.NEXT_PUBLIC_MODO_PREVIA === "true";

export function urlAbsoluta(caminho: string) {
  return new URL(caminho, SITE.url).toString();
}
