import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EstudiosHero } from "./components/EstudiosHero";
import { VideoDestacado } from "./components/VideoDestacado";
import { VideosGrid } from "./components/VideosGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { videosQuery } from "@/sanity/lib/queries";
import { extractYoutubeId, type VideoEstudio } from "./data";

export const metadata: Metadata = { 
  title: "Estudios Bíblicos | IMP Lo Hermida",
  description:
    "Cápsulas bíblicas, predicaciones y estudios preparados por los hermanos de la Iglesia Metodista Pentecostal Lo Hermida.",
};

export default async function EstudiosPage() {
  const { data: rawVideos } = await sanityFetch({ query: videosQuery });

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

  const videoDestacado = videos.find((v) => v.destacado);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <EstudiosHero />

        <div className="container-church py-12 lg:py-16 space-y-14">
          {videoDestacado && (
            <VideoDestacado video={videoDestacado} />
          )}

          <div>
            <div className="mb-6">
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-1">
                Biblioteca
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Todos los Videos
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Filtrá por tipo de contenido para encontrar lo que buscás.
              </p>
            </div>
            <VideosGrid videos={videos} excluirId={videoDestacado?.id} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
