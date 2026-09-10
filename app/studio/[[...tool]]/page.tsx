import { NextStudio } from "next-sanity/studio";
import { Logo } from "@/components/brand/Logo";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function PaginaStudio() {
  if (isSanityConfigured) return <NextStudio config={config} />;

  return (
    <main className="min-h-screen bg-preto text-branco">
      <div className="container-site max-w-3xl py-16 md:py-24">
        <Logo versao="negativo" className="h-auto w-[208px]" />
        <h1 className="mt-12 font-serif text-4xl font-bold leading-[1.1]">Conecte o painel editorial</h1>
        <p className="mt-4 text-lg leading-[1.5] text-nevoa">
          O Sanity Studio aparece aqui assim que o projeto estiver configurado. Até lá, o site usa o conteúdo de
          demonstração.
        </p>
        <ol className="mt-10 list-decimal space-y-4 pl-6 text-lg leading-[1.5] marker:font-bold marker:text-azul">
          <li>
            Crie um projeto em <strong>sanity.io/manage</strong> (ou rode <code>npx sanity@latest init --env</code>).
          </li>
          <li>
            Copie <code>.env.example</code> para <code>.env.local</code> e preencha{" "}
            <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>.
          </li>
          <li>
            Em <strong>API → CORS origins</strong>, adicione <code>http://localhost:3000</code> com credenciais.
          </li>
          <li>Reinicie o servidor e volte para /studio.</li>
        </ol>
      </div>
    </main>
  );
}
