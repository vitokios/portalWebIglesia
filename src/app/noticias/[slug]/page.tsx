import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { noticiaBySlugQuery, slugsNoticiasQuery, noticiasQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { categoriaBadgeStyle, formatearFechaNoticia, type Noticia } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = await client.fetch(slugsNoticiasQuery);
  return (data ?? [])
    .filter((item: Record<string, unknown>) => item.slug)
    .map((item: Record<string, unknown>) => ({ slug: item.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: noticia } = await sanityFetch({
    query: noticiaBySlugQuery,
    params: { slug },
  });
  if (!noticia) return { title: "Noticia no encontrada" };
  return {
    title: `${noticia.titulo} | IMP Lo Hermida`,
    description: noticia.resumen ?? "",
  };
}

export default async function NoticiaDetallePage({ params }: Props) {
  const { slug } = await params;

  const [{ data: rawNoticia }, { data: rawNoticias }] = await Promise.all([
    sanityFetch({ query: noticiaBySlugQuery, params: { slug } }),
    sanityFetch({ query: noticiasQuery }),
  ]);

  if (!rawNoticia) notFound();

  const imagenUrl = rawNoticia.imagen
    ? urlFor(rawNoticia.imagen).width(1200).quality(85).url()
    : null;

  // Noticias relacionadas (misma categoría, excluyendo la actual)
  const relacionadas: Noticia[] = (rawNoticias ?? [])
    .filter((n: Record<string, unknown>) => (n.slug as Record<string, string>)?.current !== slug && n.categoria === rawNoticia.categoria)
    .slice(0, 3)
    .map((n: Record<string, unknown>, i: number) => ({
      id: i + 1,
      slug: (n.slug as { current?: string })?.current ?? "",
      titulo: n.titulo ?? "",
      resumen: n.resumen ?? "",
      contenido: "",
      categoria: (n.categoria as Noticia["categoria"]) ?? "Iglesia",
      autor: n.autor ?? "",
      fechaPublicacion: n.fechaPublicacion ?? "",
      imagen: n.imagen ? urlFor(n.imagen).width(200).quality(75).url() : undefined,
    }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
          {imagenUrl ? (
            <Image
              src={imagenUrl}
              alt={rawNoticia.titulo ?? ""}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-church-dark" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 container-church pb-8">
            <Badge
              variant="outline"
              className={`mb-3 text-xs bg-white/90 backdrop-blur-sm ${
                categoriaBadgeStyle[(rawNoticia.categoria as Noticia["categoria"]) ?? "Iglesia"]
              }`}
            >
              {rawNoticia.categoria}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {rawNoticia.titulo}
            </h1>
          </div>
        </div>

        {/* Contenido */}
        <div className="container-church py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <article>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-accent" />
                  {rawNoticia.autor}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent" />
                  {formatearFechaNoticia(rawNoticia.fechaPublicacion ?? "")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-accent" />
                  {rawNoticia.categoria}
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-medium border-l-4 border-accent pl-5 mb-8 italic">
                {rawNoticia.resumen}
              </p>

              {/* Portable Text — contenido rico de Sanity */}
              <div className="prose prose-slate max-w-none
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-headings:text-foreground prose-headings:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground">
                {rawNoticia.contenido && (
                  <PortableText value={rawNoticia.contenido} />
                )}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <Link
                  href="/noticias"
                  className={cn(buttonVariants({ variant: "outline" }), "group")}
                >
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Volver a noticias
                </Link>
              </div>
            </article>

            <aside className="space-y-8">
              {relacionadas.length > 0 && (
                <div>
                  <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                    Noticias relacionadas
                  </h3>
                  <div className="space-y-4">
                    {relacionadas.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/noticias/${rel.slug}`}
                        className="group flex gap-3 p-3 rounded-lg border border-border hover:border-accent/30 hover:bg-secondary/50 transition-all duration-200"
                      >
                        {rel.imagen && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image src={rel.imagen} alt={rel.titulo} fill className="object-cover" sizes="64px" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {rel.titulo}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatearFechaNoticia(rel.fechaPublicacion)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-primary rounded-xl p-6 text-center">
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">
                  ¿Necesitás oración?
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Estamos aquí para interceder por vos.
                </p>
                <Link
                  href="/oracion"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-accent text-accent-foreground hover:bg-accent/90 w-full font-semibold"
                  )}
                >
                  Pedir Oración
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
