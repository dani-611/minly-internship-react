import React, { useState } from 'react';
import { Header } from '../components/Header';
import { SearchModule } from '../components/SearchModule';
import { MoviesSectionHeader } from '../components/MoviesSectionHeader';
import { MovieDetailsHeader } from '../components/MovieDetailsHeader';

export const MoviesScreen = () => {
  const [movieId, setMovieId] = useState<number>(NaN);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  console.log("App Rendered");

  return (
    <>
      <Header />
      <section id="next-steps">
        <div id="docs">
          {Number.isNaN(movieId) ? (
            <>   
              <SearchModule 
                inputValue={inputValue}
                setInputValue={setInputValue}
                setSearchQuery={setSearchQuery}
                handleSearchSubmit={handleSearchSubmit}
              />    
              <MoviesSectionHeader 
                searchQuery={searchQuery}
                setMovieId={setMovieId}
              />   
            </> 
          ) : (
            <MovieDetailsHeader 
              movieId={movieId}
              setMovieId={setMovieId}
            />   
          )}
        </div>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
};
