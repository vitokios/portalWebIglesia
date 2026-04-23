"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/escuela-dominical", label: "Escuela Dominical" },
  { href: "/estudios", label: "Estudios" },
  { href: "/avisos", label: "Avisos" },
  { href: "/oracion", label: "Oración" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-church">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo
              variant="horizontal"
              theme={scrolled ? "dark" : "light"}
              size={36}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  scrolled
                    ? "text-foreground hover:text-primary hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/oracion"
              className={cn(
                buttonVariants(),
                "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              )}
            >
              Pedir Oración
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden">
              <span
                className={cn(
                  "flex items-center justify-center w-9 h-9 rounded-md transition-colors",
                  scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Abrir menú</span>
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>
                  <Logo variant="horizontal" theme="dark" size={36} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href="/oracion"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      buttonVariants(),
                      "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold justify-center"
                    )}
                  >
                    Pedir Oración
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
