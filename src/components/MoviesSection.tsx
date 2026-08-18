import { MovieList } from './MovieList';

interface MoviesSectionProps {
  searchQuery: string;
  setMovieId: (id: number) => void;
}

export const MoviesSection = ({ searchQuery, setMovieId }: MoviesSectionProps) => {
  return (
    <>
      <h2>{searchQuery ? `GET /movies?search=${searchQuery}` : 'GET /movies'}</h2>
      <p>{searchQuery ? 'searching for movies' : 'Getting all movies'}</p>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 text-left w-full max-w-7xl mx-auto'>
        <MovieList onSelectMovie={(id) => setMovieId(id)} searchQuery={searchQuery} />
      </div>
    </>
  );
};