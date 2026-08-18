import { useEffect, useState } from 'react';
import { MovieInformation } from './MovieInformation';

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

export const MovieDetails = ({ selectedMovieId, onBack }: { selectedMovieId: number; onBack: () => void }) => {
  const [movie, setMovie] = useState<Omit<MovieDetailsProp, 'onBack'> | null>(null);
  const [status, setStatus] = useState<string>("LOADING");

  useEffect(() => {
    let isMounted = true;

    async function getMovie() {
      try {
        console.log("Fetching single movie...");
        const response = await fetch(`api/movies/${selectedMovieId}`, { method: 'GET' });

        if (!response.ok) {
          if (response.status === 404) {
            console.log("No Movie Found");
            if (isMounted) setStatus("EMPTY");
            return;
          }
          throw new Error(`Response Status: ${response.status}`);
        }

        console.log("Converting to JSON");
        const result = await response.json();

        console.log("Movie Fetched");
        if (isMounted) {
          setStatus("DATA");
          setMovie(result);
        }
      } catch (error) {
        console.error((error as Error).message);
        if (isMounted) setStatus("ERROR");
      }
    }

    getMovie();

    return () => {
      isMounted = false;
    };
  }, [selectedMovieId]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  switch (status) {
    case "LOADING":
      return <h2 className="text-center w-full text-xl font-semibold my-4">Please wait. We are fetching the movie!</h2>;
    case "EMPTY":
      return <h2 className="text-center w-full text-xl font-semibold my-4">Oops! Looks like there is no such movie</h2>;
    case "ERROR":
      return <h2 className="text-center w-full text-xl font-semibold my-4">Oh no! Something went wrong</h2>;
    case "DATA":
      return movie ? <MovieInformation {...movie} onBack={onBack} /> : null;
    default:
      return null;
  }
};