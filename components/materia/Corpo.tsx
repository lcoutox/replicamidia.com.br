import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { Aspa } from "@/components/brand/Logo";
import type { BlocoCitacao, BlocoCorpo, BlocoImagem, BlocoPerguntaResposta } from "@/lib/types";

const texto = "text-[1.0625rem] leading-[1.6] md:text-lg";

function paragrafos(valor: string) {
  return valor
    .split(/\n+/)
    .map((trecho) => trecho.trim())
    .filter(Boolean);
}

export function Corpo({ blocos, entrevistado }: { blocos: BlocoCorpo[]; entrevistado?: string | null }) {
  const primeiroNome = entrevistado?.split(" ")[0];

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className={`mb-6 ${texto}`}>{children}</p>,
      h2: ({ children }) => (
        <h2 className="mb-4 mt-12 text-2xl font-bold leading-[1.25] md:text-[1.75rem]">{children}</h2>
      ),
      h3: ({ children }) => <h3 className="mb-3 mt-8 text-xl font-bold leading-[1.3]">{children}</h3>,
    },
    list: {
      bullet: ({ children }) => <ul className={`mb-6 list-disc space-y-2 pl-6 marker:text-azul ${texto}`}>{children}</ul>,
      number: ({ children }) => (
        <ol className={`mb-6 list-decimal space-y-2 pl-6 marker:font-bold marker:text-azul ${texto}`}>{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      link: ({ children, value }) => {
        const href: string = value?.href ?? "#";
        const externo = href.startsWith("http");
        return (
          <a
            href={href}
            {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="underline decoration-azul decoration-2 underline-offset-[3px] hover:text-azul"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      citacao: ({ value }: { value: BlocoCitacao }) => (
        <figure className="my-12">
          <Aspa className="h-10 w-auto text-azul" />
          <blockquote className="mt-4 font-serif text-[1.625rem] font-bold leading-[1.25] text-balance md:text-[2rem]">
            <p>“{value.texto}”</p>
          </blockquote>
          <figcaption className="mt-4 text-[0.9375rem] leading-[1.4]">
            <span className="font-bold">{value.autor}</span>
            {value.contexto && <span className="text-grafite">, {value.contexto}</span>}
          </figcaption>
        </figure>
      ),
      perguntaResposta: ({ value }: { value: BlocoPerguntaResposta }) => (
        <div className="my-10">
          <p className="mb-4 text-[1.0625rem] font-bold leading-[1.5] md:text-lg">
            <span className="mr-2 text-xs uppercase tracking-[0.08em] text-azul">Réplica</span>
            {value.pergunta}
          </p>
          {paragrafos(value.resposta).map((trecho, i) => (
            <p key={i} className={`mb-4 ${texto}`}>
              {i === 0 && primeiroNome && (
                <span className="mr-2 text-xs font-bold uppercase tracking-[0.08em] text-grafite">{primeiroNome}</span>
              )}
              {trecho}
            </p>
          ))}
        </div>
      ),
      imagem: ({ value }: { value: BlocoImagem }) =>
        value.url ? (
          <figure className="my-10">
            <Image
              src={value.url}
              alt={value.alt ?? ""}
              width={value.width ?? 1600}
              height={value.height ?? 1066}
              sizes="(min-width: 768px) 672px, 100vw"
              className="h-auto w-full bg-cinza"
            />
            {(value.legenda || value.credito) && (
              <figcaption className="mt-3 text-[0.8125rem] leading-[1.4] text-grafite">
                {value.legenda}
                {value.legenda && value.credito && " "}
                {value.credito && <span className="uppercase tracking-[0.04em]">Foto: {value.credito}</span>}
              </figcaption>
            )}
          </figure>
        ) : null,
    },
  };

  return <PortableText value={blocos} components={components} />;
}
