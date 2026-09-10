"use client";

import { useState } from "react";
import { IconeLink, IconeMensagem } from "@/components/ui/Icones";

const botao =
  "inline-flex h-10 items-center gap-2 border border-linha bg-branco px-3 text-[0.8125rem] font-bold text-preto hover:border-preto";

export function Compartilhar({ url, titulo }: { url: string; titulo: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      window.prompt("Copie o link:", url);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={botao}
      >
        <IconeMensagem className="size-4" />
        WhatsApp
      </a>
      <button type="button" onClick={copiar} className={botao}>
        <IconeLink className="size-4" />
        <span aria-live="polite">{copiado ? "Link copiado" : "Copiar link"}</span>
      </button>
    </div>
  );
}
