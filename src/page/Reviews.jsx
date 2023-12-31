import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getMoviesByRewiews } from '../service/getService';
import { ReviewsList } from '../components/ReviewsList';
import { Loader } from '../components/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const { results } = await getMoviesByRewiews(movieId);
      setReviews(results);
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
      
      {reviews && reviews.map(({ id, author, content }) => (
      <ReviewsList key={id} author={author} content={content} />
      ))}
    </>
  );
};

export default Reviews;
