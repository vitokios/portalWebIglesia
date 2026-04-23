"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Lock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Categoria = "salud" | "familia" | "trabajo" | "espiritual" | "duelo" | "otro";

const categorias: { valor: Categoria; label: string }[] = [
  { valor: "salud", label: "Salud" },
  { valor: "familia", label: "Familia" },
  { valor: "trabajo", label: "Trabajo y finanzas" },
  { valor: "espiritual", label: "Crecimiento espiritual" },
  { valor: "duelo", label: "Duelo y pérdida" },
  { valor: "otro", label: "Otro" },
];

type Estado = "idle" | "enviando" | "enviado";

export function FormularioPeticion() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [anonimo, setAnonimo] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    categoria: "" as Categoria | "",
    peticion: "",
    compartirPublico: false,
  });

  const camposValidos =
    form.peticion.trim().length >= 10 &&
    form.categoria !== "" &&
    (anonimo || form.nombre.trim().length >= 2);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!camposValidos) return;
    setEstado("enviando");
    // Simulación — reemplazar por llamada real a API o Sanity
    await new Promise((r) => setTimeout(r, 1400));
    setEstado("enviado");
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {estado === "enviado" ? (
          <motion.div
            key="confirmacion"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center py-12 gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Tu petición fue recibida
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                Nuestra comunidad estará orando por vos. &ldquo;El Señor está cerca de los que le invocan.&rdquo; — Salmo 145:18
              </p>
            </div>
            <button
              onClick={() => {
                setEstado("idle");
                setForm({ nombre: "", categoria: "", peticion: "", compartirPublico: false });
                setAnonimo(false);
              }}
              className={cn(buttonVariants({ variant: "outline" }), "mt-2")}
            >
              Enviar otra petición
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="formulario"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Nombre */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-foreground">
                  Tu nombre
                </label>
                <button
                  type="button"
                  onClick={() => setAnonimo((v) => !v)}
                  className={cn(
                    "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors",
                    anonimo
                      ? "bg-primary/10 border-primary/20 text-primary font-semibold"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  <Lock className="w-3 h-3" />
                  {anonimo ? "Anónimo activado" : "Enviar anónimamente"}
                </button>
              </div>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                disabled={anonimo || estado === "enviando"}
                placeholder={anonimo ? "Tu petición será anónima" : "Ej: María González"}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition disabled:opacity-50 disabled:bg-secondary"
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Categoría de la petición
              </label>
              <div className="flex flex-wrap gap-2">
                {categorias.map(({ valor, label }) => (
                  <button
                    key={valor}
                    type="button"
                    disabled={estado === "enviando"}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        categoria: prev.categoria === valor ? "" : valor,
                      }))
                    }
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-sm border transition-all",
                      form.categoria === valor
                        ? "bg-primary text-white border-primary font-semibold"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Petición */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Tu petición de oración
              </label>
              <textarea
                name="peticion"
                value={form.peticion}
                onChange={handleChange}
                disabled={estado === "enviando"}
                rows={5}
                placeholder="Contanos lo que tenés en el corazón. Podés ser tan específico o general como quieras..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none disabled:opacity-50"
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">
                {form.peticion.length} caracteres
              </p>
            </div>

            {/* Compartir público */}
            <label className="flex items-start gap-3 cursor-pointer select-none group">
              <input
                type="checkbox"
                name="compartirPublico"
                checked={form.compartirPublico}
                onChange={handleChange}
                disabled={estado === "enviando"}
                className="mt-0.5 w-4 h-4 rounded border-border accent-primary"
              />
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Compartir con la congregación
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Tu petición (sin datos personales) podrá ser vista por otros hermanos para que oren.
                </p>
              </div>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!camposValidos || estado === "enviando"}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full gap-2 font-semibold",
                !camposValidos && "opacity-50 cursor-not-allowed"
              )}
            >
              {estado === "enviando" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando petición…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Petición de Oración
                </>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Tu información es confidencial y solo será compartida con el equipo pastoral.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
