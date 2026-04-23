"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ExternalLink, VideoOff } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

let apiLoaded = false;
const readyCallbacks: (() => void)[] = [];

function loadYouTubeAPI(callback: () => void) {
  if (typeof window === "undefined") return;
  if (window.YT?.Player) {
    callback();
    return;
  }
  readyCallbacks.push(callback);
  if (!apiLoaded) {
    apiLoaded = true;
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      readyCallbacks.forEach((cb) => cb());
      readyCallbacks.length = 0;
    };
  }
}

interface Props {
  youtubeId: string;
  title: string;
}

export function YoutubePlayer({ youtubeId, title }: Props) {
  const [error, setError] = useState(false);
  const playerRef = useRef<any>(null);
  const uid = useId().replace(/:/g, "");
  const iframeId = `yt-${uid}`;

  useEffect(() => {
    let destroyed = false;

    // El iframe ya existe en el DOM con enablejsapi=1.
    // YT.Player lo envuelve sin reemplazarlo y dispara onError correctamente.
    loadYouTubeAPI(() => {
      if (destroyed) return;
      playerRef.current = new window.YT.Player(iframeId, {
        events: {
          onError: () => {
            if (!destroyed) setError(true);
          },
        },
      });
    });

    return () => {
      destroyed = true;
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
    };
  }, [iframeId]);

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
      id={iframeId}
      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&enablejsapi=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  );
}
