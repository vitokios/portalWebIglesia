"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Info, CheckCircle2, CalendarDays, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  tipoConfig,
  formatearFechaAviso,
  type TipoAviso,
  type Aviso,
} from "../data";

interface Props {
  avisos: Aviso[];
}

const TIPOS: { valor: TipoAviso | "todos"; label: string }[] = [
  { valor: "todos", label: "Todos" },
  { valor: "urgente", label: "Urgentes" },
  { valor: "informativo", label: "Informativos" },
  { valor: "general", label: "Generales" },
];

const iconosPorTipo: Record<TipoAviso, React.ElementType> = {
  urgente: AlertCircle,
  informativo: Info,
  general: CheckCircle2,
};

const colorIcono: Record<TipoAviso, string> = {
  urgente: "text-red-500",
  informativo: "text-blue-500",
  general: "text-emerald-500",
};

export function AvisosLista({ avisos }: Props) {
  const [filtro, setFiltro] = useState<TipoAviso | "todos">("todos");

  const avisosFiltrados =
    filtro === "todos" ? avisos : avisos.filter((a) => a.tipo === filtro);

  const urgentes = avisos.filter((a) => a.tipo === "urgente");

  return (
    <div className="space-y-10">
      {/* Banner urgente destacado (si hay alguno) */}
      {urgentes.length > 0 && filtro === "todos" && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <p className="text-red-700 font-bold text-xs tracking-widest uppercase">
              Requiere atención inmediata
            </p>
          </div>
          <div className="space-y-3">
            {urgentes.map((aviso) => (
              <div
                key={aviso.id}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-red-100"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {aviso.titulo}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {aviso.contenido}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {TIPOS.map(({ valor, label }) => (
          <button
            key={valor}
            onClick={() => setFiltro(valor)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              filtro === valor
                ? "bg-primary text-white border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {label}
            {valor !== "todos" && (
              <span
                className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  filtro === valor
                    ? "bg-white/20 text-white"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {avisos.filter((a) => a.tipo === valor).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lista */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filtro}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {avisosFiltrados.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No hay avisos en esta categoría.</p>
            </div>
          ) : (
            avisosFiltrados.map((aviso, index) => {
              const config = tipoConfig[aviso.tipo];
              const Icono = iconosPorTipo[aviso.tipo];
              return (
                <motion.div
                  key={aviso.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className={`rounded-xl border border-border border-l-4 ${config.borderClass} bg-card p-5`}
                >
                  <div className="flex items-start gap-4">
                    <Icono
                      className={`w-5 h-5 mt-0.5 shrink-0 ${colorIcono[aviso.tipo]}`}
                    />
                    <div className="flex-1 min-w-0">
                      {/* Título + badge */}
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-semibold text-foreground text-sm leading-snug">
                          {aviso.titulo}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${config.badgeClass}`}
                        >
                          {config.label}
                        </Badge>
                      </div>

                      {/* Contenido */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {aviso.contenido}
                      </p>

                      {/* Metadatos */}
                      <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-border">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {formatearFechaAviso(aviso.fecha)}
                        </span>
                        {aviso.vigenciaHasta && (
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            Vigente hasta el{" "}
                            {formatearFechaAviso(aviso.vigenciaHasta)}
                          </span>
                        )}
                        {aviso.autor && (
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <User className="w-3.5 h-3.5" />
                            {aviso.autor}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
