import { MovieDetails } from './MovieDetails';

interface MovieDetailsSectionProps {
  movieId: number;
  setMovieId: (id: number) => void;
}

export const MovieDetailsSection = ({ movieId, setMovieId }: MovieDetailsSectionProps) => {
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