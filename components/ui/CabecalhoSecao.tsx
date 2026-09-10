import Link from "next/link";
import { IconeSeta } from "@/components/ui/Icones";
import { Rotulo } from "@/components/ui/Rotulo";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  rotulo: string;
  titulo: string;
  href?: string;
  link?: string;
  tom?: "claro" | "escuro";
};

export function CabecalhoSecao({ id, rotulo, titulo, href, link, tom = "claro" }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
      <div>
        <Rotulo tom={tom}>{rotulo}</Rotulo>
        <h2
          id={id}
          className={cn(
            "mt-4 font-serif text-[1.75rem] font-bold leading-[1.15] text-balance md:text-4xl",
            tom === "escuro" && "text-branco",
          )}
        >
          {titulo}
        </h2>
      </div>
      {href && link && <LinkSeta href={href} tom={tom}>{link}</LinkSeta>}
    </div>
  );
}

export function LinkSeta({
  href,
  children,
  tom = "claro",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tom?: "claro" | "escuro";
  className?: string;
}) {
  const externo = href.startsWith("http");
  const classes = cn(
    "group inline-flex items-center gap-2 text-[0.9375rem] font-bold",
    tom === "escuro" ? "text-branco" : "text-preto",
    className,
  );
  const conteudo = (
    <>
      <span className="underline decoration-azul decoration-2 underline-offset-4 group-hover:decoration-4">
        {children}
      </span>
      <IconeSeta className="size-4 transition-transform group-hover:translate-x-1" />
    </>
  );

  return externo ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {conteudo}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {conteudo}
    </Link>
  );
}
