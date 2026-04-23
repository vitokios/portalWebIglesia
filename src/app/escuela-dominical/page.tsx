import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EscuelaHero } from "./components/EscuelaHero";
import { ProximaLeccion } from "./components/ProximaLeccion";
import { SeriesEstudio } from "./components/SeriesEstudio";
import { sanityFetch } from "@/sanity/lib/live";
import { leccionesQuery } from "@/sanity/lib/queries";
import { type LeccionDominical } from "./data";

export const metadata: Metadata = {
  title: "Escuela Dominical | IMP Lo Hermida",
  description:
    "Estudio bíblico semanal para toda la congregación. Versículos, pasajes y enseñanzas cada domingo a las 09:30 AM.",
};

export default async function EscuelaDominicalPage() {
  const { data: rawLecciones } = await sanityFetch({ query: leccionesQuery });

  const lecciones: LeccionDominical[] = (rawLecciones ?? []).map((l, i) => ({
    id: i + 1,
    titulo: l.titulo ?? "",
    serie: l.serie ?? "",
    fecha: l.fecha ?? "",
    pasaje: l.pasaje ?? "",
    versiculo: l.versiculo ?? "",
    versiculoRef: l.versiculoRef ?? "",
    maestro: l.maestro ?? "",
    resumen: l.resumen ?? "",
    objetivos: l.objetivos ?? undefined,
    esSiguiente: l.esSiguiente ?? false,
  }));

  const leccionSiguiente = lecciones.find((l) => l.esSiguiente);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <EscuelaHero />

        <div className="container-church py-12 lg:py-16 space-y-14">
          {leccionSiguiente && (
            <ProximaLeccion leccion={leccionSiguiente} />
          )}

          <div>
            <div className="mb-6">
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-1">
                Programa completo
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Todas las Lecciones
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Hacé clic en cada lección para ver el versículo, el resumen y los objetivos.
              </p>
            </div>
            <SeriesEstudio lecciones={lecciones} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
