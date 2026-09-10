import type { Formato } from "./types";

export type Secao = {
  slug: string;
  titulo: string;
  descricao: string;
  formatos: readonly Formato[];
};

// Descrições derivadas da voz editorial do brandbook.
export const SECOES: readonly Secao[] = [
  {
    slug: "em-pauta",
    titulo: "Em pauta",
    descricao: "O que aconteceu, quando, onde e de acordo com qual fonte. Notas curtas e reportagens.",
    formatos: ["nota", "reportagem"],
  },
  {
    slug: "analise",
    titulo: "Análise",
    descricao: "O debate continua depois do fato. O que mudou? Quem responde? O que falta saber?",
    formatos: ["analise"],
  },
  {
    slug: "opiniao",
    titulo: "Opinião",
    descricao: "A interpretação da Réplica, com o argumento explicado e os fatos que o sustentam.",
    formatos: ["opiniao"],
  },
  {
    slug: "conversa",
    titulo: "Conversa",
    descricao: "Entrevistas que identificam quem fala e preservam contexto e sentido.",
    formatos: ["entrevista"],
  },
  {
    slug: "videos",
    titulo: "Vídeos",
    descricao: "A cidade explicada em poucos minutos, na mesma linguagem do nosso Instagram.",
    formatos: ["video"],
  },
];

export const FORMATO_ROTULO: Record<Formato, string> = {
  nota: "Nota",
  reportagem: "Reportagem",
  analise: "Análise",
  opiniao: "Opinião",
  entrevista: "Conversa",
  video: "Vídeo",
};

export function getSecao(slug: string) {
  return SECOES.find((secao) => secao.slug === slug);
}

export function secaoDoFormato(formato: Formato) {
  return SECOES.find((secao) => secao.formatos.includes(formato)) ?? SECOES[0];
}

export function hrefMateria(materia: { slug: string; formato: Formato }) {
  return `/${secaoDoFormato(materia.formato).slug}/${materia.slug}`;
}
