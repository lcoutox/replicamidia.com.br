import type { MetadataRoute } from "next";
import { MODO_PREVIA, urlAbsoluta } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (MODO_PREVIA) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/studio", "/api"] },
    sitemap: urlAbsoluta("/sitemap.xml"),
  };
}
