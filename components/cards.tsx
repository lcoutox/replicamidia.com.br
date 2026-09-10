import Link from "next/link";
import { Aspa } from "@/components/brand/Logo";
import { Foto } from "@/components/ui/Foto";
import { IconePlay } from "@/components/ui/Icones";
import { cn } from "@/lib/cn";
import { dataCurta, dataHora } from "@/lib/datas";
import { FORMATO_ROTULO, hrefMateria } from "@/lib/secoes";
import type { Formato, MateriaResumo } from "@/lib/types";

type Tom = "claro" | "escuro";

const hover = "decoration-azul decoration-2 underline-offset-[0.18em] group-hover:underline";

/** Notas são informação de serviço (Sans); os demais formatos usam a Serif das manchetes. */
function fonteTitulo(formato: Formato) {
  return formato === "nota" ? "font-sans" : "font-serif";
}

function Chapeu({ materia, tom = "claro" }: { materia: MateriaResumo; tom?: Tom }) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-2 text-xs font-bold uppercase leading-[1.3] tracking-[0.08em]",
        tom === "claro" ? "text-azul" : "text-branco",
      )}
    >
      <span>{FORMATO_ROTULO[materia.formato]}</span>
      {materia.editoria && (
        <>
          <span aria-hidden className={tom === "claro" ? "text-linha" : "text-grafite"}>
            /
          </span>
          <span className={tom === "claro" ? "text-preto" : "text-nevoa"}>{materia.editoria.titulo}</span>
        </>
      )}
    </p>
  );
}

function Data({ materia, tom = "claro", comHora = false }: { materia: MateriaResumo; tom?: Tom; comHora?: boolean }) {
  return (
    <time
      dateTime={materia.publicadoEm}
      className={cn("block text-[0.8125rem] leading-[1.3]", tom === "escuro" ? "text-nevoa" : "text-grafite")}
    >
      {comHora ? dataHora(materia.publicadoEm) : dataCurta(materia.publicadoEm)}
    </time>
  );
}

/** Pauta principal da home. */
export function CardManchete({ materia }: { materia: MateriaResumo }) {
  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article>
        <Foto
          imagem={materia.imagem}
          proporcao="16 / 10"
          sizes="(min-width: 1280px) 820px, (min-width: 1024px) 64vw, 100vw"
          preload
        />
        <div className="mt-6 max-w-3xl">
          <Chapeu materia={materia} />
          <h2
            className={cn(
              "mt-3 text-[2rem] font-bold leading-[1.15] tracking-[-0.01em] text-balance md:text-5xl",
              fonteTitulo(materia.formato),
              hover,
            )}
          >
            {materia.titulo}
          </h2>
          {materia.linhaFina && (
            <p className="mt-4 text-lg leading-[1.5] text-grafite md:text-xl">{materia.linhaFina}</p>
          )}
          <div className="mt-4">
            <Data materia={materia} />
          </div>
        </div>
      </article>
    </Link>
  );
}

/** Chamada grande da seleção editorial. */
export function CardDestaque({ materia, horizontal = false }: { materia: MateriaResumo; horizontal?: boolean }) {
  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article className={cn(horizontal && "grid gap-5 md:grid-cols-12 md:gap-10")}>
        <Foto
          imagem={materia.imagem}
          sizes={horizontal ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
          className={horizontal ? "md:col-span-7" : undefined}
        />
        <div className={cn(horizontal ? "md:col-span-5 md:self-center" : "mt-5")}>
          <Chapeu materia={materia} />
          <h3
            className={cn(
              "mt-3 text-[1.625rem] font-bold leading-[1.15] text-balance md:text-[2.25rem]",
              fonteTitulo(materia.formato),
              hover,
            )}
          >
            {materia.titulo}
          </h3>
          {materia.linhaFina && (
            <p className="mt-4 text-base leading-[1.5] text-grafite md:text-lg">{materia.linhaFina}</p>
          )}
          <div className="mt-4">
            <Data materia={materia} />
          </div>
        </div>
      </article>
    </Link>
  );
}

export function CardPadrao({ materia, semImagem = false }: { materia: MateriaResumo; semImagem?: boolean }) {
  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article>
        {!semImagem && (
          <Foto
            imagem={materia.imagem}
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
            className="mb-4"
          />
        )}
        <Chapeu materia={materia} />
        <h3 className={cn("mt-2 text-xl font-bold leading-[1.2] text-balance", fonteTitulo(materia.formato), hover)}>
          {materia.titulo}
        </h3>
        {materia.linhaFina && (
          <p className="mt-2 line-clamp-3 text-[0.9375rem] leading-[1.5] text-grafite">{materia.linhaFina}</p>
        )}
        <div className="mt-3">
          <Data materia={materia} />
        </div>
      </article>
    </Link>
  );
}

/** Item compacto de lista, com miniatura opcional à direita. */
export function CardLista({ materia }: { materia: MateriaResumo }) {
  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article className="grid grid-cols-[1fr_auto] items-start gap-4">
        <div>
          <Chapeu materia={materia} />
          <h3 className={cn("mt-2 text-lg font-bold leading-[1.25]", fonteTitulo(materia.formato), hover)}>
            {materia.titulo}
          </h3>
          <div className="mt-2">
            <Data materia={materia} />
          </div>
        </div>
        {materia.imagem?.url && (
          <Foto imagem={materia.imagem} proporcao="1 / 1" sizes="96px" className="w-20 md:w-24" />
        )}
      </article>
    </Link>
  );
}

/** Nota curta: sem imagem, título em Sans. */
export function CardNota({ materia }: { materia: MateriaResumo }) {
  return (
    <Link href={hrefMateria(materia)} className="group block border-t-2 border-preto pt-4">
      <article>
        <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.08em] text-azul">
          {materia.editoria?.titulo ?? FORMATO_ROTULO.nota}
        </p>
        <h3 className={cn("mt-2 font-sans text-[1.0625rem] font-bold leading-[1.35]", hover)}>{materia.titulo}</h3>
        <div className="mt-3">
          <Data materia={materia} comHora />
        </div>
      </article>
    </Link>
  );
}

export function CardOpiniao({ materia, grande = false }: { materia: MateriaResumo; grande?: boolean }) {
  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article>
        <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.08em] text-azul">Opinião da Réplica</p>
        <h3
          className={cn(
            "mt-3 font-serif font-bold leading-[1.2] text-balance",
            grande ? "text-[1.75rem] md:text-[2.25rem]" : "text-[1.375rem] md:text-[1.625rem]",
            hover,
          )}
        >
          {materia.titulo}
        </h3>
        {materia.linhaFina && (
          <p className={cn("mt-3 leading-[1.5] text-grafite", grande ? "text-lg" : "text-base")}>
            {materia.linhaFina}
          </p>
        )}
        <div className="mt-3">
          <Data materia={materia} />
        </div>
      </article>
    </Link>
  );
}

/** Vídeo: vertical (9:16, linguagem do Instagram) ou horizontal (16:9). */
export function CardVideo({ materia, tom = "escuro" }: { materia: MateriaResumo; tom?: Tom }) {
  const vertical = materia.video?.orientacao !== "horizontal";

  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article>
        <div className="relative">
          <Foto
            imagem={materia.imagem}
            proporcao={vertical ? "9 / 16" : "16 / 9"}
            sizes={vertical ? "(min-width: 768px) 260px, 62vw" : "(min-width: 768px) 440px, 80vw"}
            tom="escuro"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-14 place-items-center rounded-full bg-azul text-branco transition-transform group-hover:scale-110">
              <IconePlay className="ml-0.5 size-5" />
            </span>
          </span>
          {materia.video?.duracao && (
            <span className="absolute bottom-3 left-3 bg-preto px-2 py-1 text-xs font-bold text-branco">
              {materia.video.duracao}
            </span>
          )}
        </div>
        <h3
          className={cn(
            "mt-3 font-serif text-lg font-bold leading-[1.25]",
            tom === "escuro" ? "text-branco" : "text-preto",
            hover,
          )}
        >
          {materia.titulo}
        </h3>
        <div className="mt-2">
          <Data materia={materia} tom={tom} />
        </div>
      </article>
    </Link>
  );
}

/** Entrevista em destaque, conduzida pela frase (citação verificada). */
export function CardConversa({ materia }: { materia: MateriaResumo }) {
  return (
    <Link href={hrefMateria(materia)} className="group block">
      <article className="grid items-center gap-6 md:grid-cols-12 md:gap-12">
        <Foto
          imagem={materia.imagem}
          proporcao="4 / 5"
          sizes="(min-width: 768px) 40vw, 100vw"
          className="md:col-span-5"
        />
        <div className="md:col-span-7">
          <Chapeu materia={materia} />
          {materia.frase && (
            <blockquote className="mt-6">
              <Aspa className="h-10 w-auto text-azul md:h-14" />
              <p className="mt-5 font-serif text-[1.75rem] font-bold leading-[1.2] text-balance md:text-[2.5rem]">
                “{materia.frase}”
              </p>
            </blockquote>
          )}
          {materia.entrevistado && (
            <p className="mt-5 text-base leading-[1.5]">
              <span className="font-bold">{materia.entrevistado.nome}</span>
              {materia.entrevistado.descricao && (
                <span className="text-grafite">, {materia.entrevistado.descricao}</span>
              )}
            </p>
          )}
          <h3 className={cn("mt-6 border-t border-linha pt-5 font-serif text-xl font-bold leading-[1.25]", hover)}>
            {materia.titulo}
          </h3>
        </div>
      </article>
    </Link>
  );
}

/** Escolhe o card adequado ao formato, para listas mistas. */
export function CardAuto({ materia, tom = "claro" }: { materia: MateriaResumo; tom?: Tom }) {
  switch (materia.formato) {
    case "nota":
      return <CardNota materia={materia} />;
    case "opiniao":
      return <CardOpiniao materia={materia} />;
    case "video":
      return <CardVideo materia={materia} tom={tom} />;
    default:
      return <CardPadrao materia={materia} />;
  }
}
