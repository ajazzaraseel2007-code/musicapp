import type { Song } from "../types/music";
import { StarIcon } from "./icons";

interface TrendingNowProps {
  songs: Song[];
}

export default function TrendingNow({ songs }: TrendingNowProps) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between px-5">
        <h2 className="text-xl font-bold text-white">Trending now</h2>
        <button
          type="button"
          className="text-sm font-medium text-[#A1A1AA] transition-colors hover:text-white"
        >
          See all
        </button>
      </div>

      <ol className="mt-4 flex flex-col gap-5 px-5">
        {songs.map((song, index) => (
          <li key={song.id} className="flex items-center gap-4">
            <span className="w-4 text-base text-[#A1A1AA]">{index + 1}</span>

            <div
              className={`h-14 w-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${song.gradient}`}
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-semibold text-white">
                {song.title}
              </p>
              <p className="truncate text-sm text-[#A1A1AA]">{song.artist}</p>
            </div>

            {song.rating !== undefined && (
              <div className="flex flex-shrink-0 items-center gap-1">
                <StarIcon className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-medium text-white">
                  {song.rating.toFixed(1)}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
