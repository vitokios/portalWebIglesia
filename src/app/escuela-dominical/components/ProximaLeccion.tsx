"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, User, Target, Users } from "lucide-react";
import { type LeccionDominical, formatearFecha } from "../data";

interface Props {
  leccion: LeccionDominical;
}

export function ProximaLeccion({ leccion }: Props) {
  return (
    <div>
      <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-5">
        Este domingo · 09:30 AM
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-primary rounded-2xl overflow-hidden"
      >
        {/* Decoraciones */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0">

          {/* Contenido principal */}
          <div className="p-7 lg:p-10">
            {/* Serie */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-wide">
                {leccion.serie}
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
              {leccion.titulo}
            </h2>

            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-lg">
              {leccion.resumen}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-xs text-white/60">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                {leccion.pasaje}
              </span>
              <span className="flex items-center gap-2 text-xs text-white/60">
                <User className="w-3.5 h-3.5 text-accent" />
                {leccion.maestro}
              </span>
              <span className="flex items-center gap-2 text-xs text-white/60 capitalize">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {formatearFecha(leccion.fecha)}
              </span>
              <span className="flex items-center gap-2 text-xs text-white/60">
                <Users className="w-3.5 h-3.5 text-accent" />
                Todos los grupos
              </span>
            </div>

            {/* Objetivos */}
            {leccion.objetivos && (
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-1.5 mb-3">
                  <Target className="w-3.5 h-3.5 text-accent" />
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">
                    Objetivos de la clase
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {leccion.objetivos.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Versículo — panel lateral */}
          <div className="bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 p-7 lg:p-8 flex flex-col justify-center">
            <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-4">
              Versículo de la semana
            </p>
            <blockquote className="text-white text-lg lg:text-xl font-medium leading-relaxed italic mb-4">
              &ldquo;{leccion.versiculo}&rdquo;
            </blockquote>
            <p className="text-accent font-bold text-sm">
              — {leccion.versiculoRef}
            </p>

            {/* Tip para memorizar */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">
                Tip de memorización
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                Escribí el versículo en un papel y pegalo en un lugar que veas todos los días esta semana.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
