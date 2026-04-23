"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function NosotrosHero() {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
      {/* Foto de fondo — reemplazá por foto real del templo o congregación */}
      <Image
        src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&q=80"
        alt="Congregación Iglesia Lo Hermida"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 container-church pb-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Iglesia Metodista Pentecostal · IUMP
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Quiénes Somos
          </h1>
          <p className="mt-3 text-white/65 text-lg max-w-lg">
            Una familia de fe arraigada en Lo Hermida, Peñalolén.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
