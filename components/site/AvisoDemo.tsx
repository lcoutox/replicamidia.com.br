import { MODO_PREVIA } from "@/lib/site";
import { isSanityConfigured } from "@/sanity/env";

export function AvisoDemo() {
  const mensagem = !isSanityConfigured
    ? "Modo demonstração — o conteúdo é ilustrativo. Configure o Sanity para publicar de verdade."
    : MODO_PREVIA
      ? "Prévia — conteúdo não publicado. Isso ainda não representa publicações da Réplica."
      : null;

  if (!mensagem) return null;

  return (
    <div className="bg-azul text-branco">
      <p className="container-site py-2 text-[0.8125rem] font-bold leading-[1.3]">{mensagem}</p>
    </div>
  );
}
