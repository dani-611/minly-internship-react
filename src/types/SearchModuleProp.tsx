export type SearchModuleProp = {
  inputValue: string;
  setInputValue: (value: string) => void;
  setSearchQuery: (query: string) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
}