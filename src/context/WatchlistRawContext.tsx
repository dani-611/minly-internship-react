import { createContext } from "react";

export type WatchlistContextType = {
  watchlist: number[];
  toggleWatchlist: (id: number) => void;
  count: number;
};

export const WatchlistContext = createContext<WatchlistContextType | null>(null);
