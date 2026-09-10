import { defineQuery } from "next-sanity";

const IMAGEM = `{
  "url": asset->url,
  alt,
  legenda,
  credito,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`;

const RESUMO = `
  _id,
  titulo,
  "slug": slug.current,
  formato,
  linhaFina,
  publicadoEm,
  frase,
  entrevistado,
  video,
  "editoria": editoria->{ titulo, "slug": slug.current },
  "imagem": imagem${IMAGEM}
`;

/** Publicada e com data já alcançada (permite agendar publicações). */
const PUBLICADA = `_type == "materia" && defined(slug.current) && defined(publicadoEm) && publicadoEm <= now()`;

export const HOME_QUERY = defineQuery(`{
  "curadoria": *[_id == "paginaInicial"][0]{
    "manchete": manchete->{${RESUMO}},
    "destaques": destaques[]->{${RESUMO}}
  },
  "recentes": *[${PUBLICADA}] | order(publicadoEm desc)[0...60]{${RESUMO}}
}`);

export const MATERIA_QUERY = defineQuery(`*[${PUBLICADA} && slug.current == $slug][0]{
  ${RESUMO},
  atualizadoEm,
  resumo,
  perguntasEmAberto,
  fontes,
  correcoes,
  corpo[]{
    ...,
    _type == "imagem" => {
      _type,
      _key,
      "url": asset->url,
      alt,
      legenda,
      credito,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }
}`);

export const SECAO_QUERY = defineQuery(
  `*[${PUBLICADA} && formato in $formatos] | order(publicadoEm desc)[0...48]{${RESUMO}}`,
);

export const RELACIONADAS_QUERY = defineQuery(`*[
  ${PUBLICADA} && _id != $id && formato != "nota" &&
  (editoria->slug.current == $editoria || formato == $formato)
] | order(publicadoEm desc)[0...3]{${RESUMO}}`);

export const TODAS_QUERY = defineQuery(`*[${PUBLICADA}] | order(publicadoEm desc){
  _id, titulo, "slug": slug.current, formato, linhaFina, publicadoEm, atualizadoEm
}`);

export const CONFIGURACOES_QUERY = defineQuery(`*[_id == "configuracoes"][0]{ whatsapp, instagram, youtube, email }`);
