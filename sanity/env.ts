export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-09-01";

/** Sem projectId o site roda com o conteúdo de demonstração de lib/mock.ts. */
export const isSanityConfigured = projectId.length > 0;
