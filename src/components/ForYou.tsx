import type { Song } from "../types/music";

interface ForYouProps {
  songs: Song[];
}

// Only the "For you" title and "See all" are visible in the prototype
// (the section is cut off by the player bar), so this mirrors
// ContinueListening in a minimal form. Safe to delete or expand later.
export default function ForYou({ songs }: ForYouProps) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between px-5">
        <h2 className="text-xl font-bold text-white">For you</h2>
        <button
          type="button"
          className="text-sm font-medium text-[#A1A1AA] transition-colors hover:text-white"
        >
          See all
        </button>
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {songs.map((song) => (
          <div key={song.id} className="w-36 flex-shrink-0">
            <div
              className={`h-36 w-36 rounded-2xl bg-gradient-to-br ${song.gradient}`}
            />
            <p className="mt-2 truncate text-base font-semibold text-white">
              {song.title}
            </p>
            <p className="truncate text-sm text-[#A1A1AA]">{song.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
