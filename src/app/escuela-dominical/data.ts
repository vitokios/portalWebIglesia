export interface LeccionDominical {
  id: number;
  fecha: string;         // "2026-04-26"
  titulo: string;
  serie: string;         // Nombre de la serie temática
  pasaje: string;        // "Mateo 6:5-15"
  versiculo: string;     // Texto completo del versículo clave
  versiculoRef: string;  // "Mateo 6:9"
  maestro: string;
  resumen: string;
  objetivos?: string[];
  esSiguiente?: boolean;
}

// ─── Datos — reemplazá con Sanity cuando esté listo ──────────────────────────
export const lecciones: LeccionDominical[] = [
  {
    id: 1,
    fecha: "2026-04-06",
    titulo: "Las Bienaventuranzas",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 5:1-12",
    versiculo:
      "Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos.",
    versiculoRef: "Mateo 5:3",
    maestro: "Pastor Principal",
    resumen:
      "Jesús inaugura su enseñanza más conocida describiendo el carácter del ciudadano del Reino. Cada bienaventuranza es una inversión de los valores del mundo.",
    objetivos: [
      "Comprender qué significa ser 'pobre en espíritu'",
      "Identificar cómo las bienaventuranzas desafían nuestra cultura",
      "Aplicar una bienaventuranza concreta en la semana",
    ],
  },
  {
    id: 2,
    fecha: "2026-04-13",
    titulo: "Sal y Luz del Mundo",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 5:13-16",
    versiculo:
      "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos.",
    versiculoRef: "Mateo 5:16",
    maestro: "Pastor Principal",
    resumen:
      "El creyente tiene una función en el mundo: preservar y dar luz. Estudiaremos qué significa ser sal que no pierde su sabor y luz que no se esconde.",
    objetivos: [
      "Entender la metáfora de la sal en el contexto del siglo I",
      "Reflexionar sobre nuestra influencia en el barrio y el trabajo",
      "Identificar áreas donde podemos 'dar más luz'",
    ],
  },
  {
    id: 3,
    fecha: "2026-04-20",
    titulo: "La Verdadera Justicia",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 5:17-48",
    versiculo:
      "Sed, pues, vosotros perfectos, como vuestro Padre que está en los cielos es perfecto.",
    versiculoRef: "Mateo 5:48",
    maestro: "Diácono [Nombre]",
    resumen:
      "Jesús profundiza la Ley más allá del acto externo al corazón. No basta no matar — Jesús apunta a la ira. No basta no adulterar — Jesús señala al deseo.",
    objetivos: [
      "Entender la diferencia entre justicia externa e interna",
      "Identificar áreas del corazón que necesitan transformación",
      "Comprender que la gracia no elimina, sino cumple la Ley",
    ],
  },
  {
    id: 4,
    fecha: "2026-04-26",
    titulo: "El Padre Nuestro — Cómo Orar",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 6:5-15",
    versiculo:
      "Vosotros, pues, oraréis así: Padre nuestro que estás en los cielos, santificado sea tu nombre.",
    versiculoRef: "Mateo 6:9",
    maestro: "Pastor Principal",
    resumen:
      "Jesús nos enseña un modelo de oración que cubre todas las dimensiones de nuestra relación con Dios: adoración, petición, confesión y entrega.",
    esSiguiente: true,
    objetivos: [
      "Analizar cada petición del Padre Nuestro",
      "Entender la oración como conversación con el Padre",
      "Desarrollar un hábito de oración personal basado en este modelo",
    ],
  },
  {
    id: 5,
    fecha: "2026-05-03",
    titulo: "Las Riquezas y la Confianza",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 6:19-34",
    versiculo:
      "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
    versiculoRef: "Mateo 6:33",
    maestro: "Diácono [Nombre]",
    resumen:
      "Jesús habla de la ansiedad, las riquezas y la confianza en Dios. Un mensaje profundamente necesario para nuestra cultura materialista.",
    objetivos: [
      "Entender por qué Jesús habla tanto de dinero",
      "Reflexionar sobre nuestra relación con las posesiones",
      "Aprender a 'buscar primero el Reino' en la práctica diaria",
    ],
  },
  {
    id: 6,
    fecha: "2026-05-10",
    titulo: "No Juzguéis",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 7:1-12",
    versiculo:
      "Y como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos.",
    versiculoRef: "Lucas 6:31",
    maestro: "Pastor Principal",
    resumen:
      "El juicio que hacemos a otros revela más de nosotros mismos que de ellos. Jesús nos llama a la misericordia y a la 'Regla de Oro'.",
    objetivos: [
      "Distinguir entre discernimiento y juicio destructivo",
      "Reflexionar sobre nuestros 'troncos' antes de ver 'la paja' del otro",
      "Aplicar la Regla de Oro en las relaciones más difíciles",
    ],
  },
  {
    id: 7,
    fecha: "2026-05-17",
    titulo: "El Fundamento Firme",
    serie: "El Sermón del Monte",
    pasaje: "Mateo 7:24-29",
    versiculo:
      "Cualquiera, pues, que me oye estas palabras, y las hace, le compararé a un hombre prudente, que edificó su casa sobre la roca.",
    versiculoRef: "Mateo 7:24",
    maestro: "Pastor Principal",
    resumen:
      "Jesús cierra el Sermón del Monte con una imagen poderosa: la obediencia como el único fundamento sólido. Oír sin hacer es construir sobre arena.",
    objetivos: [
      "Comprender la diferencia entre oir y obedecer",
      "Identificar 'arenas' sobre las que podemos estar construyendo",
      "Comprometerse a una obediencia concreta de las enseñanzas del sermón",
    ],
  },
];

export function formatearFecha(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function getLeccionSiguiente(): LeccionDominical | undefined {
  return lecciones.find((l) => l.esSiguiente);
}
