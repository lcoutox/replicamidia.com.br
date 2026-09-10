import { BlockquoteIcon, CommentIcon, ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const imagem = defineType({
  name: "imagem",
  title: "Imagem",
  type: "image",
  icon: ImageIcon,
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Texto alternativo",
      type: "string",
      description: "Descreva a imagem para quem usa leitor de tela.",
      validation: (r) => r.required(),
    }),
    defineField({ name: "legenda", title: "Legenda", type: "string" }),
    defineField({
      name: "credito",
      title: "Crédito",
      type: "string",
      description: "Autor da foto ou origem da imagem.",
      validation: (r) => r.required(),
    }),
  ],
});

export const citacao = defineType({
  name: "citacao",
  title: "Citação verificada",
  type: "object",
  icon: BlockquoteIcon,
  description: "Aspas apenas em citações verificadas. Identifique quem fala e preserve o contexto.",
  fields: [
    defineField({ name: "texto", title: "Texto", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "autor", title: "Quem fala", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "contexto",
      title: "Contexto",
      type: "string",
      description: "Ex.: em entrevista à Réplica; em sessão da Câmara.",
    }),
  ],
  preview: { select: { title: "texto", subtitle: "autor" } },
});

export const perguntaResposta = defineType({
  name: "perguntaResposta",
  title: "Pergunta e resposta",
  type: "object",
  icon: CommentIcon,
  fields: [
    defineField({ name: "pergunta", title: "Pergunta", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({
      name: "resposta",
      title: "Resposta",
      type: "text",
      rows: 6,
      description: "Linhas em branco separam parágrafos.",
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "pergunta", subtitle: "resposta" } },
});
