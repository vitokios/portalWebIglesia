"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, User, Clock, ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categoriaConfig, type VideoEstudio } from "@/app/estudios/data";
import { YoutubeThumbnail } from "@/components/ui/YoutubeThumbnail";

interface Props {
  videos: VideoEstudio[];
}

export function EstudiosPreview({ videos }: Props) {
  const [videoAbierto, setVideoAbierto] = useState<number | null>(null);
  const preview = videos.slice(0, 3);

  if (preview.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-church">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <PlayCircle className="w-5 h-5 text-accent" />
              <p className="text-accent font-semibold text-sm tracking-widest uppercase">
                Estudios Bíblicos
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Últimos Videos
            </h2>
          </div>
          <Link
            href="/estudios"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 shrink-0 hidden sm:flex")}
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((video, index) => {
            const config = categoriaConfig[video.categoria];
            const reproduciendo = videoAbierto === video.id;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border rounded-2xl overflow-hidden bg-card flex flex-col"
              >
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
                      <YoutubeThumbnail youtubeId={video.youtubeId} />
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

                <div className="p-4 flex flex-col flex-1">
                  <Badge variant="outline" className={`text-[10px] mb-2 w-fit ${config.badgeClass}`}>
                    {config.label}
                  </Badge>
                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-1.5 line-clamp-2">
                    {video.titulo}
                  </h3>
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border">
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <User className="w-3 h-3" />
                      {video.predicador}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground ml-auto">
                      <Clock className="w-3 h-3" />
                      {video.duracion}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/estudios" className={cn(buttonVariants({ variant: "outline" }), "gap-2")}>
            Ver todos los estudios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
