import type { Metadata } from "next";
import { Aspa, Logo } from "@/components/brand/Logo";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Rotulo } from "@/components/ui/Rotulo";
import { getConfiguracoes } from "@/lib/content";
import { SITE } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Sobre",
  description: SITE.descricao,
  alternates: { canonical: "/sobre" },
};

// Textos do Brandbook Réplica 1.0.
const PILARES = [
  {
    titulo: "Direito de resposta",
    texto: "Quem é citado tem o direito de responder. A fala publicada pode ser examinada e contestada.",
  },
  {
    titulo: "Consequência",
    texto: "O que mudou. O que vem a seguir.",
  },
  {
    titulo: "Presença pública",
    texto: "Uma voz reconhecível na cidade — presente em informação, opinião e entrevista.",
  },
];

const VOZ = [
  {
    rotulo: "Informação",
    texto: "O que aconteceu, quando, onde e com base em qual fonte. Confirmação separada de hipótese.",
  },
  {
    rotulo: "Opinião",
    texto: "A Réplica toma posição, explica o argumento e aponta os fatos que o sustentam.",
  },
  {
    rotulo: "Conversa",
    texto: "Identificamos quem fala e preservamos o contexto. Aspas apenas em falas verificadas.",
  },
];

const COMPROMISSOS = [
  "Opinião e publicidade são sempre identificadas.",
  "Toda informação traz fonte e data.",
  "Correções ficam visíveis na própria página.",
  "A Réplica fala como marca: as publicações não levam assinatura pessoal.",
];

export default async function PaginaSobre() {
  const config = await getConfiguracoes();

  return (
    <>
      <header className="bg-preto text-branco">
        <div className="container-site py-16 md:py-24">
          <Logo versao="negativo" className="h-auto w-full max-w-[36rem]" />
          <h1 className="mt-12 font-serif text-[2.5rem] font-bold leading-[1.1] md:text-5xl">Nova Serrana, informada.</h1>
          <p className="mt-5 max-w-2xl text-xl leading-[1.5] text-nevoa">
            Nascida em Nova Serrana, a Réplica organiza informações relevantes e amplia o debate sobre a cidade. Falamos
            com independência, clareza e voz editorial própria.
          </p>
        </div>
      </header>

      <section aria-labelledby="titulo-essencia" className="container-site py-14 md:py-20">
        <CabecalhoSecao id="titulo-essencia" rotulo="Essência" titulo="Informar. Questionar. Conversar." />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {PILARES.map((pilar, i) => (
            <li key={pilar.titulo} className="bg-cinza p-8">
              <span className="text-sm font-bold text-azul">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-2xl font-bold leading-[1.2]">{pilar.titulo}</h3>
              <p className="mt-3 text-base leading-[1.5]">{pilar.texto}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[0.9375rem] text-grafite">
          Postura: direta e crítica, com sobriedade. Sem estética de fofoca, espetáculo ou campanha partidária.
        </p>
      </section>

      <section id="principios" aria-labelledby="titulo-principios" className="scroll-mt-24 border-t border-linha">
        <div className="container-site py-14 md:py-20">
          <CabecalhoSecao id="titulo-principios" rotulo="Voz editorial" titulo="A Réplica tem voz própria" />
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {VOZ.map((item) => (
              <div key={item.rotulo}>
                <Rotulo tom="azul">{item.rotulo}</Rotulo>
                <p className="mt-4 text-lg leading-[1.5]">{item.texto}</p>
              </div>
            ))}
          </div>

          <figure className="mt-14 grid gap-8 bg-preto p-8 text-branco md:grid-cols-12 md:p-12">
            <div className="md:col-span-9">
              <Rotulo tom="escuro">Exemplo de tom</Rotulo>
              <blockquote className="mt-6 font-serif text-[1.75rem] font-bold leading-[1.2] md:text-[2.5rem]">
                <p>“O prazo informado terminou. Qual é a nova previsão de entrega?”</p>
              </blockquote>
            </div>
            <Aspa className="hidden h-32 w-auto justify-self-end text-azul md:col-span-3 md:block" />
          </figure>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {COMPROMISSOS.map((compromisso) => (
              <li key={compromisso} className="flex gap-4 border-t-2 border-preto pt-4 text-lg font-bold leading-[1.35]">
                {compromisso}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cinza">
        <div className="container-site grid gap-12 py-14 md:grid-cols-2 md:py-20">
          <div id="correcoes" className="scroll-mt-24">
            <Rotulo>Correções</Rotulo>
            <h2 className="mt-5 font-serif text-[2rem] font-bold leading-[1.15]">Quando erramos, corrigimos à vista.</h2>
            <p className="mt-4 text-lg leading-[1.5]">
              A correção é publicada na própria página, com data e descrição do que mudou. O texto anterior não é
              substituído em silêncio.
            </p>
          </div>
          <div id="direito-de-resposta" className="scroll-mt-24">
            <Rotulo>Direito de resposta</Rotulo>
            <h2 className="mt-5 font-serif text-[2rem] font-bold leading-[1.15]">Foi citado? Sua fala tem espaço.</h2>
            <p className="mt-4 text-lg leading-[1.5]">
              Se você ou sua instituição foi mencionado em uma publicação e quer se manifestar, entre em contato. A
              resposta é avaliada com o mesmo cuidado da apuração e, quando pertinente, publicada junto ao texto
              original.
            </p>
            {config.email ? (
              <a
                href={`mailto:${config.email}`}
                className="mt-6 inline-flex h-12 items-center bg-preto px-6 font-bold text-branco hover:bg-azul"
              >
                {config.email}
              </a>
            ) : (
              <p className="mt-6 text-[0.9375rem] font-bold text-grafite">
                O e-mail de contato é cadastrado em Configurações, no Sanity.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
