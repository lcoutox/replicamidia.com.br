import { defineCliConfig } from "sanity/cli";

// A CLI do Sanity não lê o .env.local do Next; carregamos aqui para usar o mesmo projeto.
try {
  process.loadEnvFile(".env.local");
} catch {
  // Sem .env.local: usa as variáveis já definidas no ambiente.
}

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  },
});
