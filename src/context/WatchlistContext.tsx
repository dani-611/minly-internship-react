import { useState, type ReactNode } from "react";
import { WatchlistContext } from "./WatchlistRawContext";

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<number[]>([]);

  const toggleWatchlist = (id: number) => {
    setWatchlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, count: watchlist.length }}>
      {children}
    </WatchlistContext.Provider>
  );
}
