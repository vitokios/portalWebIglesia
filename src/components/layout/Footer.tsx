import Link from "next/link";
import { MapPin, Phone, Mail, Share2, Play, Camera } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  comunidad: [
    { href: "/eventos", label: "Eventos" },
    { href: "/noticias", label: "Noticias" },
    { href: "/avisos", label: "Avisos" },
    { href: "/escuela-dominical", label: "Escuela Dominical" },
  ],
  recursos: [
    { href: "/oracion", label: "Pedir Oración" },
    { href: "/nosotros", label: "Quiénes Somos" },
    { href: "https://www.iump.cl", label: "IUMP Chile", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-church py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="horizontal" theme="light" size={40} />
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
              Comunidad de fe, esperanza y amor en Cristo Jesús. Parte de la
              Corporación Iglesia Unida Metodista Pentecostal de Chile.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Lo Hermida, Peñalolén, Santiago</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+56 9 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:contacto@iumpLohermida.cl"
                  className="hover:text-accent transition-colors"
                >
                  contacto@iumpLohermida.cl
                </a>
              </div>
            </div>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent">Comunidad</h4>
            <ul className="space-y-2">
              {footerLinks.comunidad.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3 text-accent">Síguenos</h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Iglesia Metodista Pentecostal Lo Hermida. Todos los derechos reservados.</p>
          <p>
            Parte de la{" "}
            <a
              href="https://www.iump.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              IUMP Chile
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
