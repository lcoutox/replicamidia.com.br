export const SITE = {
  nome: "Réplica",
  lema: "Informar. Questionar. Conversar.",
  descricao:
    "Nascida em Nova Serrana, a Réplica organiza informações relevantes e amplia o debate sobre a cidade.",
  cidade: "Nova Serrana, MG",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

/**
 * Modo prévia: site publicado, mas com aviso de conteúdo ilustrativo e sem indexação.
 * Desligue removendo NEXT_PUBLIC_MODO_PREVIA (ou usando "false") no lançamento.
 */
export const MODO_PREVIA = process.env.NEXT_PUBLIC_MODO_PREVIA === "true";

export function urlAbsoluta(caminho: string) {
  return new URL(caminho, SITE.url).toString();
}
