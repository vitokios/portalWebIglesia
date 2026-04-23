"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, User, Calendar, ChevronDown, ChevronUp, Target, Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type LeccionDominical, formatearFecha } from "../data";

interface Props {
  lecciones: LeccionDominical[];
}

function getNombreMes(fechaStr: string): string {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-CL", { month: "long", year: "numeric" });
}

function getClaveOrdenMes(fechaStr: string): string {
  // "2026-04" — sirve para ordenar cronológicamente
  return fechaStr.slice(0, 7);
}

export function SeriesEstudio({ lecciones }: Props) {
  const [mesAbierto, setMesAbierto] = useState<string | null>(() => {
    const siguiente = lecciones.find((l) => l.esSiguiente);
    return siguiente ? getClaveOrdenMes(siguiente.fecha) : null;
  });
  const [leccionAbierta, setLeccionAbierta] = useState<number | null>(null);

  const toggleMes = (clave: string) =>
    setMesAbierto((prev) => (prev === clave ? null : clave));

  const toggleLeccion = (id: number) =>
    setLeccionAbierta((prev) => (prev === id ? null : id));

  // Agrupar por mes manteniendo orden cronológico
  const porMes = lecciones.reduce<Record<string, typeof lecciones>>(
    (acc, l) => {
      const clave = getClaveOrdenMes(l.fecha);
      if (!acc[clave]) acc[clave] = [];
      acc[clave].push(l);
      return acc;
    },
    {}
  );

  const mesesOrdenados = Object.keys(porMes).sort();

  return (
    <div className="space-y-3">
      {mesesOrdenados.map((clavesMes) => {
        const leccionesMes = porMes[clavesMes];
        const nombreMes = getNombreMes(leccionesMes[0].fecha);
        const tieneActual = leccionesMes.some((l) => l.esSiguiente);
        const expandido = mesAbierto === clavesMes;

        return (
          <motion.div
            key={clavesMes}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cn(
              "border rounded-2xl overflow-hidden transition-colors duration-200",
              tieneActual ? "border-accent/40" : "border-border"
            )}
          >
            {/* Cabecera del mes */}
            <button
              onClick={() => toggleMes(clavesMes)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-secondary/50 transition-colors"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm transition-colors",
                  tieneActual
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {leccionesMes[0].fecha.slice(5, 7)}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-bold text-foreground capitalize">{nombreMes}</p>
                  {tieneActual && (
                    <span className="bg-accent text-accent-foreground text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Mes actual
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {leccionesMes.length} lección{leccionesMes.length > 1 ? "es" : ""}
                  {" · "}
                  {leccionesMes.map((l) => l.titulo).join(", ").slice(0, 60)}
                  {leccionesMes.map((l) => l.titulo).join(", ").length > 60 ? "…" : ""}
                </p>
              </div>

              {expandido
                ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
              }
            </button>

            {/* Lecciones del mes */}
            <AnimatePresence>
              {expandido && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0 border-t border-border space-y-2">
                    {leccionesMes.map((leccion, index) => {
                      const expandida = leccionAbierta === leccion.id;
                      return (
                        <motion.div
                          key={leccion.id}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={cn(
                            "border rounded-xl overflow-hidden mt-2 transition-colors",
                            leccion.esSiguiente
                              ? "border-accent/40 bg-accent/5"
                              : "border-border bg-background"
                          )}
                        >
                          {/* Fila lección */}
                          <button
                            onClick={() => toggleLeccion(leccion.id)}
                            className="w-full flex items-center gap-3 p-4 text-left hover:bg-secondary/50 transition-colors"
                          >
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                              {index + 1}
                            </span>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="font-semibold text-foreground text-sm">
                                  {leccion.titulo}
                                </p>
                                {leccion.esSiguiente && (
                                  <span className="bg-accent text-accent-foreground text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                    Este domingo
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-3 mt-0.5">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <BookOpen className="w-3 h-3" />
                                  {leccion.pasaje}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1 capitalize hidden sm:flex">
                                  <Calendar className="w-3 h-3" />
                                  {formatearFecha(leccion.fecha)}
                                </span>
                              </div>
                            </div>

                            {expandida
                              ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                              : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                            }
                          </button>

                          {/* Detalle de la lección */}
                          <AnimatePresence>
                            {expandida && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-5 pt-1 border-t border-border">
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-5 mt-4">

                                    {/* Resumen + objetivos */}
                                    <div className="space-y-4">
                                      <div>
                                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
                                          Resumen
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                          {leccion.resumen}
                                        </p>
                                      </div>

                                      {leccion.objetivos && (
                                        <div>
                                          <div className="flex items-center gap-1.5 mb-2">
                                            <Target className="w-3.5 h-3.5 text-accent" />
                                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                                              Objetivos
                                            </p>
                                          </div>
                                          <ul className="space-y-1.5">
                                            {leccion.objetivos.map((obj, i) => (
                                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                                {obj}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      <div className="flex flex-wrap gap-4 pt-3 border-t border-border">
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                          <User className="w-3.5 h-3.5 text-accent" />
                                          {leccion.maestro}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground capitalize">
                                          <Calendar className="w-3.5 h-3.5 text-accent" />
                                          {formatearFecha(leccion.fecha)}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                          <Users className="w-3.5 h-3.5 text-accent" />
                                          Todos los grupos
                                        </span>
                                      </div>
                                    </div>

                                    {/* Versículo */}
                                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex flex-col justify-center">
                                      <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-3">
                                        Versículo clave
                                      </p>
                                      <blockquote className="text-foreground text-sm leading-relaxed italic font-medium">
                                        &ldquo;{leccion.versiculo}&rdquo;
                                      </blockquote>
                                      <p className="text-accent text-xs font-bold mt-3">
                                        — {leccion.versiculoRef}
                                      </p>
                                    </div>

                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
