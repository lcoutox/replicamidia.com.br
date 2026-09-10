import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SECOES } from "@/lib/secoes";
import { MenuMobile } from "./MenuMobile";
import { NavPrincipal } from "./NavPrincipal";

const itens = [...SECOES.map(({ slug, titulo }) => ({ href: `/${slug}`, titulo })), { href: "/sobre", titulo: "Sobre" }];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-branco">
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" className="shrink-0">
          {/* Largura mínima da assinatura: 180 px. */}
          <Logo className="h-auto w-[180px] md:w-[208px]" titulo="Réplica, página inicial" />
        </Link>
        <NavPrincipal itens={itens} />
        <MenuMobile itens={itens} />
      </div>
    </header>
  );
}
