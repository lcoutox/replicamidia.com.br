import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { MODO_PREVIA, SITE } from "@/lib/site";
import "./globals.css";

// Tipografia do brandbook: Noto Sans (informação) e Noto Serif Bold (manchetes).
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nome} · ${SITE.lema}`,
    template: `%s | ${SITE.nome}`,
  },
  description: SITE.descricao,
  openGraph: { siteName: SITE.nome, locale: "pt_BR", type: "website" },
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  robots: MODO_PREVIA ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
