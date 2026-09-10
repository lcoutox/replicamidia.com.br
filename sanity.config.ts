"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { SINGLETONS, structure } from "./sanity/structure";

export default defineConfig({
  name: "replica",
  title: "Réplica",
  basePath: "/studio",
  projectId: projectId || "sem-projeto",
  dataset,
  schema: {
    types: schemaTypes,
    // Documentos únicos não aparecem em "Criar novo".
    templates: (templates) => templates.filter(({ schemaType }) => !SINGLETONS.has(schemaType)),
  },
  document: {
    actions: (acoes, contexto) =>
      SINGLETONS.has(contexto.schemaType)
        ? acoes.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : acoes,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
