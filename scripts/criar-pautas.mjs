// Cria as pautas de estreia como RASCUNHOS no Sanity (nada vai ao ar).
// Uso:  npx sanity exec scripts/criar-pautas.mjs --with-user-token -- --dry
//       npx sanity exec scripts/criar-pautas.mjs --with-user-token
import { getCliClient } from "sanity/cli";
import { EDITORIAS, PAUTAS } from "./pautas-lancamento.mjs";

const dry = process.argv.includes("--dry");
const client = getCliClient({ apiVersion: "2026-09-01" });

let n = 0;
const key = () => `k${(++n).toString(36)}`;

function span(text) {
  return { _type: "span", _key: key(), text, marks: [] };
}
function bloco(style, text) {
  return { _type: "block", _key: key(), style, markDefs: [], children: [span(text)] };
}
function itens(lista) {
  return lista.map((t) => ({
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [span(t)],
  }));
}

const AVISO =
  "Rascunho de pauta para a estreia da Réplica. Não publicar sem apurar em fonte primária. " +
  "Preencha o campo Fontes e remova este aviso antes de publicar.";

function montarCorpo(p) {
  const corpo = [bloco("normal", AVISO)];
  for (const [style, text] of p.corpoTexto ?? []) corpo.push(bloco(style, text));
  if (p.aApurar?.length) corpo.push(bloco("h2", "A apurar"), ...itens(p.aApurar));
  if (p.ganchos?.length) corpo.push(bloco("h2", "De onde veio a pauta"), ...itens(p.ganchos));
  return corpo;
}

function docEditoria(e) {
  return {
    _id: `editoria-${e.slug}`,
    _type: "editoria",
    titulo: e.titulo,
    slug: { _type: "slug", current: e.slug },
  };
}

function docPauta(p) {
  const agora = new Date().toISOString();
  return {
    _id: `drafts.pauta-${p.slug}`,
    _type: "materia",
    formato: p.formato,
    titulo: p.titulo,
    slug: { _type: "slug", current: p.slug },
    linhaFina: p.linhaFina,
    ...(p.editoria ? { editoria: { _type: "reference", _ref: `editoria-${p.editoria}` } } : {}),
    ...(p.resumo ? { resumo: p.resumo } : {}),
    ...(p.faltaSaber ? { perguntasEmAberto: p.faltaSaber } : {}),
    ...(p.formato === "video" ? { video: { orientacao: p.video?.orientacao ?? "vertical" } } : {}),
    fontes: [],
    corpo: montarCorpo(p),
    publicadoEm: agora,
  };
}

async function main() {
  const editorias = EDITORIAS.map(docEditoria);
  const pautas = PAUTAS.map(docPauta);

  console.log(`Editorias: ${editorias.length} | Rascunhos de pauta: ${pautas.length}`);
  if (dry) {
    for (const p of pautas) console.log(`  [${p.formato.padEnd(10)}] ${p._id}  ${p.titulo}`);
    console.log("\n--dry: nada foi gravado.");
    return;
  }

  let tx = client.transaction();
  for (const doc of [...editorias, ...pautas]) tx = tx.createOrReplace(doc);
  const res = await tx.commit({ visibility: "async" });
  console.log(`OK: ${res.results.length} documentos gravados (${editorias.length} editorias + ${pautas.length} rascunhos).`);
  console.log("Abra o Studio em /studio para revisar. Nada foi publicado.");
}

main().catch((err) => {
  console.error("FALHOU:", err.message);
  process.exit(1);
});
