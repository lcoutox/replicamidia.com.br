import { CogIcon, HomeIcon, TagIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const editoria = defineType({
  name: "editoria",
  title: "Editoria",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "titulo", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Endereço (slug)",
      type: "slug",
      options: { source: "titulo" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "descricao", title: "Descrição", type: "text", rows: 2 }),
  ],
});

/** Documento único: curadoria da página inicial. */
export const paginaInicial = defineType({
  name: "paginaInicial",
  title: "Página inicial",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "manchete",
      title: "Pauta principal",
      type: "reference",
      to: [{ type: "materia" }],
      description: "Se ficar vazio, a reportagem, análise ou entrevista mais recente com imagem assume a manchete.",
    }),
    defineField({
      name: "destaques",
      title: "Seleção editorial",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "materia" }] })],
      description:
        "Até 7 matérias, na ordem de exibição. Vagas livres são preenchidas pelas reportagens e análises mais recentes.",
      validation: (r) => r.unique().max(7),
    }),
  ],
  preview: { prepare: () => ({ title: "Página inicial" }) },
});

/** Documento único: canais e contato. */
export const configuracoes = defineType({
  name: "configuracoes",
  title: "Configurações",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "whatsapp", title: "Canal no WhatsApp", type: "url" }),
    defineField({ name: "instagram", title: "Instagram", type: "url" }),
    defineField({ name: "youtube", title: "YouTube", type: "url" }),
    defineField({
      name: "email",
      title: "E-mail de contato",
      type: "string",
      description: "Usado para correções e direito de resposta.",
      validation: (r) => r.email(),
    }),
  ],
  preview: { prepare: () => ({ title: "Configurações" }) },
});
