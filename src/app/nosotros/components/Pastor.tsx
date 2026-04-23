"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

// ─── Datos del pastor — reemplazá con la info real ───────────────────────────
const pastor = {
  nombre: "Pastor [Nombre Apellido]",
  cargo: "Pastor Principal",
  imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  mensaje:
    "Dios nos llamó a ser una iglesia que no solo llena un templo, sino que llena de esperanza el barrio entero. Cada domingo es una oportunidad para que alguien encuentre a Cristo y comience una nueva historia.",
  versiculo: {
    texto: "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad.",
    referencia: "Jeremías 29:11",
  },
};
// ─────────────────────────────────────────────────────────────────────────────

export function Pastor() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-church">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Liderazgo
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Mensaje Pastoral
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-secondary/40 border border-border rounded-2xl p-8 lg:p-12"
          >
            {/* Ícono de cita */}
            <Quote className="w-10 h-10 text-accent/30 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
              {/* Foto */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3">
                <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-lg shrink-0">
                  <Image
                    src={pastor.imagen}
                    alt={pastor.nombre}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{pastor.nombre}</p>
                  <p className="text-xs text-accent font-semibold tracking-wide uppercase">
                    {pastor.cargo}
                  </p>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed font-medium mb-6">
                  &ldquo;{pastor.mensaje}&rdquo;
                </blockquote>

                {/* Versículo */}
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{pastor.versiculo.texto}&rdquo;
                  </p>
                  <p className="text-xs text-accent font-semibold mt-1">
                    — {pastor.versiculo.referencia}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
