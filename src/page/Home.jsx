import { useEffect, useState } from 'react';

import { getMovies } from '../service/getService';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops... Somesing went wrong...</p>}
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
