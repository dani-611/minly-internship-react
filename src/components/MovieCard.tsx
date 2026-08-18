import { Card, CardHeader, CardFooter } from "@heroui/react";

type MovieCardProp = {
  id: number;
  title: string;
  posterUrl: string;
  releaseYear: number;
  isRecent: boolean;
  onSelect: (id: number) => void;
};

export const MovieCard = (movieCardProp: MovieCardProp) => {
  return (
    <Card 
      onClick={() => movieCardProp.onSelect(movieCardProp.id)}
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
      <div className="flex flex-1 flex-col gap-3">
        <CardHeader className="flex-col items-start gap-1">
          <h4 className="text-large font-bold pe-8">{movieCardProp.title}</h4>
        </CardHeader>
        <CardFooter className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-default-400">{movieCardProp.releaseYear}</span>
            {movieCardProp.isRecent && (
              <span className="text-xs text-default-400">Recently Added!</span>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};