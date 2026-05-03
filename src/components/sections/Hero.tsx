"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function ChurchSilhouette() {
  return (
    <svg
      viewBox="0 0 1400 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      className="w-full max-w-6xl h-auto"
      style={{ opacity: 0.07 }}
    >
      <path d="M0 520 L0 280 L120 140 L260 260 L380 100 L520 260 L640 180 L760 300 L880 120 L1020 280 L1140 160 L1280 260 L1400 200 L1400 520 Z" fill="white" opacity="0.4" />
      <rect x="480" y="200" width="440" height="320" fill="white" />
      <path d="M460 200 L700 80 L940 200 Z" fill="white" />
      <rect x="520" y="140" width="80" height="200" fill="white" />
      <path d="M520 140 L560 80 L600 140 Z" fill="white" />
      <rect x="800" y="140" width="80" height="200" fill="white" />
      <path d="M800 140 L840 80 L880 140 Z" fill="white" />
      <rect x="692" y="40" width="16" height="60" fill="white" />
      <rect x="672" y="56" width="56" height="14" fill="white" />
      <path d="M640 520 L640 380 Q700 340 760 380 L760 520 Z" fill="none" stroke="white" strokeWidth="3" opacity="0.6" />
      <path d="M550 280 L550 360 Q575 340 600 360 L600 280 Z" fill="none" stroke="white" strokeWidth="2.5" opacity="0.5" />
      <path d="M800 280 L800 360 Q825 340 850 360 L850 280 Z" fill="none" stroke="white" strokeWidth="2.5" opacity="0.5" />
      <rect x="600" y="500" width="200" height="12" fill="white" opacity="0.6" />
      <rect x="580" y="512" width="240" height="8" fill="white" opacity="0.4" />
      <rect x="200" y="340" width="260" height="180" fill="white" opacity="0.5" />
      <path d="M180 340 L330 240 L480 340 Z" fill="white" opacity="0.5" />
      <rect x="940" y="340" width="260" height="180" fill="white" opacity="0.5" />
      <path d="M920 340 L1070 240 L1220 340 Z" fill="white" opacity="0.5" />
    </svg>
  );
}

function LogoMark() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Círculo exterior girando */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative flex items-center justify-center"
        style={{
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "2px solid oklch(0.47 0.22 25 / 0.45)",
        }}
      >
        {/* Círculo interior punteado */}
        <div
          className="absolute"
          style={{
            inset: 12,
            borderRadius: "50%",
            border: "1px solid oklch(0.72 0.12 240 / 0.25)",
          }}
        />

        {/* SVG counter-rotating */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Círculos decorativos */}
            <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 8" />
            <circle cx="100" cy="100" r="78" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            {/* Páginas de Biblia / ondas */}
            <path d="M28 128 Q64 100 100 110 Q136 100 172 128" stroke="rgba(120,190,255,0.9)" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M32 140 Q65 112 100 122 Q135 112 168 140" stroke="rgba(120,190,255,0.55)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M36 150 Q66 124 100 132 Q134 124 164 150" stroke="rgba(120,190,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Cruz */}
            <rect x="92" y="36" width="16" height="78" rx="4" fill="white" />
            <rect x="66" y="62" width="68" height="16" rx="4" fill="white" />
            <rect x="96" y="36" width="4" height="78" rx="2" fill="rgba(0,0,0,0.1)" />
            <rect x="66" y="66" width="68" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
            {/* Llama */}
            <path d="M100 30 C104 22 108 16 100 8 C92 16 96 22 100 30Z" fill="#f5a623" />
            <path d="M100 28 C102.5 22 105 17.5 100 12 C95 17.5 97.5 22 100 28Z" fill="rgba(255,255,255,0.7)" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center pt-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.02 240) 0%, oklch(0.20 0.06 250) 40%, oklch(0.25 0.08 260) 70%, oklch(0.18 0.04 230) 100%)",
      }}
    >
      {/* Patrón de grilla */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)",
        }}
      />

      {/* Glow rojo */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, oklch(0.47 0.22 25 / 0.22) 0%, transparent 70%)",
          top: "50%",
          left: "58%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Silueta iglesia */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none z-0">
        <ChurchSilhouette />
      </div>

      {/* Contenido */}
      <div className="container-church relative z-10 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">

          {/* Texto */}
          <div>
            {/* Eyebrow */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-3 mb-7"
              style={{ color: "oklch(0.72 0.12 240)" }}
            >
              <span className="block w-8 h-px bg-current" />
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase">
                Iglesia Unida Metodista Pentecostal
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-bold leading-[1.08] mb-6 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(40px, 5.5vw, 72px)",
              }}
            >
              Una comunidad{" "}
              <em
                className="not-italic"
                style={{ color: "oklch(0.72 0.18 25)" }}
              >
                viva
              </em>{" "}
              en Lo Hermida
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.3)}
              className="mb-10 leading-relaxed"
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "rgba(255,255,255,0.68)",
                maxWidth: 480,
              }}
            >
              Bienvenido a un lugar de fe, esperanza y comunidad. Aquí
              encontrarás familia, propósito y la presencia de Dios.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center px-9 py-4 text-[13px] font-bold tracking-[0.06em] uppercase rounded-[4px] transition-all duration-250"
                style={{
                  background: "oklch(0.47 0.22 25)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "oklch(0.40 0.22 25)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "oklch(0.47 0.22 25)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Conócenos
              </Link>
              <Link
                href="/eventos"
                className="inline-flex items-center px-9 py-4 text-[13px] font-medium tracking-[0.06em] uppercase rounded-[4px] transition-all duration-250"
                style={{
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                }}
              >
                Ver Eventos
              </Link>
            </motion.div>
          </div>

          {/* Logo visual — solo desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <LogoMark />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
