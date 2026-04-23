"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Noticia, tiempoRelativo } from "@/app/noticias/data";

interface Props {
  noticias: Noticia[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function NoticiasPreview({ noticias }: Props) {
  const preview = noticias.slice(0, 3);

  if (preview.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container-church">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              Al día
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Noticias de la Comunidad
            </h2>
          </div>
          <Link
            href="/noticias"
            className={cn(buttonVariants({ variant: "ghost" }), "self-start sm:self-auto group")}
          >
            Ver todas
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {preview.map((noticia) => (
            <motion.div key={noticia.id} variants={itemVariants}>
              <Link href={`/noticias/${noticia.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <div className="relative h-44 rounded-t-lg overflow-hidden">
                    {noticia.imagen ? (
                      <Image
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                        <span className="text-4xl opacity-20">✝</span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {noticia.categoria}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {tiempoRelativo(noticia.fechaPublicacion)}
                      </span>
                    </div>

                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {noticia.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {noticia.resumen}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                      Leer más
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
