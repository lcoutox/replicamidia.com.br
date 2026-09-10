import { CogIcon, DocumentsIcon, HomeIcon, TagIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";
import { apiVersion } from "./env";
import { FORMATOS } from "./schemaTypes/materia";

export const SINGLETONS = new Set(["paginaInicial", "configuracoes"]);

const maisRecentes = [{ field: "publicadoEm", direction: "desc" as const }];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Réplica")
    .items([
      S.listItem()
        .title("Página inicial")
        .id("paginaInicial")
        .icon(HomeIcon)
        .child(S.document().schemaType("paginaInicial").documentId("paginaInicial").title("Página inicial")),
      S.divider(),
      S.listItem()
        .title("Todas as matérias")
        .id("todas-as-materias")
        .icon(DocumentsIcon)
        .child(S.documentTypeList("materia").title("Todas as matérias").defaultOrdering(maisRecentes)),
      ...FORMATOS.map((formato) =>
        S.listItem()
          .title(formato.title)
          .id(`formato-${formato.value}`)
          .child(
            S.documentList()
              .title(formato.title)
              .apiVersion(apiVersion)
              .schemaType("materia")
              .filter('_type == "materia" && formato == $formato')
              .params({ formato: formato.value })
              .defaultOrdering(maisRecentes),
          ),
      ),
      S.divider(),
      S.documentTypeListItem("editoria").title("Editorias").icon(TagIcon),
      S.listItem()
        .title("Configurações")
        .id("configuracoes")
        .icon(CogIcon)
        .child(S.document().schemaType("configuracoes").documentId("configuracoes").title("Configurações")),
    ]);
