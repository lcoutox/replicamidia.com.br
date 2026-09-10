import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Rotulo } from "@/components/ui/Rotulo";
import { getConfiguracoes } from "@/lib/content";
import { SECOES } from "@/lib/secoes";
import { SITE } from "@/lib/site";

type LinkRodape = { href: string; rotulo: string };

function Coluna({ titulo, links }: { titulo: string; links: LinkRodape[] }) {
  return (
    <div>
      <h2>
        <Rotulo tom="escuro">{titulo}</Rotulo>
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const classes = "text-[0.9375rem] text-nevoa hover:text-branco hover:underline decoration-azul decoration-2 underline-offset-4";
          return (
            <li key={link.href}>
              {link.href.startsWith("http") ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
                  {link.rotulo}
                </a>
              ) : (
                <Link href={link.href} className={classes}>
                  {link.rotulo}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function Footer() {
  const config = await getConfiguracoes();

  const acompanhe: LinkRodape[] = [
    ...(config.whatsapp ? [{ href: config.whatsapp, rotulo: "Canal no WhatsApp" }] : []),
    ...(config.instagram ? [{ href: config.instagram, rotulo: "Instagram" }] : []),
    ...(config.youtube ? [{ href: config.youtube, rotulo: "YouTube" }] : []),
    { href: "/feed.xml", rotulo: "RSS" },
  ];

  return (
    <footer className="bg-preto text-branco">
      <div className="container-site grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" className="inline-block">
            <Logo versao="negativo" className="h-auto w-[200px] md:w-[240px]" titulo="Réplica, página inicial" />
          </Link>
          <p className="mt-8 font-serif text-2xl font-bold leading-[1.2]">{SITE.lema}</p>
          <p className="mt-3 max-w-sm text-[0.9375rem] leading-[1.5] text-nevoa">{SITE.descricao}</p>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
          <Coluna titulo="Seções" links={SECOES.map((s) => ({ href: `/${s.slug}`, rotulo: s.titulo }))} />
          <Coluna
            titulo="A Réplica"
            links={[
              { href: "/sobre", rotulo: "Quem somos" },
              { href: "/sobre#principios", rotulo: "Princípios editoriais" },
              { href: "/sobre#correcoes", rotulo: "Correções" },
              { href: "/sobre#direito-de-resposta", rotulo: "Direito de resposta" },
            ]}
          />
          <Coluna titulo="Acompanhe" links={acompanhe} />
        </nav>
      </div>

      <div className="border-t border-carvao">
        <div className="container-site flex flex-col gap-2 py-6 text-[0.8125rem] text-nevoa sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Réplica · {SITE.cidade}
          </p>
          <p>Opinião e publicidade são sempre identificadas.</p>
        </div>
      </div>
    </footer>
  );
}
