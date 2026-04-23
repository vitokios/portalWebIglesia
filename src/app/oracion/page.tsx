import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OracionHero } from "./components/OracionHero";
import { FormularioPeticion } from "./components/FormularioPeticion";
import { PromesasOracion } from "./components/PromesasOracion";

export const metadata: Metadata = {
  title: "Oración | IMP Lo Hermida",
  description:
    "Enviá tu petición de oración a la comunidad de la Iglesia Metodista Pentecostal Lo Hermida. Oramos juntos, creemos juntos.",
};

export default function OracionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <OracionHero />

        <div className="container-church py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 max-w-5xl mx-auto">

            {/* Formulario */}
            <div>
              <div className="mb-8">
                <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-1">
                  Formulario
                </p>
                <h2 className="text-2xl font-bold text-foreground">
                  Enviá tu Petición
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Tu petición llegará directamente al equipo pastoral y a los intercesores de la iglesia.
                </p>
              </div>
              <FormularioPeticion />
            </div>

            {/* Sidebar: versículos + contacto */}
            <div className="lg:pt-16">
              <PromesasOracion />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
