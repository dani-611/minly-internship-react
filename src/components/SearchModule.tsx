import { Label, SearchField } from '@heroui/react';
import { useSearchParams } from 'react-router';

export const SearchModule = () => {
  const [params, setParams] = useSearchParams();
  const queryValue = params.get('search') || '';

  const handleChange = (val: string) => {
    if (val) {
      setParams({ search: val });
    } else {
      setParams({});
    }
  };

  return (
    <div className="mb-5 w-full max-w-[420px] space-y-4 dark flex flex-col items-center mx-auto">
      <div className="w-[420px] flex items-end gap-3 dark mx-auto">
        <div className="flex-1 text-left">
          <SearchField name="movie-search" variant="secondary">
            <Label>Search for movies!</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input 
                className="w-full"
                placeholder="Search..." 
                value={queryValue}
                onChange={(e) => handleChange(e.target.value)}
              />
              <SearchField.ClearButton onClick={() => setParams({})} />
            </SearchField.Group>
          </SearchField>
        </div>
      </div>
    </div>
  );
};
