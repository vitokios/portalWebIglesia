import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventosHero } from "./components/EventosHero";
import { EventoDestacado } from "./components/EventoDestacado";
import { EventosGrid } from "./components/EventosGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { eventosQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { type Evento, categoriaBadgeStyle } from "./data";

export const metadata: Metadata = {
  title: "Eventos | IMP Lo Hermida",
  description:
    "Conocé todos los eventos, cultos, retiros y actividades de la Iglesia Metodista Pentecostal de Lo Hermida.",
};

export default async function EventosPage() {
  const { data: rawEventos } = await sanityFetch({ query: eventosQuery });

  // Normalizar datos de Sanity al shape que esperan los componentes
  const eventos: Evento[] = (rawEventos ?? []).map((e, i) => ({
    id: i + 1,
    titulo: e.titulo ?? "",
    descripcion: e.descripcion ?? "",
    fecha: e.fecha ?? "",
    hora: e.hora ?? "",
    horaFin: e.horaFin ?? undefined,
    lugar: e.lugar ?? "",
    categoria: (e.categoria as Evento["categoria"]) ?? "Culto",
    destacado: e.destacado ?? false,
    imagen: e.imagen ? urlFor(e.imagen).width(800).quality(80).url() : undefined,
  }));

  const eventoDestacado = eventos.find((e) => e.destacado) ?? eventos[0];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <EventosHero />

        <div className="container-church py-12 lg:py-16 space-y-12">
          {eventoDestacado && (
            <div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-5">
                Próximo evento destacado
              </p>
              <EventoDestacado evento={eventoDestacado} />
            </div>
          )}

          <div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-1">
                  Agenda completa
                </p>
                <h2 className="text-2xl font-bold text-foreground">
                  Todos los eventos
                </h2>
              </div>
              <p className="text-sm text-muted-foreground hidden sm:block">
                {eventos.length} evento{eventos.length !== 1 ? "s" : ""} próximo{eventos.length !== 1 ? "s" : ""}
              </p>
            </div>
            <EventosGrid eventos={eventos} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
