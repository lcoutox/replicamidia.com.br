import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  /** Fundo sobre o qual o rótulo aparece. "azul" usa texto azul sobre fundo claro. */
  tom?: "claro" | "escuro" | "azul";
  barra?: boolean;
  className?: string;
};

/** Rótulo editorial do sistema gráfico: Sans Bold em caixa alta com a barra azul. */
export function Rotulo({ children, tom = "claro", barra = true, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-start gap-2 text-xs font-bold uppercase leading-[1.3] tracking-[0.08em]",
        tom === "claro" && "text-preto",
        tom === "escuro" && "text-branco",
        tom === "azul" && "text-azul",
        className,
      )}
    >
      <span>{children}</span>
      {barra && <span aria-hidden className="block h-1 w-10 bg-azul" />}
    </span>
  );
}
