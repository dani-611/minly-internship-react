import { Button } from '@heroui/react';

type MovieDetailsProp = {
  id: number;
  title: string;
  releaseYear: number;
  posterUrl: string | null;
  overview: string | null;
  runtimeMinutes: number | null;
  trailerUrl: string | null;
  language: string | null;
  isRecent: boolean;
  onBack: () => void;
};

export const MovieInformation = (movieDetailsProp: MovieDetailsProp) => {
  function formatDate(runtimeMinutes?: number | null) {
    if (!runtimeMinutes) {
      return 'Duration Not Specified!';
    }
    const hour = Math.floor(runtimeMinutes / 60);
    const minutes = Math.ceil(((runtimeMinutes / 60) - hour) * 60);
    return hour !== 0 ? (minutes !== 0 ? `${hour}h ${minutes}m` : `${hour}h`) : `${minutes}m`;
  }

  return (
    <div className="col-span-full bg-neutral-900 p-6 rounded-2xl flex flex-col md:flex-row gap-6 text-white w-full">
      {movieDetailsProp.posterUrl && (
        <img 
          src={movieDetailsProp.posterUrl} 
          alt={movieDetailsProp.title} 
          className="w-full md:w-64 h-96 object-cover rounded-xl shadow-lg shrink-0" 
        />
      )}
      <div className="flex flex-col justify-between flex-1 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-1">{movieDetailsProp.title}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {movieDetailsProp.releaseYear} • {formatDate(movieDetailsProp.runtimeMinutes)} • {movieDetailsProp.language?.toUpperCase() || "Language Not Chosen!"}
          </p>
          <p className="text-base text-gray-300 leading-relaxed">{movieDetailsProp.overview || "No overview available."}</p>
          {movieDetailsProp.isRecent && (
            <span className="inline-block mt-3 bg-red-600 text-xs font-semibold px-2 py-1 rounded">New Release</span>
          )}
        </div>
        <div className="flex gap-4 mt-4">
          {movieDetailsProp.trailerUrl && (
            <Button 
              as="a" 
              href={movieDetailsProp.trailerUrl || `https://www.google.com/search?q=${encodeURIComponent(movieDetailsProp.title)}+movie+trailer`} 
              target="_blank" 
              rel="noreferrer" 
              color="primary"
            >
              Watch Trailer
            </Button>
          )}
          <Button onClick={movieDetailsProp.onBack}>
            Back to List
          </Button>
        </div>
      </div>
    </div>
  );
};