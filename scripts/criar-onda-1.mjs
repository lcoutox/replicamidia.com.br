// Cria as 6 matérias da primeira onda como RASCUNHOS no Sanity.
// Uso:  npx sanity exec scripts/criar-onda-1.mjs --with-user-token -- --dry
//       npx sanity exec scripts/criar-onda-1.mjs --with-user-token
import { getCliClient } from "sanity/cli";
import { ONDA_1 } from "./materias-onda-1.mjs";

const dry = process.argv.includes("--dry");
const client = getCliClient({ apiVersion: "2026-09-01" });

let n = 0;
const key = () => `k${(++n).toString(36)}`;
const span = (text) => ({ _type: "span", _key: key(), text, marks: [] });
const bloco = (style, text) => ({ _type: "block", _key: key(), style, markDefs: [], children: [span(text)] });
const item = (text) => ({
  _type: "block",
  _key: key(),
  style: "normal",
  listItem: "bullet",
  level: 1,
  markDefs: [],
  children: [span(text)],
});

function corpo(linhas) {
  const out = [];
  for (const [tipo, valor] of linhas) {
    if (tipo === "ul") for (const it of valor) out.push(item(it));
    else out.push(bloco(tipo, valor));
  }
  return out;
}

function doc(m) {
  return {
    _id: `drafts.onda1-${m.slug}`,
    _type: "materia",
    formato: m.formato,
    titulo: m.titulo,
    slug: { _type: "slug", current: m.slug },
    linhaFina: m.linhaFina,
    ...(m.editoria ? { editoria: { _type: "reference", _ref: `editoria-${m.editoria}` } } : {}),
    ...(m.seo ? { seo: m.seo } : {}),
    ...(m.resumo ? { resumo: m.resumo } : {}),
    ...(m.perguntasEmAberto ? { perguntasEmAberto: m.perguntasEmAberto } : {}),
    fontes: (m.fontes ?? []).map((f) => ({ _key: key(), ...f })),
    corpo: corpo(m.corpo),
    publicadoEm: new Date().toISOString(),
  };
}

async function main() {
  const docs = ONDA_1.map(doc);
  console.log(`${docs.length} matérias`);
  for (const d of docs) {
    const conf = JSON.stringify(d).match(/\[CONFIRMAR/g)?.length ?? 0;
    console.log(`  ${d.formato.padEnd(9)} ${d.corpo.length.toString().padStart(2)} blocos  ${conf} [CONFIRMAR]  ${d._id}`);
  }
  if (dry) return console.log("\n--dry: nada foi gravado.");

  let tx = client.transaction();
  for (const d of docs) tx = tx.createOrReplace(d);
  const res = await tx.commit({ visibility: "async" });
  console.log(`\nOK: ${res.results.length} rascunhos criados. Revise em /studio. Nada foi publicado.`);
}

main().catch((e) => {
  console.error("FALHOU:", e.message);
  process.exit(1);
});
