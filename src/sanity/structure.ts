import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('IMP Lo Hermida')
    .items([
      S.listItem()
        .title('Eventos')
        .schemaType('evento')
        .child(S.documentTypeList('evento').title('Eventos')),

      S.listItem()
        .title('Noticias')
        .schemaType('noticia')
        .child(S.documentTypeList('noticia').title('Noticias')),

      S.listItem()
        .title('Avisos')
        .schemaType('aviso')
        .child(S.documentTypeList('aviso').title('Avisos')),

      S.divider(),

      S.listItem()
        .title('Escuela Dominical')
        .schemaType('leccion')
        .child(S.documentTypeList('leccion').title('Lecciones Dominicales')),

      S.listItem()
        .title('Estudios Bíblicos (Videos)')
        .schemaType('videoEstudio')
        .child(S.documentTypeList('videoEstudio').title('Videos')),
    ])
