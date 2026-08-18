import React from 'react';
import { Button, Label, SearchField } from '@heroui/react';

interface SearchModuleProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  setSearchQuery: (query: string) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
}

export const SearchModule = ({
  inputValue,
  setInputValue,
  setSearchQuery,
  handleSearchSubmit,
}: SearchModuleProps) => {
  return (
    <div className="mb-5 w-full max-w-[420px] space-y-4 dark flex flex-col items-center mx-auto">
      <form onSubmit={handleSearchSubmit} className="w-[420px] flex items-end gap-3 dark mx-auto">
        <div className="flex-1 text-left">
          <SearchField name="movie-search" variant="secondary">
            <Label>Search for movies!</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input 
                className="w-full"
                placeholder="Search..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <SearchField.ClearButton 
                onClick={() => { 
                  setInputValue(""); 
                  setSearchQuery(""); 
                }} 
              />
            </SearchField.Group>
          </SearchField>
        </div>
        <Button type="submit" className="mb-0.5">
          Search
        </Button>
      </form>
    </div>
  );
};