# Réplica · site

Site editorial da Réplica (Nova Serrana, MG), construído a partir do **Brandbook Réplica 1.0**.

| Camada | Escolha |
| --- | --- |
| Site | Next.js 16 (App Router) + TypeScript |
| Identidade visual | Tailwind CSS 4 + componentes próprios |
| Gestão de conteúdo | Sanity (Studio embutido em `/studio`) |
| Integrações | API do Sanity, webhook de revalidação e RSS |

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. **Sem configurar o Sanity, o site roda com conteúdo de demonstração** (`lib/mock.ts`), sinalizado por uma faixa azul no topo. Textos, pessoas e imagens desse modo são ilustrativos.

## Conectar o Sanity

1. Crie um projeto em [sanity.io/manage](https://www.sanity.io/manage) (ou `npx sanity@latest init --env`).
2. Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Em **API → CORS origins**, adicione `http://localhost:3000` (e depois o domínio final) com credenciais.
4. Reinicie o `npm run dev` e acesse `/studio`.

Para começar com o conteúdo de demonstração dentro do Sanity:

```bash
npm run seed:gerar
npm run seed:importar
```

### Publicação do dia a dia

- **Matérias** têm formato: nota, reportagem, análise, opinião, entrevista ou vídeo. O formato define a seção, o layout da página e a tipografia do título.
- **Página inicial** (documento único): escolha a pauta principal e até 7 destaques. Vagas livres são preenchidas automaticamente pelo mais recente.
- Campos de apuração seguem a voz editorial: **resumo em até três pontos**, **fontes**, **o que falta saber** e **correções visíveis**.
- Datas de publicação no futuro funcionam como agendamento.
- Não há campo de autor: a marca fala, a identidade pessoal não assina.

### Revalidação instantânea

As páginas se atualizam sozinhas a cada 5 minutos. Para publicar na hora, crie um webhook em **sanity.io/manage → API → Webhooks**:

- URL: `https://SEU-DOMINIO/api/revalidate`
- Dataset: `production` · Gatilhos: create, update, delete
- Projeção: `{_type, "slug": slug.current}`
- Secret: o mesmo valor de `SANITY_REVALIDATE_SECRET`

## Integrações e automação

- **Leitura:** `https://SEU-DOMINIO/feed.xml` (RSS das últimas 30 publicações) ou a API de consultas GROQ do Sanity.
- **Escrita:** a [HTTP API de mutações](https://www.sanity.io/docs/http-mutations) do Sanity cria e edita matérias com um token de escrita (sanity.io/manage → API → Tokens). Um fluxo seguro é criar documentos como rascunho (`_id` começando com `drafts.`) e publicar pelo Studio após revisão.

## Estrutura

```
app/
  (site)/              páginas públicas (header, footer e aviso de demonstração)
    page.tsx           home: manchete, notas, seleção, vídeos, opinião, conversa, WhatsApp
    [secao]/           em-pauta, analise, opiniao, conversa, videos
    [secao]/[slug]/    página de matéria (layout varia por formato)
    sobre/             essência, voz editorial, correções e direito de resposta
  studio/              Sanity Studio
  api/revalidate/      webhook do Sanity
  feed.xml/ sitemap.ts robots.ts
components/
  brand/               Logo, Símbolo e Aspa (contornos do SVG mestre, gerados em paths.ts)
  cards.tsx            chamadas por formato e tamanho
  materia/             corpo (Portable Text), mídia principal, compartilhar
lib/                   camada de dados (Sanity ou demonstração), seções, datas, tipos
sanity/                schemas, estrutura do Studio e consultas GROQ
public/brand/          arquivos do kit de marca
```

## Regras de marca aplicadas

- Logo e aspas renderizados a partir dos vetores do kit, nunca redigitados; assinatura com no mínimo 180 px e símbolo com no mínimo 24 px.
- Paleta: azul `#325BFF`, preto `#121212`, branco e cinza de apoio `#F0F2F7`. Azul sobre preto só em grafismos; textos pequenos em preto ou branco.
- Noto Serif Bold em manchetes, opinião e entrevistas; Noto Sans para informação, notas, navegação e serviço.
- Rótulo em caixa alta com barra azul; aspa decorativa inteira e fora da área de leitura; sem sombras nem degradês.

## Hospedagem

A definir. O projeto roda em qualquer serviço compatível com Next.js (Vercel, Netlify, Cloudflare, servidor Node próprio). Configure as variáveis de `.env.example` no ambiente de produção.
