import Link from "next/link";
import { Aspa } from "@/components/brand/Logo";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Rotulo } from "@/components/ui/Rotulo";

export default function NaoEncontrado() {
  return (
    <>
      <Header />
      <main className="container-site grid items-center gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-8">
          <Rotulo>Erro 404</Rotulo>
          <h1 className="mt-5 font-serif text-[2.5rem] font-bold leading-[1.1] text-balance md:text-5xl">
            Esta página não existe ou mudou de endereço.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.5] text-grafite">
            Se você chegou aqui por um link da Réplica, avise para corrigirmos.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center bg-preto px-6 font-bold text-branco hover:bg-azul"
          >
            Voltar para a página inicial
          </Link>
        </div>
        <Aspa className="hidden h-64 w-auto justify-self-end text-azul md:col-span-4 md:block" />
      </main>
      <Footer />
    </>
  );
}
