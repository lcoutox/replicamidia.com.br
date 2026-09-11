// Grava o texto de cada pauta de estreia no rascunho correspondente do Sanity.
// Preserva os metadados (formato, editoria, linha fina, "o que falta saber") e
// substitui o corpo pelo texto redigido em scripts/textos-lancamento.mjs.
//
// Uso:  npx sanity exec scripts/criar-textos.mjs --with-user-token -- --dry
//       npx sanity exec scripts/criar-textos.mjs --with-user-token
import { getCliClient } from "sanity/cli";
import { PAUTAS } from "./pautas-lancamento.mjs";
import { TEXTOS } from "./textos-lancamento.mjs";

const dry = process.argv.includes("--dry");
const client = getCliClient({ apiVersion: "2026-09-01" });

let n = 0;
const key = () => `k${(++n).toString(36)}`;
const span = (text) => ({ _type: "span", _key: key(), text, marks: [] });
const bloco = (style, text) => ({
  _type: "block",
  _key: key(),
  style,
  markDefs: [],
  children: [span(text)],
});
const item = (text) => ({
  _type: "block",
  _key: key(),
  style: "normal",
  listItem: "bullet",
  level: 1,
  markDefs: [],
  children: [span(text)],
});

const AVISO_APURAR =
  "AVISO — NÃO PUBLICAR SEM APURAR. Os trechos entre [colchetes] precisam de confirmação em " +
  "fonte primária. Preencha o campo Fontes e remova este aviso e o checklist final antes de publicar.";

function corpoDe(slug, texto) {
  const blocos = [];
  // O schema só tem os estilos normal/h2/h3, então o aviso vai como parágrafo em caixa alta.
  if (texto.status === "apurar") blocos.push(bloco("normal", AVISO_APURAR));

  for (const linha of texto.corpo) {
    const [tipo, valor] = linha;
    if (tipo === "ul") for (const it of valor) blocos.push(item(it));
    else blocos.push(bloco(tipo, valor));
  }

  if (texto.status === "apurar") {
    const pauta = PAUTAS.find((p) => p.slug === slug);
    if (pauta?.aApurar?.length) {
      blocos.push(bloco("h2", "Checklist de apuração (remover antes de publicar)"));
      for (const it of pauta.aApurar) blocos.push(item(it));
    }
  }
  return blocos;
}

function doc(pauta) {
  const texto = TEXTOS[pauta.slug];
  if (!texto) throw new Error(`Sem texto para: ${pauta.slug}`);
  return {
    _id: `drafts.pauta-${pauta.slug}`,
    _type: "materia",
    formato: pauta.formato,
    titulo: pauta.titulo,
    slug: { _type: "slug", current: pauta.slug },
    linhaFina: pauta.linhaFina,
    ...(pauta.editoria ? { editoria: { _type: "reference", _ref: `editoria-${pauta.editoria}` } } : {}),
    ...(pauta.faltaSaber ? { perguntasEmAberto: pauta.faltaSaber } : {}),
    ...(pauta.formato === "video" ? { video: { orientacao: pauta.video?.orientacao ?? "vertical" } } : {}),
    fontes: [],
    corpo: corpoDe(pauta.slug, texto),
    publicadoEm: new Date().toISOString(),
  };
}

async function main() {
  const semTexto = PAUTAS.filter((p) => !TEXTOS[p.slug]).map((p) => p.slug);
  if (semTexto.length) throw new Error(`Faltam textos: ${semTexto.join(", ")}`);

  const docs = PAUTAS.map(doc);
  const prontas = PAUTAS.filter((p) => TEXTOS[p.slug].status === "pronta").length;
  console.log(`${docs.length} textos | ${prontas} prontas para revisar/publicar | ${docs.length - prontas} para apurar e fechar`);

  if (dry) {
    for (const p of PAUTAS) {
      const d = docs.find((x) => x._id === `drafts.pauta-${p.slug}`);
      console.log(`  ${TEXTOS[p.slug].status === "pronta" ? "PRONTA" : "apurar"}  ${d.corpo.length.toString().padStart(2)} blocos  ${p.slug}`);
    }
    console.log("\n--dry: nada foi gravado.");
    return;
  }

  let tx = client.transaction();
  for (const d of docs) tx = tx.createOrReplace(d);
  const res = await tx.commit({ visibility: "async" });
  console.log(`OK: ${res.results.length} rascunhos atualizados. Revise em /studio. Nada foi publicado.`);
}

main().catch((err) => {
  console.error("FALHOU:", err.message);
  process.exit(1);
});
