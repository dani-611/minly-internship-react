import { useParams, useNavigate } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import { MovieInformation } from './MovieInformation';
import { ApiStatus } from '../constants/ApiStatus';
import type { MovieDetailsProp } from '../types/MovieDetailsProp';

export const MovieDetailsSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { status, data: movie } = useFetch<MovieDetailsProp>(`/api/movies/${id}`);

  return (
    <>
      <h2>GET /movies/{id}</h2>
      <p>Getting movie</p>
      <div className='flex p-4 w-full justify-center'>
        {status === ApiStatus.LOADING && <h2>Please wait. We are fetching the movie!</h2>}
        {status === ApiStatus.EMPTY && <h2>Oops! Looks like there is no such movie</h2>}
        {status === ApiStatus.ERROR && <h2>Oh no! Something went wrong</h2>}
        {status === ApiStatus.DATA && movie && (
          <MovieInformation {...movie} onBack={() => navigate('/')} />
        )}
      </div>
    </>
  );
};
