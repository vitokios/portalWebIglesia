"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type Noticia,
  categoriaBadgeStyle,
  tiempoRelativo,
} from "../data";

export function NoticiaDestacada({ noticia }: { noticia: Noticia }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card"
    >
      {/* Imagen */}
      <div className="relative h-64 lg:h-auto overflow-hidden">
        {noticia.imagen ? (
          <Image
            src={noticia.imagen}
            alt={noticia.titulo}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
            <span className="text-6xl opacity-20">✝</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Noticia destacada
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-7 lg:p-10 flex flex-col justify-center">
        <Badge
          variant="outline"
          className={`w-fit mb-4 text-xs ${categoriaBadgeStyle[noticia.categoria]}`}
        >
          {noticia.categoria}
        </Badge>

        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
          {noticia.titulo}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {noticia.resumen}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-accent" />
            {noticia.autor}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {tiempoRelativo(noticia.fechaPublicacion)}
          </span>
        </div>

        <Link
          href={`/noticias/${noticia.slug}`}
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-fit group/btn"
          )}
        >
          Leer noticia completa
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
