"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export function EventosHero() {
  return (
    <section className="bg-primary pt-28 pb-14 lg:pt-32 lg:pb-16 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative container-church">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 mt-1">
            <CalendarDays className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">
              Agenda
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Eventos de la Iglesia
            </h1>
            <p className="text-white/60 mt-2 text-lg max-w-xl">
              Cultos, retiros, escuela dominical y todo lo que acontece
              en nuestra comunidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
