import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AvisosHero } from "./components/AvisosHero";
import { AvisosLista } from "./components/AvisosLista";
import { sanityFetch } from "@/sanity/lib/live";
import { avisosQuery } from "@/sanity/lib/queries";
import { type Aviso } from "./data";

export const metadata: Metadata = {
  title: "Avisos | IMP Lo Hermida",
  description:
    "Anuncios, recordatorios y comunicados oficiales de la Iglesia Metodista Pentecostal Lo Hermida.",
};

export default async function AvisosPage() {
  const { data: rawAvisos } = await sanityFetch({ query: avisosQuery });

  const avisos: Aviso[] = (rawAvisos ?? []).map((a: Record<string, unknown>, i: number) => ({
    id: i + 1,
    titulo: a.titulo ?? "",
    contenido: a.contenido ?? "",
    tipo: (a.tipo as Aviso["tipo"]) ?? "general",
    fecha: a.fecha ?? "",
    vigenciaHasta: a.vigenciaHasta ?? undefined,
    autor: a.autor ?? undefined,
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AvisosHero />

        <div className="container-church py-12 lg:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-1">
                Tablón de avisos
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Comunicados y Anuncios
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Filtrá por tipo para encontrar lo que necesitás.
              </p>
            </div>
            <AvisosLista avisos={avisos} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
