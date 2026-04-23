"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Evento, formatearFecha } from "@/app/eventos/data";

interface Props {
  eventos: Evento[];
}

const tipoBadgeColor: Record<string, string> = {
  Culto:     "bg-primary/10 text-primary border-primary/20",
  Formación: "bg-accent/10 text-accent-foreground border-accent/20",
  Oración:   "bg-purple-100 text-purple-700 border-purple-200",
  Retiro:    "bg-emerald-100 text-emerald-700 border-emerald-200",
  Comunidad: "bg-rose-100 text-rose-700 border-rose-200",
  Jóvenes:   "bg-indigo-100 text-indigo-700 border-indigo-200",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function EventosPreview({ eventos }: Props) {
  const preview = eventos.slice(0, 4);

  if (preview.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-background">
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
              Próximamente
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Eventos de la Iglesia
            </h2>
          </div>
          <Link
            href="/eventos"
            className={cn(buttonVariants({ variant: "ghost" }), "self-start sm:self-auto group")}
          >
            Ver todos
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {preview.map((evento) => (
            <motion.div key={evento.id} variants={itemVariants}>
              <Card className={`h-full hover:shadow-md transition-shadow duration-200 ${evento.destacado ? "border-accent/40 bg-accent/5" : ""}`}>
                <CardContent className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="outline" className={`text-xs ${tipoBadgeColor[evento.categoria] ?? ""}`}>
                      {evento.categoria}
                    </Badge>
                    {evento.destacado && (
                      <span className="text-[10px] font-semibold text-accent uppercase tracking-wide">
                        Destacado
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-foreground leading-tight">{evento.titulo}</h3>

                  <div className="space-y-1.5 mt-auto">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
