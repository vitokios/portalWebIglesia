"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, BookOpen, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  type VideoEstudio,
  categoriaConfig,
  formatearFechaVideo,
} from "../data";

interface Props {
  video: VideoEstudio;
}

export function VideoDestacado({ video }: Props) {
  const [reproduciendo, setReproduciendo] = useState(false);
  const config = categoriaConfig[video.categoria];
  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <div>
      <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-5">
        Video destacado
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0 border border-border rounded-2xl overflow-hidden bg-card"
      >
        {/* Player */}
        <div className="relative aspect-video bg-black">
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
              {/* Thumbnail con overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${thumbnail})` }}
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Botón play */}
              <button
                onClick={() => setReproduciendo(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Reproducir video"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-7 h-7 text-accent-foreground fill-accent-foreground ml-1" />
                </div>
              </button>

              {/* Duración */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded">
                {video.duracion}
              </div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="p-7 flex flex-col justify-between">
          <div>
            <Badge variant="outline" className={`text-[10px] mb-3 ${config.badgeClass}`}>
              {config.label}
            </Badge>

            <h2 className="text-xl font-bold text-foreground leading-snug mb-3">
              {video.titulo}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {video.descripcion}
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-border">
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <User className="w-3.5 h-3.5 text-accent" />
              {video.predicador}
            </span>
            {video.pasaje && (
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                {video.pasaje}
              </span>
            )}
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {video.duracion} · {formatearFechaVideo(video.fecha)}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
