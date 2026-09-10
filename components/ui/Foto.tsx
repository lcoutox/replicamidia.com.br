import Image from "next/image";
import { Aspa } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";
import type { Imagem } from "@/lib/types";

type Props = {
  imagem?: Imagem | null;
  /** Valor CSS de aspect-ratio, ex.: "3 / 2". */
  proporcao?: string;
  sizes: string;
  preload?: boolean;
  tom?: "claro" | "escuro";
  className?: string;
};

export function Foto({ imagem, proporcao = "3 / 2", sizes, preload, tom = "claro", className }: Props) {
  return (
    <div
      className={cn("relative overflow-hidden", tom === "escuro" ? "bg-carvao" : "bg-cinza", className)}
      style={{ aspectRatio: proporcao }}
    >
      {imagem?.url ? (
        <Image
          src={imagem.url}
          alt={imagem.alt ?? ""}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <Aspa className={cn("h-1/4 max-h-20 w-auto", tom === "escuro" ? "text-grafite" : "text-linha")} />
        </div>
      )}
    </div>
  );
}
