import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType, type ConditionalPropertyCallback } from "sanity";

export const FORMATOS = [
  { title: "Nota", value: "nota" },
  { title: "Reportagem", value: "reportagem" },
  { title: "Análise", value: "analise" },
  { title: "Opinião", value: "opiniao" },
  { title: "Entrevista", value: "entrevista" },
  { title: "Vídeo", value: "video" },
] as const;

const soEm =
  (formato: string): ConditionalPropertyCallback =>
  ({ document }) =>
    document?.formato !== formato;

export const materia = defineType({
  name: "materia",
  title: "Matéria",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "conteudo", title: "Conteúdo", default: true },
    { name: "midia", title: "Mídia" },
    { name: "apuracao", title: "Apuração" },
    { name: "seo", title: "SEO" },
    { name: "publicacao", title: "Publicação" },
  ],
  fields: [
    defineField({
      name: "formato",
      title: "Formato",
      type: "string",
      group: "conteudo",
      options: { list: [...FORMATOS], layout: "radio", direction: "horizontal" },
      initialValue: "reportagem",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      group: "conteudo",
      validation: (r) => r.required().max(140),
    }),
    defineField({
      name: "slug",
      title: "Endereço (slug)",
      type: "slug",
      group: "conteudo",
      options: { source: "titulo", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "linhaFina",
      title: "Linha fina",
      type: "text",
      rows: 2,
      group: "conteudo",
      description: "Uma frase que complementa o título.",
      validation: (r) => r.max(240),
    }),
    defineField({
      name: "editoria",
      title: "Editoria",
      type: "reference",
      group: "conteudo",
      to: [{ type: "editoria" }],
    }),
    defineField({
      name: "resumo",
      title: "Resumo",
      type: "array",
      group: "conteudo",
      description: "Resumo objetivo em até três pontos. Também serve para o canal de WhatsApp.",
      of: [defineArrayMember({ type: "string" })],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "entrevistado",
      title: "Entrevistado",
      type: "object",
      group: "conteudo",
      hidden: soEm("entrevista"),
      fields: [
        defineField({ name: "nome", title: "Nome", type: "string" }),
        defineField({ name: "descricao", title: "Quem é", type: "string", description: "Cargo ou relação com o tema." }),
      ],
    }),
    defineField({
      name: "frase",
      title: "Frase de destaque",
      type: "text",
      rows: 2,
      group: "conteudo",
      hidden: soEm("entrevista"),
      description: "Somente citação verificada, sem aspas (elas são aplicadas pelo site).",
    }),
    defineField({
      name: "corpo",
      title: "Texto",
      type: "array",
      group: "conteudo",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Parágrafo", value: "normal" },
            { title: "Intertítulo", value: "h2" },
            { title: "Subtítulo", value: "h3" },
          ],
          lists: [
            { title: "Marcadores", value: "bullet" },
            { title: "Numerada", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Itálico", value: "em" },
            ],
            annotations: [
              defineArrayMember({
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "Endereço",
                    type: "url",
                    validation: (r) => r.uri({ scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({ type: "imagem" }),
        defineArrayMember({ type: "citacao" }),
        defineArrayMember({ type: "perguntaResposta" }),
      ],
    }),
    defineField({
      name: "imagem",
      title: "Imagem principal",
      type: "imagem",
      group: "midia",
      description: "Obrigatória para aparecer como manchete. Em vídeos, é a capa.",
    }),
    defineField({
      name: "video",
      title: "Vídeo",
      type: "object",
      group: "midia",
      hidden: soEm("video"),
      fields: [
        defineField({
          name: "url",
          title: "Link do vídeo",
          type: "url",
          description: "YouTube é incorporado na página. Instagram e TikTok abrem na plataforma.",
        }),
        defineField({
          name: "orientacao",
          title: "Orientação",
          type: "string",
          options: {
            list: [
              { title: "Vertical (Reels, Shorts)", value: "vertical" },
              { title: "Horizontal", value: "horizontal" },
            ],
            layout: "radio",
          },
          initialValue: "vertical",
        }),
        defineField({ name: "duracao", title: "Duração", type: "string", description: "Ex.: 1:30" }),
      ],
    }),
    defineField({
      name: "fontes",
      title: "Fontes",
      type: "array",
      group: "apuracao",
      description: "Identifique a origem quando houver. Nem toda matéria exige fonte formal.",
      of: [
        defineArrayMember({
          type: "object",
          name: "fonte",
          fields: [
            defineField({ name: "nome", title: "Fonte", type: "string", validation: (r) => r.required() }),
            defineField({ name: "url", title: "Link", type: "url" }),
          ],
          preview: { select: { title: "nome", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "perguntasEmAberto",
      title: "O que falta saber",
      type: "array",
      group: "apuracao",
      description: "Perguntas ainda sem resposta. O debate continua depois do fato.",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "correcoes",
      title: "Correções",
      type: "array",
      group: "apuracao",
      description: "Correções ficam visíveis na página. Não apague registros anteriores.",
      of: [
        defineArrayMember({
          type: "object",
          name: "correcao",
          fields: [
            defineField({ name: "data", title: "Data", type: "datetime", validation: (r) => r.required() }),
            defineField({ name: "texto", title: "O que foi corrigido", type: "text", rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "texto", subtitle: "data" } },
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      description: "Opcional. Sem preencher, o site usa o título e a linha fina.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "metaTitulo",
          title: "Título para busca e redes",
          type: "string",
          description: "Até ~60 caracteres. Substitui o título da matéria só no <title> e no compartilhamento.",
          validation: (r) => r.max(70),
        }),
        defineField({
          name: "metaDescricao",
          title: "Descrição para busca e redes",
          type: "text",
          rows: 3,
          description: "Até ~160 caracteres. Uma frase que dê vontade de clicar e diga do que se trata.",
          validation: (r) => r.max(180),
        }),
      ],
    }),
    defineField({
      name: "publicadoEm",
      title: "Publicado em",
      type: "datetime",
      group: "publicacao",
      description: "Datas futuras funcionam como agendamento.",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "atualizadoEm",
      title: "Atualizado em",
      type: "datetime",
      group: "publicacao",
      description: "Preencha quando houver atualização relevante. Aparece para o leitor.",
    }),
  ],
  orderings: [
    { title: "Mais recentes", name: "publicadoDesc", by: [{ field: "publicadoEm", direction: "desc" }] },
  ],
  preview: {
    select: { title: "titulo", formato: "formato", media: "imagem", data: "publicadoEm" },
    prepare({ title, formato, media, data }) {
      const rotulo = FORMATOS.find((f) => f.value === formato)?.title ?? "Sem formato";
      const quando = data ? new Date(data).toLocaleDateString("pt-BR") : "sem data";
      return { title, subtitle: `${rotulo} · ${quando}`, media };
    },
  },
});
