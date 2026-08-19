import { useEffect, useState } from 'react';
import { MovieInformation } from './MovieInformation';
import { type MovieDetailsProp } from '../types/MovieDetailsProp';
import { ApiStatus } from '../constants/ApiStatus';

export const MovieDetails = ({ selectedMovieId, onBack }: { selectedMovieId: number; onBack: () => void }) => {
  const [movie, setMovie] = useState<Omit<MovieDetailsProp, 'onBack'> | null>(null);
  const [status, setStatus] = useState<string>(ApiStatus.LOADING);

  useEffect(() => {
    let isMounted = true;

    async function getMovie() {
      try {
        console.log("Fetching single movie...");
        const response = await fetch(`api/movies/${selectedMovieId}`, { method: 'GET' });

        if (!response.ok) {
          if (response.status === 404) {
            console.log("No Movie Found");
            if (isMounted) setStatus(ApiStatus.EMPTY);
            return;
          }
          throw new Error(`Response Status: ${response.status}`);
        }

        console.log("Converting to JSON");
        const result = await response.json();

        console.log("Movie Fetched");
        if (isMounted) {
          setStatus(ApiStatus.DATA);
          setMovie(result);
        }
      } catch (error) {
        console.error((error as Error).message);
        if (isMounted) setStatus(ApiStatus.ERROR);
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
    case ApiStatus.LOADING:
      return <h2 className="text-center w-full text-xl font-semibold my-4">Please wait. We are fetching the movie!</h2>;
    case ApiStatus.EMPTY:
      return <h2 className="text-center w-full text-xl font-semibold my-4">Oops! Looks like there is no such movie</h2>;
    case ApiStatus.ERROR:
      return <h2 className="text-center w-full text-xl font-semibold my-4">Oh no! Something went wrong</h2>;
    case ApiStatus.DATA:
      return movie ? <MovieInformation {...movie} onBack={onBack} /> : null;
    default:
      return null;
  }
};