import type React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { getConfiguracoes } from "@/lib/content";
import { SECOES } from "@/lib/secoes";
import { IconeInstagram, IconeWhatsApp, IconeYouTube } from "@/components/ui/Icones";
import { MenuMobile } from "./MenuMobile";
import { NavPrincipal } from "./NavPrincipal";

const itens = [...SECOES.map(({ slug, titulo }) => ({ href: `/${slug}`, titulo })), { href: "/sobre", titulo: "Sobre" }];

export async function Header() {
  const config = await getConfiguracoes();

  const redes = [
    config.instagram ? { href: config.instagram, rotulo: "Instagram", Icone: IconeInstagram } : null,
    config.youtube   ? { href: config.youtube,   rotulo: "YouTube",   Icone: IconeYouTube   } : null,
    config.whatsapp  ? { href: config.whatsapp,  rotulo: "WhatsApp",  Icone: IconeWhatsApp  } : null,
  ].filter(Boolean) as { href: string; rotulo: string; Icone: React.FC<{ className?: string }> }[];

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-branco">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="shrink-0">
          {/* Largura mínima da assinatura: 180 px. */}
          <Logo className="h-auto w-[180px] md:w-[208px]" titulo="Réplica, página inicial" />
        </Link>
        <NavPrincipal itens={itens} />
        {redes.length > 0 && (
          <div className="hidden items-center gap-4 lg:flex">
            {redes.map((rede) => (
              <a
                key={rede.href}
                href={rede.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rede.rotulo}
                className="text-grafite transition-colors hover:text-azul"
              >
                <rede.Icone className="size-[18px]" />
              </a>
            ))}
          </div>
        )}
        <MenuMobile itens={itens} />
      </div>
    </header>
  );
}
