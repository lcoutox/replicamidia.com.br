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
    descricao: "O que aconteceu, quando, onde e com base em qual fonte. Notas e reportagens.",
    formatos: ["nota", "reportagem"],
  },
  {
    slug: "analise",
    titulo: "Análise",
    descricao: "O que mudou. O que vem a seguir.",
    formatos: ["analise"],
  },
  {
    slug: "opiniao",
    titulo: "Opinião",
    descricao: "A posição da Réplica, sustentada por argumento e dado.",
    formatos: ["opiniao"],
  },
  {
    slug: "conversa",
    titulo: "Conversa",
    descricao: "Entrevistas com contexto. Aspas de quem realmente falou.",
    formatos: ["entrevista"],
  },
  {
    slug: "videos",
    titulo: "Vídeos",
    descricao: "A cidade explicada em vídeo, curto e direto.",
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
