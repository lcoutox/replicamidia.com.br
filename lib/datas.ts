const FUSO = "America/Sao_Paulo";
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const formatoPartes = new Intl.DateTimeFormat("en-CA", {
  timeZone: FUSO,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const formatoLongo = new Intl.DateTimeFormat("pt-BR", { timeZone: FUSO, dateStyle: "long" });

function partes(iso: string) {
  const p = Object.fromEntries(formatoPartes.formatToParts(new Date(iso)).map((x) => [x.type, x.value]));
  return { ano: p.year, mes: Number(p.month), dia: Number(p.day), hora: p.hour, minuto: p.minute };
}

/** "10 set 2026" */
export function dataCurta(iso: string) {
  const p = partes(iso);
  return `${p.dia} ${MESES[p.mes - 1]} ${p.ano}`;
}

/** "10 set 2026, 09h30" */
export function dataHora(iso: string) {
  const p = partes(iso);
  return `${dataCurta(iso)}, ${p.hora}h${p.minuto}`;
}

/** "10 de setembro de 2026" */
export function dataLonga(iso: string) {
  return formatoLongo.format(new Date(iso));
}
