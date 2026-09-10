import { cache } from "react";
import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";
import {
  CONFIGURACOES_QUERY,
  HOME_QUERY,
  MATERIA_QUERY,
  RELACIONADAS_QUERY,
  SECAO_QUERY,
  TODAS_QUERY,
} from "@/sanity/lib/queries";
import { CONFIGURACOES_DEMO, MATERIAS_DEMO } from "./mock";
import type { Secao } from "./secoes";
import type { Configuracoes, Home, Materia, MateriaResumo } from "./types";

export type MateriaIndice = Pick<
  Materia,
  "_id" | "titulo" | "slug" | "formato" | "linhaFina" | "publicadoEm" | "atualizadoEm"
>;

type Curadoria = {
  manchete?: MateriaResumo | null;
  destaques?: Array<MateriaResumo | null> | null;
};

const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: "published" })
  : null;

/**
 * As tags correspondem ao _type do Sanity; o webhook em /api/revalidate
 * invalida a tag do documento alterado.
 */
function buscar<T>(query: string, params: QueryParams, tags: string[]) {
  if (!client) throw new Error("Sanity não configurado.");
  return client.fetch<T>(query, params, { next: { revalidate: 300, tags } });
}

function demo() {
  return [...MATERIAS_DEMO].sort((a, b) => Date.parse(b.publicadoEm) - Date.parse(a.publicadoEm));
}

/** Distribui as matérias pelos blocos da home sem repetir nenhuma. */
export function montarHome(recentes: MateriaResumo[], curadoria: Curadoria = {}): Home {
  const usados = new Set<string>();
  const pegar = (filtro: (m: MateriaResumo) => boolean, limite: number) => {
    const lista = recentes.filter((m) => !usados.has(m._id) && filtro(m)).slice(0, limite);
    lista.forEach((m) => usados.add(m._id));
    return lista;
  };

  const manchete =
    curadoria.manchete ??
    recentes.find((m) => ["reportagem", "analise", "entrevista"].includes(m.formato) && m.imagem?.url) ??
    recentes[0] ??
    null;
  if (manchete) usados.add(manchete._id);

  const curados: MateriaResumo[] = [];
  for (const m of curadoria.destaques ?? []) {
    if (m && !usados.has(m._id)) {
      usados.add(m._id);
      curados.push(m);
    }
  }

  const videos = pegar((m) => m.formato === "video", 8);
  const notas = pegar((m) => m.formato === "nota", 4);
  const opiniao = pegar((m) => m.formato === "opiniao", 3);
  const conversa = pegar((m) => m.formato === "entrevista", 2);
  const destaques = [
    ...curados,
    ...pegar((m) => m.formato === "reportagem" || m.formato === "analise", Math.max(0, 7 - curados.length)),
  ];

  return { manchete, destaques, notas, videos, opiniao, conversa };
}

export const getHome = cache(async (): Promise<Home> => {
  if (!client) return montarHome(demo());

  const { curadoria, recentes } = await buscar<{ curadoria: Curadoria | null; recentes: MateriaResumo[] }>(
    HOME_QUERY,
    {},
    ["materia", "paginaInicial"],
  );
  return montarHome(recentes, curadoria ?? {});
});

export const getMateria = cache(async (slug: string): Promise<Materia | null> => {
  if (!client) return demo().find((m) => m.slug === slug) ?? null;
  return buscar<Materia | null>(MATERIA_QUERY, { slug }, ["materia"]);
});

export const getMateriasDaSecao = cache(async (secao: Secao): Promise<MateriaResumo[]> => {
  if (!client) return demo().filter((m) => secao.formatos.includes(m.formato));
  return buscar<MateriaResumo[]>(SECAO_QUERY, { formatos: [...secao.formatos] }, ["materia"]);
});

export async function getRelacionadas(materia: Materia): Promise<MateriaResumo[]> {
  if (!client) {
    const outras = demo().filter((m) => m._id !== materia._id && m.formato !== "nota");
    const proximas = outras.filter(
      (m) => m.editoria?.slug === materia.editoria?.slug || m.formato === materia.formato,
    );
    return [...proximas, ...outras.filter((m) => !proximas.includes(m))].slice(0, 3);
  }

  return buscar<MateriaResumo[]>(
    RELACIONADAS_QUERY,
    { id: materia._id, editoria: materia.editoria?.slug ?? null, formato: materia.formato },
    ["materia"],
  );
}

export const getTodasMaterias = cache(async (): Promise<MateriaIndice[]> => {
  if (!client) return demo();
  return buscar<MateriaIndice[]>(TODAS_QUERY, {}, ["materia"]);
});

export const getConfiguracoes = cache(async (): Promise<Configuracoes> => {
  if (!client) return CONFIGURACOES_DEMO;
  return (await buscar<Configuracoes | null>(CONFIGURACOES_QUERY, {}, ["configuracoes"])) ?? {};
});
