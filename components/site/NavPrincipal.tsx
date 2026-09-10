"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export type ItemNav = { href: string; titulo: string };

export function estaAtivo(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavPrincipal({ itens }: { itens: ItemNav[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Seções" className="hidden lg:block">
      <ul className="flex items-center gap-7">
        {itens.map((item) => {
          const ativo = estaAtivo(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={ativo ? "page" : undefined}
                className={cn(
                  "relative block py-2 text-[0.9375rem] font-bold text-preto",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:origin-left after:bg-azul after:transition-transform",
                  ativo ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {item.titulo}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
