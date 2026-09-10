// Gera seed/replica-demo.ndjson a partir do conteúdo de demonstração (lib/mock.ts),
// para popular o Sanity com: npm run seed:importar
// As imagens são baixadas pelo próprio Sanity durante a importação.
import { mkdirSync, writeFileSync } from "node:fs";
import { CONFIGURACOES_DEMO, EDITORIAS_DEMO, MATERIAS_DEMO } from "../lib/mock.ts";

const ref = (id) => ({ _type: "reference", _ref: id });
const iso = (data) => (data ? new Date(data).toISOString() : undefined);
const comChave = (lista, prefixo) => lista?.map((item, i) => ({ _key: `${prefixo}${i}`, ...item }));

function imagem(img) {
  if (!img?.url) return undefined;
  return {
    _type: "imagem",
    _sanityAsset: `image@${img.url}`,
    alt: img.alt,
    legenda: img.legenda ?? undefined,
    credito: img.credito ?? undefined,
  };
}

const docs = [];

for (const e of Object.values(EDITORIAS_DEMO)) {
  docs.push({ _id: `editoria-${e.slug}`, _type: "editoria", titulo: e.titulo, slug: { _type: "slug", current: e.slug } });
}

for (const m of MATERIAS_DEMO) {
  docs.push({
    _id: m._id,
    _type: "materia",
    formato: m.formato,
    titulo: m.titulo,
    slug: { _type: "slug", current: m.slug },
    linhaFina: m.linhaFina ?? undefined,
    editoria: m.editoria ? ref(`editoria-${m.editoria.slug}`) : undefined,
    resumo: m.resumo ?? undefined,
    entrevistado: m.entrevistado ?? undefined,
    frase: m.frase ?? undefined,
    imagem: imagem(m.imagem),
    video: m.video ?? undefined,
    corpo: m.corpo?.map((b) => (b._type === "imagem" ? { _key: b._key, ...imagem(b) } : b)),
    fontes: comChave(m.fontes, "fonte"),
    perguntasEmAberto: m.perguntasEmAberto ?? undefined,
    correcoes: comChave(
      m.correcoes?.map((c) => ({ ...c, data: iso(c.data) })),
      "correcao",
    ),
    publicadoEm: iso(m.publicadoEm),
    atualizadoEm: iso(m.atualizadoEm),
  });
}

docs.push({ _id: "paginaInicial", _type: "paginaInicial", manchete: ref(MATERIAS_DEMO[0]._id) });
docs.push({ _id: "configuracoes", _type: "configuracoes", ...CONFIGURACOES_DEMO });

mkdirSync("seed", { recursive: true });
writeFileSync("seed/replica-demo.ndjson", docs.map((d) => JSON.stringify(d)).join("\n") + "\n");
console.log(`seed/replica-demo.ndjson: ${docs.length} documentos`);
