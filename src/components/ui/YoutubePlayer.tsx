"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, VideoOff } from "lucide-react";

interface Props {
  youtubeId: string;
  title: string;
}

export function YoutubePlayer({ youtubeId, title }: Props) {
  const [error, setError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== "https://www.youtube.com") return;
      try {
        const data = JSON.parse(event.data as string);
        // Códigos: 2=ID inválido, 5=html5, 100=no encontrado/privado, 101/150=embed bloqueado
        if (data.event === "onError") {
          setError(true);
        }
      } catch {
        // no es JSON, ignorar
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (error) {
    return (
      <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center gap-3 p-6">
        <VideoOff className="w-8 h-8 text-white/30" />
        <p className="text-white/60 text-sm text-center leading-snug">
          Este video no está disponible para reproducir aquí.
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Ver en YouTube
        </a>
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&enablejsapi=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  );
}
