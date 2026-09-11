import type { PortableTextBlock } from "next-sanity";

export type Formato = "nota" | "reportagem" | "analise" | "opiniao" | "entrevista" | "video";

export type Imagem = {
  url: string;
  alt: string;
  legenda?: string | null;
  credito?: string | null;
  width?: number | null;
  height?: number | null;
};

export type Editoria = {
  titulo: string;
  slug: string;
};

export type Video = {
  url?: string | null;
  orientacao: "vertical" | "horizontal";
  duracao?: string | null;
};

export type Entrevistado = {
  nome: string;
  descricao?: string | null;
};

/** Campos usados em chamadas, listas e cards. */
export type MateriaResumo = {
  _id: string;
  titulo: string;
  slug: string;
  formato: Formato;
  linhaFina?: string | null;
  editoria?: Editoria | null;
  imagem?: Imagem | null;
  video?: Video | null;
  entrevistado?: Entrevistado | null;
  /** Citação verificada usada como destaque em entrevistas. */
  frase?: string | null;
  publicadoEm: string;
};

export type BlocoCitacao = {
  _type: "citacao";
  _key: string;
  texto: string;
  autor: string;
  contexto?: string | null;
};

export type BlocoPerguntaResposta = {
  _type: "perguntaResposta";
  _key: string;
  pergunta: string;
  resposta: string;
};

export type BlocoImagem = Imagem & {
  _type: "imagem";
  _key: string;
};

export type BlocoCorpo = PortableTextBlock | BlocoCitacao | BlocoPerguntaResposta | BlocoImagem;

export type Fonte = { _key?: string; nome: string; url?: string | null };

export type Correcao = { _key?: string; data: string; texto: string };

export type Seo = { metaTitulo?: string | null; metaDescricao?: string | null };

export type Materia = MateriaResumo & {
  atualizadoEm?: string | null;
  resumo?: string[] | null;
  corpo?: BlocoCorpo[] | null;
  fontes?: Fonte[] | null;
  perguntasEmAberto?: string[] | null;
  correcoes?: Correcao[] | null;
  seo?: Seo | null;
};

export type Home = {
  manchete: MateriaResumo | null;
  destaques: MateriaResumo[];
  notas: MateriaResumo[];
  videos: MateriaResumo[];
  opiniao: MateriaResumo[];
  conversa: MateriaResumo[];
};

export type Configuracoes = {
  whatsapp?: string | null;
  instagram?: string | null;
  youtube?: string | null;
  email?: string | null;
};
