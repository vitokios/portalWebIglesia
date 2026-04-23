"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, BookOpen, Handshake } from "lucide-react";

const valores = [
  {
    icon: BookOpen,
    titulo: "La Palabra",
    descripcion: "La Biblia es nuestra guía y fundamento en todo lo que hacemos y creemos.",
  },
  {
    icon: Heart,
    titulo: "El Amor",
    descripcion: "Amamos a Dios y al prójimo como el mandamiento central de nuestra fe.",
  },
  {
    icon: Users,
    titulo: "La Comunidad",
    descripcion: "Nos necesitamos mutuamente. La iglesia es familia, no solo un edificio.",
  },
  {
    icon: Handshake,
    titulo: "El Servicio",
    descripcion: "Servir al barrio y a los más vulnerables es parte de nuestro llamado.",
  },
];

export function MisionVision() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="container-church">

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-primary rounded-2xl p-8 lg:p-10 overflow-hidden"
          >
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
                Nuestra misión
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Hacer discípulos que transformen su entorno
              </h3>
              <p className="text-white/65 leading-relaxed text-sm">
                Proclamar el evangelio de Jesucristo con poder, formando discípulos
                que vivan su fe en el hogar, el trabajo y la comunidad de Lo Hermida
                y más allá.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-background border border-border rounded-2xl p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
                Nuestra visión
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                Ser una iglesia que impacta generaciones
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Ser una comunidad de fe que inspira a cada generación a conocer a
                Cristo, crecer espiritualmente y servir con amor a Chile y al mundo.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Lo que nos define
          </p>
          <h2 className="text-3xl font-bold text-foreground">Nuestros Valores</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{valor.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {valor.descripcion}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
