export type TipoAviso = "urgente" | "informativo" | "general";

export interface Aviso {
  id: number;
  tipo: TipoAviso;
  titulo: string;
  contenido: string;
  fecha: string;        // "2026-04-22"
  vigenciaHasta?: string; // "2026-04-30" — si no se define, no expira
  autor?: string;
}

export const avisos: Aviso[] = [
  // --- Urgentes ---
  {
    id: 1,
    tipo: "urgente",
    titulo: "Colecta especial para familia en necesidad",
    contenido:
      "Este domingo recibiremos una ofrenda especial para apoyar a una familia de nuestra congregación que atraviesa un momento difícil. Los fondos serán entregados directamente a la familia el lunes. Toda contribución es bienvenida.",
    fecha: "2026-04-20",
    vigenciaHasta: "2026-04-26",
    autor: "Pastor Principal",
  },
  {
    id: 2,
    tipo: "urgente",
    titulo: "Cancelación culto viernes santo — nuevo horario",
    contenido:
      "El culto del viernes 24 de abril (Viernes Santo) se adelanta al jueves 23 a las 19:00 hrs. El lugar es el mismo templo principal. Confirmar asistencia con los diáconos.",
    fecha: "2026-04-21",
    vigenciaHasta: "2026-04-24",
    autor: "Secretaría",
  },

  // --- Informativos ---
  {
    id: 3,
    tipo: "informativo",
    titulo: "Cambio de horario culto del miércoles",
    contenido:
      "A partir del miércoles 29 de abril, la reunión de oración pasa definitivamente a las 19:00 hrs en lugar de las 18:30 hrs. Este cambio es permanente y fue aprobado en la reunión de consistorio.",
    fecha: "2026-04-18",
    autor: "Consistorio",
  },
  {
    id: 4,
    tipo: "informativo",
    titulo: "Inscripciones abiertas — Campamento Juvenil de Invierno",
    contenido:
      "El campamento de jóvenes se realizará del 10 al 13 de julio en Pucón. Cupos limitados a 40 personas. Costo: $35.000 (incluye traslado, alimentación y alojamiento). Inscribirse con el líder de jóvenes antes del 30 de mayo.",
    fecha: "2026-04-15",
    vigenciaHasta: "2026-05-30",
    autor: "Ministerio de Jóvenes",
  },
  {
    id: 5,
    tipo: "informativo",
    titulo: "Nuevo ciclo de Escuela Dominical — Sermón del Monte",
    contenido:
      "Desde el domingo 6 de abril iniciamos el estudio del Sermón del Monte (Mateo 5-7). Las clases son a las 09:30 AM y son transversales para toda la congregación. Traé tu Biblia.",
    fecha: "2026-04-01",
    vigenciaHasta: "2026-05-17",
    autor: "Departamento de Educación",
  },
  {
    id: 6,
    tipo: "informativo",
    titulo: "Reunión de padres — Ministerio Infantil",
    contenido:
      "Citamos a todos los padres con hijos en el ministerio infantil el domingo 3 de mayo a las 10:30 AM, en la sala de reuniones. Se tratarán temas de programación del semestre y necesidades del ministerio.",
    fecha: "2026-04-22",
    vigenciaHasta: "2026-05-03",
    autor: "Ministerio Infantil",
  },

  // --- Generales ---
  {
    id: 7,
    tipo: "general",
    titulo: "Ensayo coro juvenil — sábado 3:00 PM",
    contenido:
      "Recordar a todos los integrantes del coro juvenil que el ensayo del sábado se realiza a las 15:00 hrs en la sala de música (segundo piso). Llevar la partitura del himno 147.",
    fecha: "2026-04-22",
    vigenciaHasta: "2026-04-26",
    autor: "Director de Música",
  },
  {
    id: 8,
    tipo: "general",
    titulo: "Voluntarios para limpieza del templo",
    contenido:
      "Se necesitan voluntarios para la limpieza general del templo el viernes 25 de abril a las 10:00 AM. Traer escoba, trapeador y desinfectante si es posible. ¡Toda ayuda es bienvenida!",
    fecha: "2026-04-22",
    vigenciaHasta: "2026-04-25",
    autor: "Comisión de Aseo",
  },
  {
    id: 9,
    tipo: "general",
    titulo: "Donación de ropa de abrigo",
    contenido:
      "Con la llegada del invierno, estamos recolectando ropa de abrigo (chaquetas, polares, frazadas) para distribuir en el sector. Dejar donaciones en la entrada del templo todos los domingos durante mayo.",
    fecha: "2026-04-20",
    vigenciaHasta: "2026-05-31",
    autor: "Comisión Diaconal",
  },
  {
    id: 10,
    tipo: "general",
    titulo: "Biblioteca congregacional — nuevos libros disponibles",
    contenido:
      "La biblioteca de la iglesia cuenta con 15 nuevos libros de teología, devocionales y educación cristiana. Disponibles para préstamo los domingos después del culto. Traé tu carnet de la iglesia.",
    fecha: "2026-04-10",
    autor: "Biblioteca",
  },
];

export const tipoConfig: Record<
  TipoAviso,
  { label: string; badgeClass: string; borderClass: string; bgClass: string }
> = {
  urgente: {
    label: "Urgente",
    badgeClass: "bg-red-100 text-red-700 border-red-200",
    borderClass: "border-l-red-500",
    bgClass: "bg-red-50/50",
  },
  informativo: {
    label: "Informativo",
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
    borderClass: "border-l-blue-500",
    bgClass: "bg-blue-50/50",
  },
  general: {
    label: "General",
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    borderClass: "border-l-emerald-500",
    bgClass: "bg-emerald-50/50",
  },
};

export function formatearFechaAviso(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
