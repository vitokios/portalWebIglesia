"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, User, Clock, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  categoriaConfig,
  type CategoriaVideo,
  type VideoEstudio,
} from "../data";

type Filtro = CategoriaVideo | "todos";

const FILTROS: { valor: Filtro; label: string }[] = [
  { valor: "todos", label: "Todos" },
  { valor: "capsula", label: "Cápsulas" },
  { valor: "predicacion", label: "Predicaciones" },
  { valor: "estudio", label: "Estudios" },
  { valor: "devocional", label: "Devocionales" },
];

interface Props {
  videos: VideoEstudio[];
  excluirId?: number;
}

export function VideosGrid({ videos, excluirId }: Props) {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [videoAbierto, setVideoAbierto] = useState<number | null>(null);

  const videosFiltrados = videos
    .filter((v) => v.id !== excluirId)
    .filter((v) => filtro === "todos" || v.categoria === filtro);

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {FILTROS.map(({ valor, label }) => (
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
                {videos.filter((v) => v.id !== excluirId && v.categoria === valor).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filtro}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {videosFiltrados.length === 0 ? (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              <Play className="w-10 h-10 mx-auto mb-3 opacity-20" />
              <p className="text-sm">No hay videos en esta categoría todavía.</p>
            </div>
          ) : (
            videosFiltrados.map((video, index) => {
              const config = categoriaConfig[video.categoria];
              const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
              const reproduciendo = videoAbierto === video.id;

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-border rounded-2xl overflow-hidden bg-card flex flex-col"
                >
                  {/* Thumbnail / Player */}
                  <div className="relative aspect-video bg-black shrink-0">
                    {reproduciendo ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${thumbnail})` }}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <button
                          onClick={() => setVideoAbierto(video.id)}
                          className="absolute inset-0 flex items-center justify-center group"
                          aria-label={`Reproducir ${video.titulo}`}
                        >
                          <div className="w-11 h-11 rounded-full bg-accent/90 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                            <Play className="w-5 h-5 text-accent-foreground fill-accent-foreground ml-0.5" />
                          </div>
                        </button>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {video.duracion}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-4 flex flex-col flex-1">
                    <Badge
                      variant="outline"
                      className={`text-[10px] mb-2 w-fit ${config.badgeClass}`}
                    >
                      {config.label}
                    </Badge>

                    <h3 className="font-semibold text-foreground text-sm leading-snug mb-1.5 line-clamp-2">
                      {video.titulo}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1 mb-3">
                      {video.descripcion}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-3 border-t border-border">
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <User className="w-3 h-3" />
                        {video.predicador}
                      </span>
                      {video.pasaje && (
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <BookOpen className="w-3 h-3" />
                          {video.pasaje}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground ml-auto">
                        <Clock className="w-3 h-3" />
                        {video.duracion}
                      </span>
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
