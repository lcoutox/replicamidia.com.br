import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardAuto, CardDestaque, CardVideo } from "@/components/cards";
import { cn } from "@/lib/cn";
import { getMateriasDaSecao } from "@/lib/content";
import { getSecao, SECOES } from "@/lib/secoes";

export const revalidate = 300;
export const dynamicParams = false;

export function generateStaticParams() {
  return SECOES.map((secao) => ({ secao: secao.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[secao]">): Promise<Metadata> {
  const secao = getSecao((await params).secao);
  if (!secao) return {};
  return { title: secao.titulo, description: secao.descricao, alternates: { canonical: `/${secao.slug}` } };
}

export default async function PaginaSecao({ params }: PageProps<"/[secao]">) {
  const secao = getSecao((await params).secao);
  if (!secao) notFound();

  const materias = await getMateriasDaSecao(secao);
  const escuro = secao.slug === "videos";
  const [primeira, ...demais] = materias;

  return (
    <div className={cn(escuro && "bg-preto text-branco")}>
      <header className={cn("border-b", escuro ? "border-carvao" : "border-linha")}>
        <div className="container-site py-10 md:py-16">
          <h1 className="font-serif text-[2.5rem] font-bold leading-[1.1] md:text-5xl">{secao.titulo}</h1>
          <span aria-hidden className="mt-5 block h-1.5 w-16 bg-azul" />
          <p className={cn("mt-5 max-w-2xl text-lg leading-[1.5]", escuro ? "text-nevoa" : "text-grafite")}>
            {secao.descricao}
          </p>
        </div>
      </header>

      {materias.length === 0 ? (
        <p className="container-site py-16 text-lg">Ainda não há publicações nesta seção.</p>
      ) : escuro ? (
        <ul className="container-site grid grid-cols-2 items-start gap-x-4 gap-y-10 py-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {materias.map((materia) => (
            <li
              key={materia._id}
              className={cn(materia.video?.orientacao === "horizontal" && "col-span-2")}
            >
              <CardVideo materia={materia} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="container-site py-10 md:py-14">
          <CardDestaque materia={primeira} horizontal />
          {demais.length > 0 && (
            <>
              <h2 className="sr-only">Mais publicações</h2>
              <ul className="mt-12 grid gap-x-8 gap-y-12 border-t border-linha pt-10 sm:grid-cols-2 lg:grid-cols-3">
                {demais.map((materia) => (
                  <li key={materia._id}>
                    <CardAuto materia={materia} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
