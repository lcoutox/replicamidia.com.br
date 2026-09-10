import Link from "next/link";
import { Aspa, Simbolo } from "@/components/brand/Logo";
import {
  CardConversa,
  CardDestaque,
  CardLista,
  CardManchete,
  CardNota,
  CardOpiniao,
  CardPadrao,
  CardVideo,
} from "@/components/cards";
import { CabecalhoSecao, LinkSeta } from "@/components/ui/CabecalhoSecao";
import { IconeSeta } from "@/components/ui/Icones";
import { Rotulo } from "@/components/ui/Rotulo";
import { cn } from "@/lib/cn";
import { getConfiguracoes, getHome } from "@/lib/content";
import { isSanityConfigured } from "@/sanity/env";

export const revalidate = 300;

export default async function PaginaInicial() {
  const [home, config] = await Promise.all([getHome(), getConfiguracoes()]);
  const { manchete, destaques, notas, videos, opiniao, conversa } = home;
  const laterais = destaques.slice(0, 3);
  const selecao = destaques.slice(3);
  const mostrarWhatsApp = Boolean(config.whatsapp) || !isSanityConfigured;

  return (
    <>
      <h1 className="sr-only">Réplica: informação, análise e opinião sobre Nova Serrana</h1>

      {/* Pauta principal + chamadas laterais */}
      {manchete && (
        <section aria-label="Pauta principal" className="container-site grid gap-10 py-8 md:py-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CardManchete materia={manchete} />
          </div>
          {laterais.length > 0 && (
            <aside aria-label="Também em destaque" className="lg:col-span-4 lg:border-l lg:border-linha lg:pl-10">
              <ul className="divide-y divide-linha border-t border-linha pt-8 lg:border-t-0 lg:pt-0">
                {laterais.map((materia, i) => (
                  <li key={materia._id} className="py-6 first:pt-0 last:pb-0">
                    {i === 0 ? <CardPadrao materia={materia} /> : <CardLista materia={materia} />}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </section>
      )}

      {/* Notas curtas */}
      {notas.length > 0 && (
        <section aria-labelledby="titulo-notas" className="bg-cinza py-10 md:py-14">
          <div className="container-site">
            <CabecalhoSecao
              id="titulo-notas"
              rotulo="Em pauta"
              titulo="O que muda na cidade"
              href="/em-pauta"
              link="Tudo em pauta"
            />
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {notas.map((materia) => (
                <li key={materia._id}>
                  <CardNota materia={materia} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Seleção editorial em tamanhos diferentes */}
      {selecao.length > 0 && (
        <section aria-labelledby="titulo-selecao" className="container-site py-12 md:py-20">
          <CabecalhoSecao id="titulo-selecao" rotulo="Seleção" titulo="Para entender a cidade" />
          <div className="mt-10">
            <CardDestaque materia={selecao[0]} horizontal />
          </div>
          {selecao.length > 1 && (
            <ul className="mt-12 grid gap-10 border-t border-linha pt-10 md:grid-cols-3 md:gap-8">
              {selecao.slice(1).map((materia) => (
                <li key={materia._id}>
                  <CardPadrao materia={materia} />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Vídeos */}
      {videos.length > 0 && (
        <section aria-labelledby="titulo-videos" className="bg-preto py-12 text-branco md:py-20">
          <div className="container-site">
            <CabecalhoSecao
              id="titulo-videos"
              tom="escuro"
              rotulo="Vídeos"
              titulo="A cidade em poucos minutos"
              href="/videos"
              link="Todos os vídeos"
            />
            <ul className="scroll-discreto -mx-5 mt-10 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-4 md:-mx-8 md:gap-6 md:px-8">
              {videos.map((materia) => (
                <li
                  key={materia._id}
                  className={cn(
                    "shrink-0 snap-start",
                    materia.video?.orientacao === "horizontal" ? "w-[80vw] max-w-[440px]" : "w-[62vw] max-w-[240px]",
                  )}
                >
                  <CardVideo materia={materia} />
                </li>
              ))}
            </ul>
            {config.instagram && (
              <LinkSeta href={config.instagram} tom="escuro" className="mt-6">
                Siga a Réplica no Instagram
              </LinkSeta>
            )}
          </div>
        </section>
      )}

      {/* Opinião */}
      {opiniao.length > 0 && (
        <section aria-labelledby="titulo-opiniao" className="bg-cinza py-12 md:py-20">
          <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Rotulo>Opinião</Rotulo>
              <h2 id="titulo-opiniao" className="mt-5 font-serif text-4xl font-bold leading-[1.1] md:text-5xl">
                A cidade em debate.
              </h2>
              <p className="mt-4 max-w-sm text-base leading-[1.5] text-grafite">
                Textos que assumem a interpretação da Réplica, explicam o argumento e apontam os fatos que o sustentam.
              </p>
              <LinkSeta href="/opiniao" className="mt-6">
                Todas as opiniões
              </LinkSeta>
              <Aspa className="mt-12 hidden h-44 w-auto text-azul lg:block" />
            </div>
            <ul className="divide-y divide-linha lg:col-span-7 lg:col-start-6">
              {opiniao.map((materia, i) => (
                <li key={materia._id} className="py-8 first:pt-0 last:pb-0">
                  <CardOpiniao materia={materia} grande={i === 0} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Conversa */}
      {conversa.length > 0 && (
        <section aria-labelledby="titulo-conversa" className="container-site py-12 md:py-20">
          <CabecalhoSecao
            id="titulo-conversa"
            rotulo="Conversa"
            titulo="Perguntas que abrem o debate"
            href="/conversa"
            link="Todas as entrevistas"
          />
          <div className="mt-10">
            <CardConversa materia={conversa[0]} />
          </div>
          {conversa[1] && (
            <div className="mt-12 border-t border-linha pt-10">
              <CardDestaque materia={conversa[1]} horizontal />
            </div>
          )}
        </section>
      )}

      {/* Canal no WhatsApp: versão monocromática sobre azul */}
      {mostrarWhatsApp && (
        <section aria-labelledby="titulo-whatsapp" className="bg-azul text-branco">
          <div className="container-site grid items-center gap-8 py-12 md:grid-cols-12 md:py-16">
            <Simbolo versao="branco" className="h-auto w-24 md:col-span-2 md:w-full md:max-w-[8rem]" />
            <div className="md:col-span-6">
              <h2 id="titulo-whatsapp" className="font-serif text-[2rem] font-bold leading-[1.15] md:text-[2.5rem]">
                Receba a Réplica no WhatsApp
              </h2>
              <p className="mt-3 max-w-xl text-lg leading-[1.5]">
                Resumo objetivo em até três pontos. Fonte, data e link para aprofundar.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              {config.whatsapp ? (
                <a
                  href={config.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-3 bg-branco px-6 text-[0.9375rem] font-bold text-preto hover:bg-preto hover:text-branco"
                >
                  Entrar no canal
                  <IconeSeta className="size-4" />
                </a>
              ) : (
                <Link
                  href="/studio"
                  className="inline-flex h-12 items-center gap-3 border-2 border-branco px-6 text-[0.9375rem] font-bold hover:bg-branco hover:text-preto"
                >
                  Cadastre o link do canal
                  <IconeSeta className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
