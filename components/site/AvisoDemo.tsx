import { MODO_PREVIA } from "@/lib/site";
import { isSanityConfigured } from "@/sanity/env";

export function AvisoDemo() {
  const mensagem = !isSanityConfigured
    ? "Modo demonstração: textos, pessoas e imagens são ilustrativos. Configure o Sanity para publicar conteúdo real."
    : MODO_PREVIA
      ? "Site em prévia: textos, pessoas e imagens são ilustrativos e ainda não representam publicações da Réplica."
      : null;

  if (!mensagem) return null;

  return (
    <div className="bg-azul text-branco">
      <p className="container-site py-2 text-[0.8125rem] font-bold leading-[1.3]">{mensagem}</p>
    </div>
  );
}
