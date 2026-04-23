"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Hitos históricos — actualizá con las fechas reales de tu iglesia
const hitos = [
  {
    año: "1950s",
    titulo: "Los orígenes",
    descripcion:
      "La iglesia nace como parte del avivamiento del movimiento pentecostal en Chile, respondiendo al llamado de llevar el evangelio a las comunidades obreras de Santiago.",
  },
  {
    año: "1970s",
    titulo: "Llegada a Lo Hermida",
    descripcion:
      "La congregación se establece en la población Lo Hermida de Peñalolén, convirtiéndose en un pilar espiritual del barrio durante tiempos de grandes cambios sociales en Chile.",
  },
  {
    año: "1990s",
    titulo: "Crecimiento y consolidación",
    descripcion:
      "La iglesia crece junto al barrio, abriendo programas de escuela dominical, grupos de jóvenes y actividades comunitarias que fortalecen el tejido social de Lo Hermida.",
  },
  {
    año: "Hoy",
    titulo: "Una comunidad viva",
    descripcion:
      "Con más de 150 fieles activos, seguimos siendo un espacio de fe, esperanza y servicio. Parte orgullosa de la Corporación IUMP de Chile.",
  },
];

export function Historia() {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container-church">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              Nuestra historia
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Décadas de fe en<br />el corazón de Lo Hermida
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Somos parte de la Corporación Iglesia Unida Metodista Pentecostal (IUMP),
              un movimiento cristiano nacido en Chile que hoy cuenta con miles de
              congregaciones a lo largo del país. Nuestra iglesia en Lo Hermida es
              una de esas historias de fe que persiste generación tras generación.
            </p>

            {/* Timeline */}
            <div className="relative space-y-0">
              {/* Línea vertical */}
              <div className="absolute left-[30px] top-3 bottom-3 w-px bg-border" />

              {hitos.map((hito, index) => (
                <motion.div
                  key={hito.año}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5 pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-[60px] flex flex-col items-center pt-1">
                    <div className="w-4 h-4 rounded-full bg-accent border-2 border-background shadow-sm z-10" />
                    <span className="text-[10px] font-bold text-accent mt-1 tracking-wide">
                      {hito.año}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-foreground mb-1">{hito.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {hito.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1547058881-aa0f2a379322?w=800&q=80"
                alt="Interior del templo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Stat card flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -left-5 bg-background rounded-xl shadow-xl border border-border p-5"
            >
              <p className="text-3xl font-bold text-primary">+150</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Hermanos en<br />la congregación
              </p>
            </motion.div>

            {/* Acento dorado decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/10 border border-accent/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
