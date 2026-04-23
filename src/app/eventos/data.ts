export type CategoriaEvento =
  | "Todos"
  | "Culto"
  | "Formación"
  | "Oración"
  | "Retiro"
  | "Comunidad"
  | "Jóvenes";

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;          // "2026-04-27"
  hora: string;           // "11:00 AM"
  horaFin?: string;       // "01:00 PM"
  lugar: string;
  direccion?: string;
  categoria: Exclude<CategoriaEvento, "Todos">;
  destacado?: boolean;
  imagen?: string;
}

export const categorias: CategoriaEvento[] = [
  "Todos",
  "Culto",
  "Formación",
  "Oración",
  "Retiro",
  "Comunidad",
  "Jóvenes",
];

// ─── Datos de ejemplo — reemplazá con Sanity cuando esté configurado ─────────
export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Culto Dominical",
    descripcion:
      "Nuestro culto principal de la semana. Un tiempo de alabanza, adoración y predicación de la Palabra. Toda la familia es bienvenida.",
    fecha: "2026-04-26",
    hora: "11:00 AM",
    horaFin: "01:00 PM",
    lugar: "Templo Principal",
    direccion: "Lo Hermida, Peñalolén",
    categoria: "Culto",
    destacado: true,
    imagen:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80",
  },
  {
    id: 2,
    titulo: "Escuela Dominical",
    descripcion:
      "Clases de formación bíblica para todas las edades: niños, jóvenes y adultos. Cada edad en su sala correspondiente.",
    fecha: "2026-04-26",
    hora: "09:30 AM",
    horaFin: "11:00 AM",
    lugar: "Salas de Clases",
    categoria: "Formación",
    imagen:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80",
  },
  {
    id: 3,
    titulo: "Reunión de Oración",
    descripcion:
      "Nos reunimos a interceder por la congregación, las familias, el barrio y Chile. Un tiempo íntimo y poderoso con Dios.",
    fecha: "2026-04-29",
    hora: "07:00 PM",
    horaFin: "08:30 PM",
    lugar: "Templo Principal",
    categoria: "Oración",
    imagen:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
  },
  {
    id: 4,
    titulo: "Retiro de Jóvenes IUMP",
    descripcion:
      "Fin de semana de retiro espiritual para jóvenes de la congregación. Incluye talleres, alabanza, deportes y tiempo de reflexión.",
    fecha: "2026-05-03",
    hora: "08:00 AM",
    horaFin: "05:00 PM",
    lugar: "Centro de Retiros IUMP",
    categoria: "Retiro",
    destacado: true,
    imagen:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80",
  },
  {
    id: 5,
    titulo: "Tarde Familiar",
    descripcion:
      "Una tarde de convivencia para toda la familia de la iglesia. Habrá comida, juegos y un tiempo de comunión entre hermanos.",
    fecha: "2026-05-10",
    hora: "04:00 PM",
    horaFin: "08:00 PM",
    lugar: "Patio de la Iglesia",
    categoria: "Comunidad",
    imagen:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  },
  {
    id: 6,
    titulo: "Estudio Bíblico Jóvenes",
    descripcion:
      "Espacio semanal de estudio de la Palabra para jóvenes entre 15 y 30 años. Dinámica, preguntas y aplicación práctica.",
    fecha: "2026-05-08",
    hora: "07:00 PM",
    horaFin: "09:00 PM",
    lugar: "Sala Jóvenes",
    categoria: "Jóvenes",
  },
  {
    id: 7,
    titulo: "Campaña de Evangelismo",
    descripcion:
      "Salimos a las calles de Lo Hermida a compartir el evangelio con nuestros vecinos. Todos pueden participar.",
    fecha: "2026-05-16",
    hora: "10:00 AM",
    horaFin: "01:00 PM",
    lugar: "Plaza Lo Hermida",
    categoria: "Comunidad",
    imagen:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80",
  },
  {
    id: 8,
    titulo: "Culto de Pentecostés",
    descripcion:
      "Culto especial en conmemoración del Día de Pentecostés. Un tiempo poderoso de adoración y clamor por un nuevo derramamiento del Espíritu.",
    fecha: "2026-06-07",
    hora: "11:00 AM",
    lugar: "Templo Principal",
    categoria: "Culto",
    destacado: true,
    imagen:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
  },
];

export const categoriaBadgeStyle: Record<
  Exclude<CategoriaEvento, "Todos">,
  string
> = {
  Culto:      "bg-blue-100 text-blue-700 border-blue-200",
  Formación:  "bg-amber-100 text-amber-700 border-amber-200",
  Oración:    "bg-purple-100 text-purple-700 border-purple-200",
  Retiro:     "bg-emerald-100 text-emerald-700 border-emerald-200",
  Comunidad:  "bg-rose-100 text-rose-700 border-rose-200",
  Jóvenes:    "bg-indigo-100 text-indigo-700 border-indigo-200",
};

export function formatearFecha(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
