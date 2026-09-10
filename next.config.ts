import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
      // Usado apenas pelo conteúdo de demonstração (quando o Sanity não está configurado).
      { protocol: "https", hostname: "picsum.photos", pathname: "/seed/**" },
    ],
  },
};

export default nextConfig;
