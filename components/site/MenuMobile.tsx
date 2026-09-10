"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { IconeFechar, IconeMenu } from "@/components/ui/Icones";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { estaAtivo, type ItemNav } from "./NavPrincipal";

export function MenuMobile({ itens }: { itens: ItemNav[] }) {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();
  const fechar = () => setAberto(false);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        className="-mr-2 flex h-11 items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.08em]"
      >
        Menu
        <IconeMenu className="size-6" />
      </button>

      {aberto && (
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-preto text-branco"
        >
          <div className="container-site flex h-16 shrink-0 items-center justify-between">
            <Link href="/" onClick={fechar}>
              <Logo versao="negativo" className="h-auto w-[180px]" titulo="Réplica, página inicial" />
            </Link>
            <button
              type="button"
              onClick={fechar}
              autoFocus
              className="-mr-2 flex h-11 items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.08em]"
            >
              Fechar
              <IconeFechar className="size-6" />
            </button>
          </div>

          <nav aria-label="Seções" className="container-site flex-1 py-6">
            <ul className="border-t border-carvao">
              {itens.map((item) => {
                const ativo = estaAtivo(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-carvao">
                    <Link
                      href={item.href}
                      onClick={fechar}
                      aria-current={ativo ? "page" : undefined}
                      className={cn(
                        "block py-5 font-serif text-[2rem] font-bold leading-[1.1] decoration-azul decoration-4 underline-offset-8 hover:underline",
                        ativo && "underline",
                      )}
                    >
                      {item.titulo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <p className="container-site pb-10 text-sm font-bold">{SITE.lema}</p>
        </div>
      )}
    </div>
  );
}
