export type CategoriaVideo =
  | "capsula"
  | "predicacion"
  | "estudio"
  | "devocional";

export interface VideoEstudio {
  id: number;
  youtubeId: string;       // ID del video de YouTube (parte final de la URL)
  titulo: string;
  descripcion: string;
  predicador: string;      // Nombre del hermano/a que expone
  categoria: CategoriaVideo;
  fecha: string;           // "2026-04-20"
  duracion: string;        // "12:30"
  pasaje?: string;         // Referencia bíblica principal
  destacado?: boolean;
}

export const videos: VideoEstudio[] = [
  {
    id: 1,
    youtubeId: "dQw4w9WgXcQ", // Reemplazar con ID real
    titulo: "El Sermón del Monte — Introducción",
    descripcion:
      "Primera cápsula de nuestra serie sobre el Sermón del Monte. ¿Por qué estas palabras de Jesús siguen siendo las más revolucionarias que se han dicho?",
    predicador: "Pastor Principal",
    categoria: "capsula",
    fecha: "2026-04-06",
    duracion: "14:22",
    pasaje: "Mateo 5:1-3",
    destacado: true,
  },
  {
    id: 2,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Las Bienaventuranzas: Felicidad al revés",
    descripcion:
      "¿Qué significa ser 'pobre en espíritu'? Jesús invierte todos los valores del mundo en ocho promesas que cambian vidas.",
    predicador: "Diácono Carlos Herrera",
    categoria: "estudio",
    fecha: "2026-04-13",
    duracion: "28:45",
    pasaje: "Mateo 5:3-12",
  },
  {
    id: 3,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Cápsula: La sal y su función en el siglo I",
    descripcion:
      "En tres minutos, entendemos por qué Jesús usó la sal como metáfora del creyente en el mundo y qué implica 'perder el sabor'.",
    predicador: "Hermano Miguel Torres",
    categoria: "capsula",
    fecha: "2026-04-15",
    duracion: "3:18",
    pasaje: "Mateo 5:13",
  },
  {
    id: 4,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Devocional: Orar como hijos, no como esclavos",
    descripcion:
      "Una reflexión breve sobre la diferencia entre rezar por obligación y orar como conversación con un Padre que nos conoce.",
    predicador: "Hermana Ana Riquelme",
    categoria: "devocional",
    fecha: "2026-04-18",
    duracion: "7:04",
    pasaje: "Mateo 6:9",
  },
  {
    id: 5,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Predicación: La justicia que supera a los fariseos",
    descripcion:
      "¿Por qué Jesús dice que nuestra justicia debe superar a la de los escribas y fariseos? Un estudio profundo sobre la diferencia entre el acto externo y la intención del corazón.",
    predicador: "Pastor Principal",
    categoria: "predicacion",
    fecha: "2026-04-20",
    duracion: "41:10",
    pasaje: "Mateo 5:17-48",
  },
  {
    id: 6,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Cápsula: ¿Qué es el 'Reino de los Cielos'?",
    descripcion:
      "Una cápsula de 5 minutos para entender un concepto que aparece 32 veces en Mateo y que es central en el Sermón del Monte.",
    predicador: "Hermano Diego Salazar",
    categoria: "capsula",
    fecha: "2026-04-22",
    duracion: "5:47",
    pasaje: "Mateo 5:3",
  },
  {
    id: 7,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Estudio: El Padre Nuestro versículo por versículo",
    descripcion:
      "Analizamos cada línea de la oración modelo que Jesús nos dio. ¿Qué significa 'santificado sea tu nombre'? ¿Y 'venga tu Reino'?",
    predicador: "Diácona Patricia Muñoz",
    categoria: "estudio",
    fecha: "2026-04-27",
    duracion: "33:22",
    pasaje: "Mateo 6:9-13",
  },
  {
    id: 8,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Devocional: Buscad primero el Reino",
    descripcion:
      "¿Qué pasa cuando ponemos el Reino de Dios primero en nuestra agenda semanal? Una reflexión práctica para el lunes por la mañana.",
    predicador: "Hermana Claudia Vera",
    categoria: "devocional",
    fecha: "2026-05-04",
    duracion: "6:30",
    pasaje: "Mateo 6:33",
  },
];

export const categoriaConfig: Record<
  CategoriaVideo,
  { label: string; badgeClass: string }
> = {
  capsula: {
    label: "Cápsula Bíblica",
    badgeClass: "bg-violet-100 text-violet-700 border-violet-200",
  },
  predicacion: {
    label: "Predicación",
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
  },
  estudio: {
    label: "Estudio Bíblico",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
  },
  devocional: {
    label: "Devocional",
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
};

// Acepta tanto "dQw4w9WgXcQ" como "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
export function extractYoutubeId(input: string): string {
  if (!input) return "";
  try {
    const url = new URL(input);
    return url.searchParams.get("v") ?? input;
  } catch {
    return input.trim();
  }
}

export function formatearFechaVideo(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getVideoDestacado(): VideoEstudio | undefined {
  return videos.find((v) => v.destacado);
}
