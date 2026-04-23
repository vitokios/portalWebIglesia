import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EventosPreview } from "@/components/sections/EventosPreview";
import { NoticiasPreview } from "@/components/sections/NoticiasPreview";
import { EstudiosPreview } from "@/components/sections/EstudiosPreview";
import { VersiculoDelDia } from "@/components/sections/VersiculoDelDia";
import { AvisosSection } from "@/components/sections/AvisosSection";
import { OracionSection } from "@/components/sections/OracionSection";
import { sanityFetch } from "@/sanity/lib/live";
import { eventosQuery, noticiasQuery, videosQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { type Evento } from "@/app/eventos/data";
import { type Noticia } from "@/app/noticias/data";
import { extractYoutubeId, type VideoEstudio } from "@/app/estudios/data";

export default async function HomePage() {
  const [
    { data: rawEventos },
    { data: rawNoticias },
    { data: rawVideos },
  ] = await Promise.all([
    sanityFetch({ query: eventosQuery }),
    sanityFetch({ query: noticiasQuery }),
    sanityFetch({ query: videosQuery }),
  ]);

  const eventos: Evento[] = (rawEventos ?? []).map((e: Record<string, unknown>, i: number) => ({
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

  const noticias: Noticia[] = (rawNoticias ?? []).map((n: Record<string, unknown>, i: number) => ({
    id: i + 1,
    slug: (n.slug as { current?: string })?.current ?? "",
    titulo: n.titulo ?? "",
    resumen: n.resumen ?? "",
    contenido: "",
    categoria: (n.categoria as Noticia["categoria"]) ?? "Iglesia",
    autor: n.autor ?? "",
    fechaPublicacion: n.fechaPublicacion ?? "",
    imagen: n.imagen ? urlFor(n.imagen).width(600).quality(80).url() : undefined,
    destacada: n.destacada ?? false,
  }));

  const videos: VideoEstudio[] = (rawVideos ?? []).map((v: Record<string, unknown>, i: number) => ({
    id: i + 1,
    youtubeId: extractYoutubeId(String(v.youtubeId ?? "")),
    titulo: v.titulo ?? "",
    descripcion: v.descripcion ?? "",
    predicador: v.predicador ?? "",
    categoria: (v.categoria as VideoEstudio["categoria"]) ?? "capsula",
    fecha: v.fecha ?? "",
    duracion: v.duracion ?? "",
    pasaje: v.pasaje ?? undefined,
    destacado: v.destacado ?? false,
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <EventosPreview eventos={eventos} />
        <NoticiasPreview noticias={noticias} />
        <VersiculoDelDia />
        <EstudiosPreview videos={videos} />
        <AvisosSection />
        <OracionSection />
      </main>
      <Footer />
    </>
  );
}
