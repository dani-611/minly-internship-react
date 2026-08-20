import { Card, CardHeader, CardFooter, Button } from "@heroui/react";
import { type MovieCardProp } from "../types/MovieCardProp";
import { useWatchlist } from "../hooks/useWatchlist";
import { useNavigate } from "react-router";

export const MovieCard = (movieCardProp: MovieCardProp) => {
  const { watchlist, toggleWatchlist } = useWatchlist();
  const navigate = useNavigate();
  const isMarked = watchlist.includes(movieCardProp.id);

  return (
    <Card 
      onClick={() => navigate(`/movies/${movieCardProp.id}`)}
      className="flex flex-col items-stretch dark text-foreground bg-background mt-5 h-full cursor-pointer" 
    >
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-2xl">
        <img 
          alt={movieCardProp.title} 
          src={movieCardProp.posterUrl} 
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none" 
          loading="lazy" 
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <CardHeader className="flex-col items-start gap-1 p-0">
          <h4 className="text-large font-bold pe-8">{movieCardProp.title}</h4>
        </CardHeader>
        <CardFooter className="mt-auto flex w-full items-center justify-between p-0">
          <div className="flex flex-col">
            <span className="text-xs text-default-400">{movieCardProp.releaseYear}</span>
            {movieCardProp.isRecent && (
              <span className="text-xs text-default-400">Recently Added!</span>
            )}
          </div>
          <Button 
            size="sm" 
            variant={isMarked ? "primary" : "outline"} // Updated to valid type choices from error signature
            onClick={(e) => {
              e.stopPropagation(); 
              toggleWatchlist(movieCardProp.id);
            }}
          >
            {isMarked ? "★ Saved" : "☆ Watch"}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
