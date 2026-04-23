import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NoticiasHero } from "./components/NoticiasHero";
import { NoticiaDestacada } from "./components/NoticiaDestacada";
import { NoticiasGrid } from "./components/NoticiasGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { noticiasQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { type Noticia } from "./data";

export const metadata: Metadata = {
  title: "Noticias | IMP Lo Hermida",
  description:
    "Las últimas noticias de la Iglesia Metodista Pentecostal de Lo Hermida y la familia IUMP.",
};

export default async function NoticiasPage() {
  const { data: rawNoticias } = await sanityFetch({ query: noticiasQuery });

  const noticias: Noticia[] = (rawNoticias ?? []).map((n, i) => ({
    id: i + 1,
    slug: n.slug?.current ?? "",
    titulo: n.titulo ?? "",
    resumen: n.resumen ?? "",
    contenido: "",
    categoria: (n.categoria as Noticia["categoria"]) ?? "Iglesia",
    autor: n.autor ?? "",
    fechaPublicacion: n.fechaPublicacion ?? "",
    imagen: n.imagen ? urlFor(n.imagen).width(800).quality(80).url() : undefined,
    destacada: n.destacada ?? false,
  }));

  const destacada = noticias.find((n) => n.destacada) ?? noticias[0];
  const resto = destacada ? noticias.filter((n) => n.id !== destacada.id) : noticias;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <NoticiasHero />

        <div className="container-church py-12 lg:py-16 space-y-12">
          {destacada && (
            <div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-5">
                Noticia destacada
              </p>
              <NoticiaDestacada noticia={destacada} />
            </div>
          )}

          <div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-1">
                  Más noticias
                </p>
                <h2 className="text-2xl font-bold text-foreground">
                  Toda la actualidad
                </h2>
              </div>
              <p className="text-sm text-muted-foreground hidden sm:block">
                {noticias.length} publicaciones
              </p>
            </div>
            <NoticiasGrid noticias={resto} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
