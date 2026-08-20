import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistRawContext";

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be within a WatchlistProvider");
  }
  return context;
}
