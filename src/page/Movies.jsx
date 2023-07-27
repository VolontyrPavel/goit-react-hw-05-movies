import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieSearchForm } from '../components/MovieSearchForm';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { getMoviesByQuery } from '../service/getService';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchValue = searchParams.get('query');

  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  const fetchSearchData = async searchParams => {
    setIsLoading(true);
    try {
      const data = await getMoviesByQuery(searchParams);
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setSearchParams({ query: '' });
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops... Somesing went wrong...</p>}
      <MovieSearchForm
        fetchSearchData={fetchSearchData}
        setSearchParams={setSearchParams}
        searchValue={searchValue}
      />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
