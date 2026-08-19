import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { ApiStatus } from '../constants/ApiStatus';
import { type MovieListProp } from '../types/MovieListProp';

export const MovieList = ({ onSelectMovie, searchQuery }: MovieListProp) => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState<string>(ApiStatus.LOADING);

  //   const state = useFetch<MovieCardProp[]>('/movies')
  
  // if (state.status === 'loading')
  //   return <Loading />;
  // if (state.status === 'error')
  //   return <ErrorState … />;

  useEffect(() => {
    let isMounted = true;

    async function getMovies() {
      try {
        console.log("Fetching...");
        setStatus(ApiStatus.LOADING);
        const url = searchQuery ? `api/movies?search=${encodeURIComponent(searchQuery)}` : 'api/movies';
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
          console.log("Error Found!");
          throw new Error(`Response Status: ${response.status}`);
        }

        console.log("Converting to JSON");
        const result = await response.json();

        if (!isMounted) return;

        if (!result || result.length === 0) {
          console.log("Empty Movie List");
          setStatus(ApiStatus.EMPTY);
        } else {
          console.log("Movies Fetched");
          setStatus(ApiStatus.DATA);
          setMovies(result);
        }
      } catch (error) {
        console.error((error as Error).message);
        if (isMounted) setStatus(ApiStatus.ERROR);
      }
    }

    getMovies();

    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  switch (status) {
    case ApiStatus.LOADING:
      return <h2 className="text-center col-span-full text-xl font-semibold my-4">Please wait. We are fetching all movies!</h2>;
    case ApiStatus.EMPTY:
      return <h2 className="text-center col-span-full text-xl font-semibold my-4">Oops! Looks like there are no movies</h2>;
    case ApiStatus.ERROR:
      return <h2 className="text-center col-span-full text-xl font-semibold my-4">Oh no! Something went wrong</h2>;
    case ApiStatus.DATA:
      return (
        <>
          {movies.map((movie: any) => (
            <MovieCard 
              key={movie.id} 
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseYear={movie.releaseYear}
              isRecent={movie.isRecent}
              onSelect={onSelectMovie} 
            />
          ))}
        </>
      );
    default:
      return null;
  }
};