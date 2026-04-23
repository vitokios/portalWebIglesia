"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Equipo pastoral — reemplazá con los datos reales ─────────────────────
const equipo = [
  {
    nombre: "[Nombre Apellido]",
    cargo: "Pastor Asociado",
    area: "Jóvenes y Evangelismo",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    nombre: "[Nombre Apellido]",
    cargo: "Diaconisa",
    area: "Escuela Dominical",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    nombre: "[Nombre Apellido]",
    cargo: "Diácono",
    area: "Asistencia Social",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    nombre: "[Nombre Apellido]",
    cargo: "Líder de Alabanza",
    area: "Ministerio Musical",
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export function Equipo() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="container-church">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Equipo pastoral
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Quiénes nos guían
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Un equipo comprometido con servir a Dios y a la congregación
            con dedicación y amor.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {equipo.map((miembro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Foto */}
              <div className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden mb-4 border border-border shadow-sm group-hover:shadow-md group-hover:border-accent/30 transition-all duration-300">
                <Image
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="144px"
                />
                {/* Overlay dorado en hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <h3 className="font-bold text-foreground text-sm leading-tight">
                {miembro.nombre}
              </h3>
              <p className="text-accent text-xs font-semibold mt-0.5">
                {miembro.cargo}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                {miembro.area}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
