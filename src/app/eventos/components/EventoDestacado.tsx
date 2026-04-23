"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  type Evento,
  categoriaBadgeStyle,
  formatearFecha,
} from "../data";

interface Props {
  evento: Evento;
}

export function EventoDestacado({ evento }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden bg-primary border border-white/10 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[340px]">
        {/* Imagen */}
        <div className="relative h-56 lg:h-auto overflow-hidden">
          {evento.imagen ? (
            <Image
              src={evento.imagen}
              alt={evento.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-church-dark flex items-center justify-center">
              <span className="text-6xl opacity-20">✝</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:hidden" />

          {/* Badge sobre imagen */}
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Próximo destacado
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-7 lg:p-10 flex flex-col justify-center">
          <Badge
            variant="outline"
            className={`w-fit mb-4 text-xs ${categoriaBadgeStyle[evento.categoria]}`}
          >
            {evento.categoria}
          </Badge>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
            {evento.titulo}
          </h2>
          <p className="text-white/65 text-sm leading-relaxed mb-6">
            {evento.descripcion}
          </p>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <Calendar className="w-4 h-4 text-accent shrink-0" />
              <span className="capitalize">{formatearFecha(evento.fecha)}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span>
                {evento.hora}
                {evento.horaFin && ` — ${evento.horaFin}`}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>{evento.lugar}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
