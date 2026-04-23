"use client";

import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Slides ───────────────────────────────────────────────────────────────────
// Para reemplazar: cambiá `src` por la URL o import de tu foto real.
// El `alt` y `label` también deberían actualizarse.
const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1600&q=80",
    alt: "Congregación en culto dominical",
    label: "Cada domingo nos reunimos a adorar",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80",
    alt: "Comunidad en oración",
    label: "Unidos en oración y fe",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1510027580516-8b4a1b2afa34?w=1600&q=80",
    alt: "Escuela dominical niños",
    label: "Formando la próxima generación",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1600&q=80",
    alt: "Actividad comunitaria de la iglesia",
    label: "Comunidad que sirve con amor",
  },
];
// ──────────────────────────────────────────────────────────────────────────────

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── Carrusel de fondo ── */}
      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full" style={{ height: "100vh" }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: selectedIndex === index ? 1.06 : 1,
                }}
                transition={{ duration: 6, ease: "easeInOut" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Overlays ── */}
      {/* Gradiente base oscuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
      {/* Gradiente lateral para lectura */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
      {/* Línea dorada superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-20" />

      {/* ── Contenido ── */}
      <div className="relative z-20 container-church min-h-screen flex flex-col justify-center pt-20 pb-24">
        <div className="max-w-3xl">
          {/* Label de slide activo */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${selectedIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              {slides[selectedIndex].label}
            </motion.p>
          </AnimatePresence>

          {/* Eyebrow fijo */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
              Iglesia Metodista Pentecostal · IUMP
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Bienvenido a{" "}
            <span
              className="block text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lo Hermida
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Una comunidad de fe, esperanza y amor en Cristo Jesús.
            Parte de la familia IUMP — juntos creciendo en la Palabra.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/nosotros"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-12 px-8 group"
              )}
            >
              Conócenos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/eventos"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm font-semibold text-base h-12 px-8"
              )}
            >
              Ver Eventos
            </Link>
          </div>
        </div>

        {/* ── Dots de navegación ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
              className={cn(
                "transition-all duration-400 rounded-full",
                selectedIndex === index
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
