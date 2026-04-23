"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const horarios = [
  { dia: "Domingo", hora: "09:30 AM", descripcion: "Escuela Dominical" },
  { dia: "Domingo", hora: "11:00 AM", descripcion: "Culto Principal" },
  { dia: "Miércoles", hora: "07:00 PM", descripcion: "Reunión de Oración" },
];

export function UneteSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-church-dark" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative container-church">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              Te esperamos
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-5">
              Vení a visitarnos,<br />somos tu familia
            </h2>
            <p className="text-white/65 leading-relaxed mb-8 text-lg">
              No importa de dónde vengas ni cuál sea tu historia.
              Tenemos un lugar para vos en nuestra congregación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/oracion"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 group"
                )}
              >
                Pedir Oración
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/eventos"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold h-12 px-8"
                )}
              >
                Ver Próximos Eventos
              </Link>
            </div>
          </motion.div>

          {/* Horarios + ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm"
          >
            {/* Horarios */}
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-4 h-4 text-accent" />
              <p className="text-white font-semibold text-sm">Horarios de culto</p>
            </div>

            <div className="space-y-3 mb-7">
              {horarios.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                >
                  <div>
                    <p className="text-white text-sm font-medium">{h.descripcion}</p>
                    <p className="text-white/50 text-xs">{h.dia}</p>
                  </div>
                  <span className="text-accent font-bold text-sm">{h.hora}</span>
                </div>
              ))}
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-3 pt-4 border-t border-white/10">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-medium">Dónde estamos</p>
                <p className="text-white/60 text-xs mt-0.5 leading-relaxed">
                  Lo Hermida, Peñalolén<br />Santiago, Chile
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
