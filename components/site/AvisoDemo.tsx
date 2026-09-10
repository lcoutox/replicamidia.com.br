import { isSanityConfigured } from "@/sanity/env";

export function AvisoDemo() {
  if (isSanityConfigured) return null;

  return (
    <div className="bg-azul text-branco">
      <p className="container-site py-2 text-[0.8125rem] font-bold leading-[1.3]">
        Modo demonstração: textos, pessoas e imagens são ilustrativos. Configure o Sanity para publicar conteúdo real.
      </p>
    </div>
  );
}
