import { MovieDescription } from './MovieDescription';

interface MovieDetailsHeaderProps {
  movieId: number;
  setMovieId: (id: number) => void;
}

export const MovieDetailsHeader = ({ movieId, setMovieId }: MovieDetailsHeaderProps) => {
  return (
    <>
      <h2>GET /movies/{movieId}</h2>
      <p>Getting movie</p>
      <div className='flex p-4 w-full justify-center'>
        <MovieDescription selectedMovieId={movieId} onBack={() => setMovieId(NaN)} />
      </div>
    </>
  );
};