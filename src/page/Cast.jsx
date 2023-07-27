import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getMoviesByCast } from '../service/getService';
import { Loader } from '../components/Loader';
import { CastList } from '../components/CastList';

const Cast = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const { cast } = await getMoviesByCast(movieId);
      setInfo(cast);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops... Somesing went wrong...</p>}
      {info &&
        info.map(({ id, profile_path, name, character }) => (
          <CastList
            key={id}
            profile={profile_path}
            name={name}
            character={character}
          />
        ))}
    </>
  );
};

export default Cast;
