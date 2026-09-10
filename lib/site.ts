export const SITE = {
  nome: "Réplica",
  lema: "Informar. Questionar. Conversar.",
  descricao:
    "Nascida em Nova Serrana, a Réplica organiza informações relevantes e amplia o debate sobre a cidade.",
  cidade: "Nova Serrana, MG",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export function urlAbsoluta(caminho: string) {
  return new URL(caminho, SITE.url).toString();
}
