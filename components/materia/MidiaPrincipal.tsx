import { Foto } from "@/components/ui/Foto";
import { IconePlay } from "@/components/ui/Icones";
import { cn } from "@/lib/cn";
import type { Materia } from "@/lib/types";

function embedYouTube(url: string) {
  try {
    const u = new URL(url);
    let id: string | null = null;
    if (u.hostname === "youtu.be") id = u.pathname.slice(1);
    else if (u.hostname.endsWith("youtube.com")) {
      id = u.searchParams.get("v") ?? u.pathname.match(/^\/(shorts|embed|live)\/([^/?]+)/)?.[2] ?? null;
    }
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

function nomePlataforma(url: string) {
  if (url.includes("instagram.com")) return "no Instagram";
  if (url.includes("tiktok.com")) return "no TikTok";
  return "o vídeo";
}

function Video({ materia }: { materia: Materia }) {
  const video = materia.video;
  const vertical = video?.orientacao !== "horizontal";
  const proporcao = vertical ? "9 / 16" : "16 / 9";
  const moldura = cn("relative mx-auto overflow-hidden bg-preto", vertical ? "max-w-[22rem]" : "max-w-5xl");
  const embed = video?.url ? embedYouTube(video.url) : null;

  if (embed) {
    return (
      <div className={moldura} style={{ aspectRatio: proporcao }}>
        <iframe
          src={embed}
          title={materia.titulo}
          className="absolute inset-0 size-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  // Instagram, TikTok e demais plataformas: capa com link para assistir na origem.
  return (
    <div className={moldura}>
      <Foto
        imagem={materia.imagem}
        proporcao={proporcao}
        sizes={vertical ? "352px" : "(min-width: 1024px) 1024px, 100vw"}
        tom="escuro"
        preload
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        {video?.url ? (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-preto py-2 pl-2 pr-5 text-[0.9375rem] font-bold text-branco hover:bg-carvao"
          >
            <span className="grid size-10 place-items-center rounded-full bg-azul">
              <IconePlay className="ml-0.5 size-4" />
            </span>
            Assistir {nomePlataforma(video.url)}
          </a>
        ) : (
          <span className="bg-preto px-4 py-2 text-[0.8125rem] font-bold text-branco">Vídeo de demonstração</span>
        )}
      </div>
    </div>
  );
}

export function MidiaPrincipal({ materia }: { materia: Materia }) {
  if (materia.formato === "video") {
    return (
      <div className="container-site mt-8 md:mt-10">
        <Video materia={materia} />
      </div>
    );
  }

  const imagem = materia.imagem;
  if (!imagem?.url) return null;

  const estreita = materia.formato === "nota" || materia.formato === "opiniao";

  return (
    <figure className={cn("mx-auto mt-8 md:mt-10 md:px-8", estreita ? "max-w-3xl" : "max-w-6xl")}>
      <Foto imagem={imagem} sizes="(min-width: 1152px) 1088px, 100vw" preload />
      {(imagem.legenda || imagem.credito) && (
        <figcaption className="mt-3 px-5 text-[0.8125rem] leading-[1.4] text-grafite md:px-0">
          {imagem.legenda}
          {imagem.legenda && imagem.credito && " "}
          {imagem.credito && <span className="uppercase tracking-[0.04em]">Foto: {imagem.credito}</span>}
        </figcaption>
      )}
    </figure>
  );
}
