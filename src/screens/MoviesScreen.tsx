import { Routes, Route, useSearchParams } from 'react-router';
import { Header } from '../components/Header';
import { SearchModule } from '../components/SearchModule';
import { MovieList } from '../components/MovieList';
import { MovieDetailsSection } from '../components/MovieDetailsSection';

export const MoviesScreen = () => {
  const [searchParams] = useSearchParams();
  const activeQuery = searchParams.get('search') || '';

  return (
    <>
      <Header />
      <section id="next-steps">
        <div id="docs">
          <Routes>
            <Route path="/" element={
              <>
                <h2>{activeQuery ? `GET /movies?search=${activeQuery}` : 'GET /movies'}</h2>
                <p>{activeQuery ? 'searching for movies' : 'Getting all movies'}</p>
                <SearchModule />
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 text-left w-full max-w-7xl mx-auto'>
                  <MovieList />
                </div>
              </>
            } />

            <Route path="/movies/:id" element={<MovieDetailsSection />} />
          </Routes>
        </div>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
};
