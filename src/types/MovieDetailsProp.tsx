export type MovieDetailsProp = {
  id: number;
  title: string;
  releaseYear: number;
  posterUrl: string | null;
  overview: string | null;
  runtimeMinutes: number | null;
  trailerUrl: string | null;
  language: string | null;
  isRecent: boolean;
  onBack: () => void;
};