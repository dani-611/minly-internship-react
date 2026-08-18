import { MovieDetails } from './MovieDetails';
import { type MovieDetailsSectionProp } from '../types/MovieDetailsSectionProp';

export const MovieDetailsSection = ({ movieId, setMovieId }: MovieDetailsSectionProp) => {
  return (
    <>
      <h2>GET /movies/{movieId}</h2>
      <p>Getting movie</p>
      <div className='flex p-4 w-full justify-center'>
        <MovieDetails selectedMovieId={movieId} onBack={() => setMovieId(NaN)} />
      </div>
    </>
  );
};