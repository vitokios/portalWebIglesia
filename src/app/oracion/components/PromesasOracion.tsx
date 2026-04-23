"use client";

import { motion } from "framer-motion";

const promesas = [
  {
    versiculo:
      "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",
    referencia: "Jeremías 33:3",
  },
  {
    versiculo:
      "El Señor está cerca de los que le invocan, de todos los que le invocan de verdad.",
    referencia: "Salmo 145:18",
  },
  {
    versiculo:
      "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios.",
    referencia: "Filipenses 4:6",
  },
];

export function PromesasOracion() {
  return (
    <div className="space-y-4">
      <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-5">
        Promesas de Dios
      </p>
      {promesas.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-primary/5 border border-primary/10 rounded-xl p-4"
        >
          <blockquote className="text-sm text-foreground leading-relaxed italic font-medium">
            &ldquo;{p.versiculo}&rdquo;
          </blockquote>
          <p className="text-accent text-xs font-bold mt-2">— {p.referencia}</p>
        </motion.div>
      ))}

      {/* Contacto directo */}
      <div className="mt-6 bg-secondary rounded-xl p-5 border border-border">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
          ¿Preferís hablar con alguien?
        </p>
        <p className="text-sm text-foreground font-medium mb-3">
          Nuestro equipo pastoral está disponible para acompañarte.
        </p>
        <a
          href="tel:+56900000000"
          className="text-accent font-bold text-sm hover:underline"
        >
          +56 9 0000 0000
        </a>
        <p className="text-xs text-muted-foreground mt-1">
          Lunes a viernes, 10:00 – 18:00 hrs
        </p>
      </div>
    </div>
  );
}
