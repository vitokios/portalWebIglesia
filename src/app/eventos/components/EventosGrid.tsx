"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  categorias,
  type Evento,
  type CategoriaEvento,
  categoriaBadgeStyle,
  formatearFecha,
} from "../data";

interface Props {
  eventos: Evento[];
}

export function EventosGrid({ eventos: todosLosEventos }: Props) {
  const [categoriaActiva, setCategoriaActiva] =
    useState<CategoriaEvento>("Todos");

  const eventosFiltrados = todosLosEventos
    .slice(1)
    .filter(
      (e) => categoriaActiva === "Todos" || e.categoria === categoriaActiva
    );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
              categoriaActiva === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {eventosFiltrados.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 text-center text-muted-foreground"
          >
            <p className="text-4xl mb-3">📅</p>
            <p className="font-medium">No hay eventos en esta categoría por ahora.</p>
            <p className="text-sm mt-1">Volvé a revisar pronto.</p>
          </motion.div>
        ) : (
          <motion.div
            key={categoriaActiva}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {eventosFiltrados.map((evento, index) => (
              <motion.article
                key={evento.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  {evento.imagen ? (
                    <Image
                      src={evento.imagen}
                      alt={evento.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                      <span className="text-4xl opacity-20">✝</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge
                      variant="outline"
                      className={`text-[10px] backdrop-blur-sm bg-white/90 ${
                        categoriaBadgeStyle[evento.categoria]
                      }`}
                    >
                      {evento.categoria}
                    </Badge>
                  </div>
                  {evento.destacado && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-accent text-accent-foreground text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                    {evento.titulo}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {evento.descripcion}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="capitalize">{formatearFecha(evento.fecha)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{evento.hora}{evento.horaFin && ` — ${evento.horaFin}`}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{evento.lugar}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
