import { useSearchParams } from 'react-router';
import { MovieCard } from './MovieCard';
import { useFetch } from '../hooks/useFetch';
import { ApiStatus } from '../constants/ApiStatus';
import type { MovieCardProp } from '../types/MovieCardProp';

export const MovieList = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const url = searchQuery 
    ? `api/movies?search=${encodeURIComponent(searchQuery)}` 
    : 'api/movies';
    
  const { status, data: movies } = useFetch<MovieCardProp[]>(url);

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
          {movies?.map((movie: MovieCardProp) => (
            <MovieCard key={movie.id} {...movie}/>
          ))}
        </>
      );
    default:
      return null;
  }
};
