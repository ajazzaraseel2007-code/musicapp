// Shared types for dummy music data used across the Home page.

export interface Song {
  id: string;
  title: string;
  artist: string;
  /** Tailwind gradient classes used as placeholder album artwork. */
  gradient: string;
  /** Optional rating out of 5, used in the Trending now list. */
  rating?: number;
}
