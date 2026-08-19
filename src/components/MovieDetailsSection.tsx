import { MovieDetails } from './MovieDetails';
import { type MovieDetailsSectionProp } from '../types/MovieDetailsSectionProp';
import { useParams } from 'react-router';

//TODO: needs works

export const MovieDetailsSection = ({ movieId, setMovieId }: MovieDetailsSectionProp) => {
  //const { id } = useParams();
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