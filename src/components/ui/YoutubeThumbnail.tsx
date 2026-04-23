"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface Props {
  youtubeId: string;
  quality?: "mqdefault" | "hqdefault" | "maxresdefault";
}

export function YoutubeThumbnail({ youtubeId, quality = "mqdefault" }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-primary flex items-center justify-center">
        <Play className="w-10 h-10 text-white/20" />
      </div>
    );
  }

  return (
    <img
      src={`https://img.youtube.com/vi/${youtubeId}/${quality}.jpg`}
      alt=""
      onError={() => setError(true)}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
