import { defineQuery } from 'next-sanity'

// ─── Eventos ─────────────────────────────────────────────────────────────────

export const eventosQuery = defineQuery(`
  *[_type == "evento"] | order(fecha asc) {
    _id,
    titulo,
    descripcion,
    fecha,
    hora,
    horaFin,
    lugar,
    categoria,
    destacado,
    imagen
  }
`)

export const eventoDestacadoQuery = defineQuery(`
  *[_type == "evento" && destacado == true] | order(fecha asc) [0] {
    _id,
    titulo,
    descripcion,
    fecha,
    hora,
    horaFin,
    lugar,
    categoria,
    imagen
  }
`)

// ─── Noticias ─────────────────────────────────────────────────────────────────

export const noticiasQuery = defineQuery(`
  *[_type == "noticia"] | order(fechaPublicacion desc) {
    _id,
    titulo,
    slug,
    resumen,
    imagen,
    categoria,
    autor,
    fechaPublicacion,
    destacada
  }
`)

export const noticiaDestacadaQuery = defineQuery(`
  *[_type == "noticia" && destacada == true] | order(fechaPublicacion desc) [0] {
    _id,
    titulo,
    slug,
    resumen,
    imagen,
    categoria,
    autor,
    fechaPublicacion
  }
`)

export const noticiaBySlugQuery = defineQuery(`
  *[_type == "noticia" && slug.current == $slug] [0] {
    _id,
    titulo,
    slug,
    resumen,
    contenido,
    imagen,
    categoria,
    autor,
    fechaPublicacion
  }
`)

export const slugsNoticiasQuery = defineQuery(`
  *[_type == "noticia"] { "slug": slug.current }
`)

// ─── Avisos ───────────────────────────────────────────────────────────────────

export const avisosQuery = defineQuery(`
  *[_type == "aviso"] | order(tipo asc, fecha desc) {
    _id,
    titulo,
    contenido,
    tipo,
    fecha,
    vigenciaHasta,
    autor
  }
`)

// ─── Escuela Dominical ────────────────────────────────────────────────────────

export const leccionesQuery = defineQuery(`
  *[_type == "leccion"] | order(fecha asc) {
    _id,
    titulo,
    serie,
    fecha,
    pasaje,
    versiculo,
    versiculoRef,
    maestro,
    resumen,
    objetivos,
    esSiguiente
  }
`)

export const leccionSiguienteQuery = defineQuery(`
  *[_type == "leccion" && esSiguiente == true] [0] {
    _id,
    titulo,
    serie,
    fecha,
    pasaje,
    versiculo,
    versiculoRef,
    maestro,
    resumen,
    objetivos,
    esSiguiente
  }
`)

// ─── Videos / Estudios ────────────────────────────────────────────────────────

export const videosQuery = defineQuery(`
  *[_type == "videoEstudio"] | order(fecha desc) {
    _id,
    titulo,
    descripcion,
    youtubeId,
    categoria,
    predicador,
    fecha,
    duracion,
    pasaje,
    destacado
  }
`)

export const videoDestacadoQuery = defineQuery(`
  *[_type == "videoEstudio" && destacado == true] | order(fecha desc) [0] {
    _id,
    titulo,
    descripcion,
    youtubeId,
    categoria,
    predicador,
    fecha,
    duracion,
    pasaje,
    destacado
  }
`)
