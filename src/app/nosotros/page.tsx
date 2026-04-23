import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NosotrosHero } from "./components/NosotrosHero";
import { Historia } from "./components/Historia";
import { MisionVision } from "./components/MisionVision";
import { Pastor } from "./components/Pastor";
import { Equipo } from "./components/Equipo";
import { UneteSection } from "./components/UneteSection";

export const metadata: Metadata = {
  title: "Quiénes Somos | IMP Lo Hermida",
  description:
    "Conocé nuestra historia, misión, visión y el equipo pastoral de la Iglesia Metodista Pentecostal de Lo Hermida.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <NosotrosHero />
        <Historia />
        <MisionVision />
        <Pastor />
        <Equipo />
        <UneteSection />
      </main>
      <Footer />
    </>
  );
}
