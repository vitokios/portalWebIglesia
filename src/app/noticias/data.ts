export type CategoriaNoticias =
  | "Todos"
  | "Iglesia"
  | "Evangelismo"
  | "Comunidad"
  | "Jóvenes"
  | "IUMP";

export interface Noticia {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string; // HTML o texto largo para la página de detalle
  categoria: Exclude<CategoriaNoticias, "Todos">;
  autor: string;
  fechaPublicacion: string; // "2026-04-15"
  imagen?: string;
  destacada?: boolean;
}

export const categoriasNoticias: CategoriaNoticias[] = [
  "Todos",
  "Iglesia",
  "Evangelismo",
  "Comunidad",
  "Jóvenes",
  "IUMP",
];

export const categoriaBadgeStyle: Record<
  Exclude<CategoriaNoticias, "Todos">,
  string
> = {
  Iglesia:      "bg-blue-100 text-blue-700 border-blue-200",
  Evangelismo:  "bg-amber-100 text-amber-700 border-amber-200",
  Comunidad:    "bg-emerald-100 text-emerald-700 border-emerald-200",
  Jóvenes:      "bg-indigo-100 text-indigo-700 border-indigo-200",
  IUMP:         "bg-rose-100 text-rose-700 border-rose-200",
};

// ─── Datos de ejemplo — reemplazá con Sanity ─────────────────────────────────
export const noticias: Noticia[] = [
  {
    id: 1,
    slug: "nueva-sala-escuela-dominical",
    titulo: "Inauguramos la nueva sala de Escuela Dominical",
    resumen:
      "Gracias a las ofrendas de nuestra congregación, contamos con un espacio moderno y equipado para formar a los niños en la Palabra.",
    contenido: `
      <p>Con mucha alegría compartimos que este domingo inauguramos oficialmente la nueva sala de Escuela Dominical de nuestra iglesia. Este proyecto fue posible gracias al esfuerzo y la generosidad de toda la congregación, que durante meses contribuyó con ofrendas y trabajo voluntario.</p>
      <p>La nueva sala cuenta con mobiliario adaptado para niños, materiales didácticos, y un espacio de juego seguro. La maestra a cargo, hermana [Nombre], expresó su gratitud: "Esto va a transformar la experiencia de los niños. Ahora tienen un lugar propio donde aprender del Señor con alegría".</p>
      <p>El pastor principal bendijo el espacio durante el culto del domingo, y los niños fueron los primeros en ingresar entre aplausos de la congregación.</p>
      <p>Les agradecemos a todos los que hicieron posible este sueño. Como dice Proverbios 22:6: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él."</p>
    `,
    categoria: "Iglesia",
    autor: "Secretaría de la Iglesia",
    fechaPublicacion: "2026-04-14",
    imagen:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1200&q=80",
    destacada: true,
  },
  {
    id: 2,
    slug: "campana-evangelismo-lo-hermida",
    titulo: "Campaña de evangelismo recorre las calles de Lo Hermida",
    resumen:
      "Más de 30 hermanos salieron a compartir el evangelio puerta a puerta. Familias del barrio escucharon el mensaje de esperanza.",
    contenido: `
      <p>El pasado sábado, un grupo de más de 30 hermanos y hermanas de nuestra congregación se organizó para salir a las calles de Lo Hermida a compartir el evangelio con los vecinos del barrio.</p>
      <p>La jornada comenzó con un tiempo de oración en el templo y terminó con testimonios de encuentros significativos. Varias familias recibieron literatura cristiana y al menos tres personas expresaron interés en conocer más sobre la fe.</p>
      <p>"Ver la disposición de nuestros hermanos para salir a servir me llena el corazón", dijo el pastor al finalizar la jornada.</p>
      <p>Esta campaña es parte del compromiso permanente de nuestra iglesia con el barrio donde Dios nos plantó.</p>
    `,
    categoria: "Evangelismo",
    autor: "Ministerio de Evangelismo",
    fechaPublicacion: "2026-04-10",
    imagen:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80",
    destacada: false,
  },
  {
    id: 3,
    slug: "actividades-semana-santa-2026",
    titulo: "Semana Santa 2026: celebración con récord de asistencia",
    resumen:
      "El culto de Domingo de Resurrección reunió a la congregación más numerosa en la historia reciente de nuestra iglesia. Un momento histórico.",
    contenido: `
      <p>La Semana Santa 2026 quedará grabada en la memoria de nuestra congregación. Desde el culto del Viernes Santo hasta la celebración del Domingo de Resurrección, cada servicio estuvo lleno de la presencia de Dios.</p>
      <p>El punto culminante fue el domingo de mañana, cuando el templo no fue suficiente para contener a todos los asistentes. Sillas adicionales fueron colocadas en el patio, y aun así hubo personas de pie. Se estima que asistieron más de 200 personas, entre miembros y visitantes.</p>
      <p>"Este es el tipo de domingo que nos recuerda por qué hacemos lo que hacemos", expresó el pastor con emoción. "Cristo resucitó, y esa noticia sigue siendo la más poderosa del mundo".</p>
    `,
    categoria: "Iglesia",
    autor: "Pastor Principal",
    fechaPublicacion: "2026-04-06",
    imagen:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&q=80",
    destacada: false,
  },
  {
    id: 4,
    slug: "jovenes-retiro-espiritual",
    titulo: "Jóvenes regresan transformados del retiro espiritual",
    resumen:
      "El grupo de jóvenes pasó un fin de semana de encuentro con Dios. Testimonios poderosos marcaron el retorno a la congregación.",
    contenido: `
      <p>El grupo de jóvenes de nuestra iglesia regresó este domingo de un retiro espiritual de dos días que dejó huellas profundas en cada participante. 22 jóvenes entre 15 y 28 años vivieron un tiempo intenso de adoración, reflexión bíblica y comunión.</p>
      <p>El retiro tuvo como tema "Identidad en Cristo" y estuvo guiado por el hermano [Nombre], líder de jóvenes. Durante el culto dominical, varios jóvenes compartieron sus testimonios ante la congregación, algunos con lágrimas en los ojos.</p>
      <p>"Volví siendo otra persona", dijo una de las jóvenes. "Entendí que Dios me ama tal como soy, sin necesidad de demostrar nada".</p>
    `,
    categoria: "Jóvenes",
    autor: "Ministerio de Jóvenes",
    fechaPublicacion: "2026-03-28",
    imagen:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1200&q=80",
    destacada: false,
  },
  {
    id: 5,
    slug: "colecta-familia-necesidad",
    titulo: "La iglesia responde: colecta solidaria para familia del barrio",
    resumen:
      "Nuestra congregación levantó una ofrenda especial para ayudar a una familia de Lo Hermida que atraviesa una crisis económica.",
    contenido: `
      <p>Una de las señales más hermosas de la iglesia viva es su capacidad de responder al dolor del prójimo. Esta semana, nuestra congregación demostró ese amor de manera concreta.</p>
      <p>Una familia del barrio Lo Hermida, conocida por varios de nuestros miembros, se encontraba en una situación crítica tras perder su fuente de ingresos. En cuestión de días, la iglesia organizó una colecta que superó todas las expectativas.</p>
      <p>"No solos los hermanos de la congregación, sino también vecinos que no son parte de la iglesia contribuyeron", contó quien organizó la colecta. "Es el evangelio en acción".</p>
    `,
    categoria: "Comunidad",
    autor: "Secretaría de la Iglesia",
    fechaPublicacion: "2026-03-20",
    imagen:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
    destacada: false,
  },
  {
    id: 6,
    slug: "asamblea-iump-2026",
    titulo: "Representantes de nuestra iglesia en la Asamblea Nacional IUMP",
    resumen:
      "El pastor y dos diáconos participaron en la Asamblea Nacional de la Corporación IUMP celebrada en Santiago.",
    contenido: `
      <p>Con orgullo compartimos que nuestra iglesia estuvo representada en la Asamblea Nacional de la Corporación Iglesia Unida Metodista Pentecostal (IUMP), celebrada en Santiago.</p>
      <p>El pastor principal y dos diáconos de nuestra congregación participaron de las sesiones plenarias, grupos de trabajo y el culto de clausura que reunió a cientos de líderes de todo Chile.</p>
      <p>Entre los temas tratados se encontraron el fortalecimiento de las iglesias locales, estrategias de evangelismo urbano y la formación de nuevos líderes. "Fue un tiempo de mucho aprendizaje y de sentir la unidad del cuerpo de Cristo en Chile", comentó el pastor.</p>
    `,
    categoria: "IUMP",
    autor: "Pastor Principal",
    fechaPublicacion: "2026-03-10",
    imagen:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&q=80",
    destacada: false,
  },
];

export function formatearFechaNoticia(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function tiempoRelativo(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  const ahora = new Date();
  const dias = Math.floor(
    (ahora.getTime() - fecha.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (dias === 0) return "Hoy";
  if (dias === 1) return "Ayer";
  if (dias < 7) return `Hace ${dias} días`;
  if (dias < 30) return `Hace ${Math.floor(dias / 7)} semana${Math.floor(dias / 7) > 1 ? "s" : ""}`;
  return formatearFechaNoticia(fechaStr);
}
