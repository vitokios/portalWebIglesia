"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  type CategoriaNoticias,
  categoriasNoticias,
  categoriaBadgeStyle,
  tiempoRelativo,
  type Noticia,
} from "../data";

interface Props {
  noticias: Noticia[];
}

export function NoticiasGrid({ noticias }: Props) {
  const [categoriaActiva, setCategoriaActiva] =
    useState<CategoriaNoticias>("Todos");

  const noticiasFiltradas = noticias.filter(
    (n) => categoriaActiva === "Todos" || n.categoria === categoriaActiva
  );

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categoriasNoticias.map((cat) => (
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

      {/* Grilla */}
      <AnimatePresence mode="wait">
        {noticiasFiltradas.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 text-center text-muted-foreground"
          >
            <p className="text-4xl mb-3">📰</p>
            <p className="font-medium">No hay noticias en esta categoría.</p>
            <p className="text-sm mt-1">Volvé a revisar pronto.</p>
          </motion.div>
        ) : (
          <motion.div
            key={categoriaActiva}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {noticiasFiltradas.map((noticia, index) => (
              <motion.article
                key={noticia.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <Link
                  href={`/noticias/${noticia.slug}`}
                  className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    {noticia.imagen ? (
                      <Image
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                        <span className="text-4xl opacity-20">✝</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge
                        variant="outline"
                        className={`text-[10px] bg-white/90 backdrop-blur-sm ${
                          categoriaBadgeStyle[noticia.categoria]
                        }`}
                      >
                        {noticia.categoria}
                      </Badge>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                      {noticia.titulo}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {noticia.resumen}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 text-accent" />
                          {noticia.autor.split(" ").slice(0, 2).join(" ")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-accent" />
                          {tiempoRelativo(noticia.fechaPublicacion)}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
