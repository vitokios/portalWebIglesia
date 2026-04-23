"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Info, CheckCircle2, Bell, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TipoAviso = "urgente" | "informativo" | "general";

const avisos = [
  {
    id: 1,
    tipo: "urgente" as TipoAviso,
    titulo: "Colecta especial para familia en necesidad",
    contenido: "Este domingo recibiremos una ofrenda especial para apoyar a una familia de nuestra congregación que atraviesa un momento difícil.",
  },
  {
    id: 2,
    tipo: "informativo" as TipoAviso,
    titulo: "Cambio de horario culto del miércoles",
    contenido: "A partir de esta semana, la reunión de oración del miércoles pasa a las 7:00 PM en lugar de las 6:30 PM.",
  },
  {
    id: 3,
    tipo: "general" as TipoAviso,
    titulo: "Ensayo coro juvenil",
    contenido: "Recordar a los jóvenes del coro que el ensayo del sábado se realizará a las 3:00 PM en la sala de música.",
  },
];

const tipoConfig = {
  urgente: {
    icon: AlertCircle,
    badgeClass: "bg-red-100 text-red-700 border-red-200",
    borderClass: "border-l-red-500",
    label: "Urgente",
  },
  informativo: {
    icon: Info,
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
    borderClass: "border-l-blue-500",
    label: "Informativo",
  },
  general: {
    icon: CheckCircle2,
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    borderClass: "border-l-emerald-500",
    label: "General",
  },
};

export function AvisosSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-church">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 text-accent" />
            <p className="text-accent font-semibold text-sm tracking-widest uppercase">
              Avisos
            </p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Anuncios de la Iglesia
          </h2>
        </motion.div>

        <div className="flex justify-end mb-6">
          <Link
            href="/avisos"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 text-sm"
            )}
          >
            Ver todos los avisos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4 max-w-3xl">
          {avisos.map((aviso, index) => {
            const config = tipoConfig[aviso.tipo];
            const Icon = config.icon;
            return (
              <motion.div
                key={aviso.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 rounded-lg border border-border border-l-4 ${config.borderClass} bg-card`}
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="font-semibold text-foreground text-sm">{aviso.titulo}</h3>
                      <Badge variant="outline" className={`text-[10px] ${config.badgeClass}`}>
                        {config.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {aviso.contenido}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
