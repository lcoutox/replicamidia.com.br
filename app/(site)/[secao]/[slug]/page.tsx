import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Aspa } from "@/components/brand/Logo";
import { CardAuto } from "@/components/cards";
import { Compartilhar } from "@/components/materia/Compartilhar";
import { Corpo } from "@/components/materia/Corpo";
import { MidiaPrincipal } from "@/components/materia/MidiaPrincipal";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Rotulo } from "@/components/ui/Rotulo";
import { cn } from "@/lib/cn";
import { getMateria, getRelacionadas, getTodasMaterias } from "@/lib/content";
import { dataHora } from "@/lib/datas";
import { FORMATO_ROTULO, hrefMateria, secaoDoFormato } from "@/lib/secoes";
import { SITE, urlAbsoluta } from "@/lib/site";
import type { Materia } from "@/lib/types";

export const revalidate = 300;

export async function generateStaticParams() {
  const materias = await getTodasMaterias();
  return materias.map((m) => ({ secao: secaoDoFormato(m.formato).slug, slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[secao]/[slug]">): Promise<Metadata> {
  const materia = await getMateria((await params).slug);
  if (!materia) return {};

  const url = hrefMateria(materia);
  // SEO da matéria: campos próprios têm prioridade; sem eles, título e linha fina.
  const tituloSeo = materia.seo?.metaTitulo?.trim() || materia.titulo;
  const descricao = materia.seo?.metaDescricao?.trim() || materia.linhaFina || undefined;
  const palavras = ["Nova Serrana", FORMATO_ROTULO[materia.formato]];
  if (materia.editoria?.titulo) palavras.push(materia.editoria.titulo);

  return {
    title: tituloSeo,
    description: descricao,
    keywords: palavras,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: tituloSeo,
      description: descricao,
      url,
      publishedTime: materia.publicadoEm,
      modifiedTime: materia.atualizadoEm ?? undefined,
      section: FORMATO_ROTULO[materia.formato],
      images: materia.imagem?.url ? [{ url: materia.imagem.url, alt: materia.imagem.alt }] : undefined,
    },
    twitter: { card: materia.imagem?.url ? "summary_large_image" : "summary" },
  };
}

function dadosEstruturados(materia: Materia, url: string) {
  const tipo = { opiniao: "OpinionNewsArticle", analise: "AnalysisNewsArticle" }[materia.formato as string] ?? "NewsArticle";
  return {
    "@context": "https://schema.org",
    "@type": tipo,
    headline: materia.titulo,
    description: materia.linhaFina ?? undefined,
    datePublished: materia.publicadoEm,
    dateModified: materia.atualizadoEm ?? materia.publicadoEm,
    image: materia.imagem?.url ? [materia.imagem.url] : undefined,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE.nome, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.nome,
      logo: { "@type": "ImageObject", url: urlAbsoluta("/brand/replica-logo-positivo.png") },
    },
  };
}

export default async function PaginaMateria({ params }: PageProps<"/[secao]/[slug]">) {
  const { secao, slug } = await params;
  const materia = await getMateria(slug);
  if (!materia) notFound();

  const href = hrefMateria(materia);
  if (secaoDoFormato(materia.formato).slug !== secao) permanentRedirect(href);

  const relacionadas = await getRelacionadas(materia);
  const url = urlAbsoluta(href);
  const atualizada = materia.atualizadoEm && Date.parse(materia.atualizadoEm) > Date.parse(materia.publicadoEm);
  const jsonLd = JSON.stringify(dadosEstruturados(materia, url)).replace(/</g, "\\u003c");

  return (
    <>
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

        <header className="container-site pt-8 md:pt-14">
          <div className="mx-auto max-w-3xl">
            <Link href={`/${secaoDoFormato(materia.formato).slug}`} className="inline-block">
              <Rotulo tom="azul">
                {FORMATO_ROTULO[materia.formato]}
                {materia.editoria && <span className="text-grafite"> / {materia.editoria.titulo}</span>}
              </Rotulo>
            </Link>

            <h1
              className={cn(
                "mt-5 text-[2rem] font-bold leading-[1.15] tracking-[-0.01em] text-balance md:text-[2.625rem] lg:text-5xl",
                materia.formato === "nota" ? "font-sans" : "font-serif",
              )}
            >
              {materia.titulo}
            </h1>

            {materia.linhaFina && (
              <p className="mt-5 text-xl leading-[1.45] text-grafite md:text-[1.375rem]">{materia.linhaFina}</p>
            )}

            {materia.formato === "entrevista" && materia.entrevistado?.nome && (
              <p className="mt-5 text-base leading-[1.5]">
                Entrevista com <strong className="font-bold">{materia.entrevistado.nome}</strong>
                {materia.entrevistado.descricao && <span className="text-grafite">, {materia.entrevistado.descricao}</span>}
              </p>
            )}

            {materia.formato === "opiniao" && (
              <p className="mt-6 border-l-4 border-azul bg-cinza px-5 py-4 text-[0.9375rem] leading-[1.5]">
                <strong className="font-bold">Este é um texto de opinião.</strong> Ele apresenta a interpretação da
                Réplica sobre o tema, com o argumento explicado e os fatos que o sustentam indicados nas fontes.
              </p>
            )}

            <div className="mt-8 flex flex-col gap-4 border-y border-linha py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-[1.5] text-grafite">
                <span className="font-bold text-preto">Por Réplica</span>
                <span aria-hidden> · </span>
                Publicado em <time dateTime={materia.publicadoEm}>{dataHora(materia.publicadoEm)}</time>
                {atualizada && (
                  <span className="block">
                    Atualizado em <time dateTime={materia.atualizadoEm!}>{dataHora(materia.atualizadoEm!)}</time>
                  </span>
                )}
              </p>
              <Compartilhar url={url} titulo={materia.titulo} />
            </div>
          </div>
        </header>

        <MidiaPrincipal materia={materia} />

        <div className="container-site pb-16 pt-10 md:pt-12">
          <div className="mx-auto max-w-[42rem]">
            {materia.resumo && materia.resumo.length > 0 && (
              <aside aria-labelledby="titulo-resumo" className="mb-10 bg-cinza p-6 md:p-8">
                <h2 id="titulo-resumo" className="text-xs font-bold uppercase tracking-[0.08em] text-azul">
                  Resumo
                </h2>
                <ol className="mt-4 space-y-3">
                  {materia.resumo.map((ponto, i) => (
                    <li key={i} className="grid grid-cols-[1.75rem_1fr] text-[1.0625rem] leading-[1.5]">
                      <span aria-hidden className="font-bold text-azul">
                        {i + 1}.
                      </span>
                      <span>{ponto}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            )}

            <Corpo blocos={materia.corpo ?? []} entrevistado={materia.entrevistado?.nome} />

            {materia.perguntasEmAberto && materia.perguntasEmAberto.length > 0 && (
              <section aria-labelledby="titulo-falta-saber" className="mt-14 border-t-4 border-preto pt-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <Rotulo>Consequência</Rotulo>
                    <h2 id="titulo-falta-saber" className="mt-4 font-serif text-[1.75rem] font-bold leading-[1.15]">
                      O que falta saber
                    </h2>
                  </div>
                  <Aspa className="h-14 w-auto shrink-0 text-azul" />
                </div>
                <ul className="mt-6 space-y-4">
                  {materia.perguntasEmAberto.map((pergunta, i) => (
                    <li key={i} className="border-l-4 border-azul pl-4 font-serif text-xl font-bold leading-[1.3]">
                      {pergunta}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.9375rem] leading-[1.5] text-grafite">
                  A Réplica segue acompanhando. Este texto será atualizado quando houver resposta.
                </p>
              </section>
            )}

            {materia.fontes && materia.fontes.length > 0 && (
              <section aria-labelledby="titulo-fontes" className="mt-12">
                <h2 id="titulo-fontes" className="text-xs font-bold uppercase tracking-[0.08em]">
                  Fontes
                </h2>
                <ul className="mt-4 space-y-2 text-[0.9375rem] leading-[1.5]">
                  {materia.fontes.map((fonte, i) => (
                    <li key={fonte._key ?? i} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-azul" />
                      {fonte.url ? (
                        <a
                          href={fonte.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-azul decoration-2 underline-offset-2 hover:text-azul"
                        >
                          {fonte.nome}
                        </a>
                      ) : (
                        <span>{fonte.nome}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="titulo-correcoes" className="mt-12 border-t border-linha pt-8">
              <h2 id="titulo-correcoes" className="text-xs font-bold uppercase tracking-[0.08em]">
                Correções
              </h2>
              {materia.correcoes && materia.correcoes.length > 0 ? (
                <ul className="mt-4 space-y-4">
                  {materia.correcoes.map((correcao, i) => (
                    <li
                      key={correcao._key ?? i}
                      className="border-l-4 border-azul bg-cinza px-5 py-4 text-[0.9375rem] leading-[1.5]"
                    >
                      <time dateTime={correcao.data} className="mb-1 block text-[0.8125rem] font-bold">
                        {dataHora(correcao.data)}
                      </time>
                      {correcao.texto}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[0.9375rem] leading-[1.5] text-grafite">
                  Nenhuma correção até o momento. Encontrou um erro?{" "}
                  <Link
                    href="/sobre#correcoes"
                    className="font-bold text-preto underline decoration-azul decoration-2 underline-offset-2"
                  >
                    Veja como pedir uma correção
                  </Link>
                  .
                </p>
              )}
            </section>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-linha pt-6">
              <p className="text-sm font-bold">Compartilhe esta publicação</p>
              <Compartilhar url={url} titulo={materia.titulo} />
            </div>
          </div>
        </div>
      </article>

      {relacionadas.length > 0 && (
        <aside aria-labelledby="titulo-leia-tambem" className="bg-cinza py-12 md:py-16">
          <div className="container-site">
            <CabecalhoSecao id="titulo-leia-tambem" rotulo="Continue lendo" titulo="Leia também" />
            <ul className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
              {relacionadas.map((m) => (
                <li key={m._id}>
                  <CardAuto materia={m} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </>
  );
}
