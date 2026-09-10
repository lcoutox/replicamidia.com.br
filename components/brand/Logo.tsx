import { ASPA_PATH, LOGO_LETTERS, LOGO_QUOTE_OFFSETS, LOGO_VIEWBOX } from "./paths";

const PRETO = "#121212";
const BRANCO = "#FFFFFF";
const AZUL = "#325BFF";

// Versões do kit: [letras, primeira aspa, segunda aspa].
// positivo: fundo branco · negativo: fundo preto · branco: fundo azul · preto: uma tinta.
const VERSOES = {
  positivo: [PRETO, PRETO, AZUL],
  negativo: [BRANCO, BRANCO, AZUL],
  branco: [BRANCO, BRANCO, BRANCO],
  preto: [PRETO, PRETO, PRETO],
} as const;

export type VersaoMarca = keyof typeof VERSOES;

type Props = {
  versao?: VersaoMarca;
  className?: string;
  titulo?: string;
};

/** Assinatura oficial, com os contornos do SVG mestre. Largura mínima: 180 px. */
export function Logo({ versao = "positivo", className, titulo = "Réplica" }: Props) {
  const [letras, aspa1, aspa2] = VERSOES[versao];

  return (
    <svg viewBox={LOGO_VIEWBOX} role="img" aria-label={titulo} className={className}>
      {LOGO_LETTERS.map((d, i) => (
        <path key={i} fill={letras} d={d} />
      ))}
      <path fill={aspa1} transform={`translate(${LOGO_QUOTE_OFFSETS[0]} 0)`} d={ASPA_PATH} />
      <path fill={aspa2} transform={`translate(${LOGO_QUOTE_OFFSETS[1]} 0)`} d={ASPA_PATH} />
    </svg>
  );
}

/** Símbolo: par de aspas idênticas, segunda deslocada 120 unidades. Largura mínima: 24 px. */
export function Simbolo({ versao = "positivo", className, titulo }: Props) {
  const [, aspa1, aspa2] = VERSOES[versao];

  return (
    <svg
      viewBox="0 0 220 140"
      className={className}
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
    >
      <path fill={aspa1} d={ASPA_PATH} />
      <path fill={aspa2} transform="translate(120 0)" d={ASPA_PATH} />
    </svg>
  );
}

/** Aspa decorativa: cópia ampliada da aspa mestre. Sempre inteira e fora da área de leitura. */
export function Aspa({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" aria-hidden className={className}>
      <path fill="currentColor" d={ASPA_PATH} />
    </svg>
  );
}
