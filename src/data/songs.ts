import type { Song } from "../types/music";

// Dummy/local data only — no backend or real music service is involved.
// `gradient` stands in for album artwork per the project's placeholder rule.

export const continueListening: Song[] = [
  {
    id: "espresso",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    gradient: "from-violet-700 via-purple-800 to-[#0D0D12]",
  },
  {
    id: "too-sweet",
    title: "Too Sweet",
    artist: "Hozier",
    gradient: "from-sky-700 via-blue-800 to-[#0D0D12]",
  },
  {
    id: "snooze",
    title: "Snooze",
    artist: "SZA",
    gradient: "from-fuchsia-700 via-pink-800 to-[#0D0D12]",
  },
];

export const trendingNow: Song[] = [
  {
    id: "espresso",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    gradient: "from-violet-700 to-purple-900",
    rating: 4.5,
  },
  {
    id: "beautiful-things",
    title: "Beautiful Things",
    artist: "Benson Boone",
    gradient: "from-blue-700 to-slate-900",
    rating: 4.2,
  },
  {
    id: "too-sweet",
    title: "Too Sweet",
    artist: "Hozier",
    gradient: "from-fuchsia-700 to-rose-900",
    rating: 4.7,
  },
];

// Only a sliver of this section is visible in the prototype (title + "See
// all"), so it's kept minimal — swap in real data when the section is built.
export const forYou: Song[] = [
  {
    id: "snooze",
    title: "Snooze",
    artist: "SZA",
    gradient: "from-fuchsia-700 via-pink-800 to-[#0D0D12]",
  },
  {
    id: "beautiful-things",
    title: "Beautiful Things",
    artist: "Benson Boone",
    gradient: "from-blue-700 via-slate-800 to-[#0D0D12]",
  },
];

export const nowPlaying: Song = continueListening[0];
