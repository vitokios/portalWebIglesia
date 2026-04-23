import { type SchemaTypeDefinition } from 'sanity'
import { eventoType } from './evento'
import { noticiaType } from './noticia'
import { avisoType } from './aviso'
import { leccionType } from './leccion'
import { videoEstudioType } from './videoEstudio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventoType, noticiaType, avisoType, leccionType, videoEstudioType],
}
