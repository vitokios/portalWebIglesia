"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OracionSection() {
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

      <div className="relative container-church">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-white max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-6 h-6 text-accent" />
          </div>

          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Oración
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            ¿Necesitás oración?
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Estamos aquí para interceder por vos. Comparte tu petición
            y nuestra comunidad orará por ti con amor y fe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracion"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-12 px-8"
              )}
            >
              Enviar Petición de Oración
            </Link>
            <a
              href="tel:+56900000000"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold text-base h-12 px-8"
              )}
            >
              Llamar a la Iglesia
            </a>
          </div>

          <p className="mt-6 text-white/40 text-xs">
            &ldquo;El Señor está cerca de los que le invocan, de todos los que le invocan de verdad.&rdquo; — Salmo 145:18
          </p>
        </motion.div>
      </div>
    </section>
  );
}
