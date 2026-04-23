import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iglesia Metodista Pentecostal | Lo Hermida",
  description:
    "Bienvenido a la Iglesia Metodista Pentecostal de Lo Hermida. Comunidad de fe, esperanza y amor en Cristo Jesús.",
  keywords: ["iglesia", "metodista pentecostal", "Lo Hermida", "IUMP", "fe", "comunidad"],
  openGraph: {
    title: "Iglesia Metodista Pentecostal | Lo Hermida",
    description: "Comunidad de fe, esperanza y amor en Cristo Jesús.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
