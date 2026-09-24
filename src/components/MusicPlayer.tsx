import { useState } from "react";
import type { Song } from "../types/music";
import { PauseIcon } from "./icons";

interface MusicPlayerProps {
  song: Song;
  /** Playback progress from 0 to 1. Purely visual — no real audio. */
  progress?: number;
}

export default function MusicPlayer({ song, progress = 0.35 }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="border-t border-white/5 bg-[#181820]">
      <div className="h-1 w-full bg-white/10">
        <div
          className="h-full bg-[#8B5CF6]"
          style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
        />
      </div>

      <div className="flex items-center gap-3 px-5 py-3">
        <div
          className={`h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br ${song.gradient}`}
        />

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {song.title}
          </p>
          <p className="truncate text-xs text-[#A1A1AA]">{song.artist}</p>
        </div>

        <button
          type="button"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={() => setIsPlaying((p) => !p)}
          className="flex-shrink-0 text-white transition-colors hover:text-[#C084FC]"
        >
          <PauseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
