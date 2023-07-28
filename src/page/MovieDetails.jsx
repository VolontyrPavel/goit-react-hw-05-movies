import { Suspense, useEffect, useState, useCallback, useRef } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation
} from 'react-router-dom';
import { MovieDetailsItem } from '../components/MovieDetailsItem';
import { Loader } from '../components/Loader';

import { getMoviesById } from '../service/getService';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const data = await getMoviesById(movieId);
      setMovie(data);
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

  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/')

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops... Somesing went wrong...</p>}
      <Link to={goBackLink.current}>{'<-'}Go back</Link>
      <MovieDetailsItem
        key={movie.id}
        img={movie.poster_path}
        title={movie.title}
        release={movie.release_date}
        vote={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
      />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
