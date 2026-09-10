import { AvisoDemo } from "@/components/site/AvisoDemo";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-azul focus:px-4 focus:py-2 focus:font-bold focus:text-branco"
      >
        Pular para o conteúdo
      </a>
      <AvisoDemo />
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
