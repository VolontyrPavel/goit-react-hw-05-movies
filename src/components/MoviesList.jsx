import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link key={id} to={`/movies/${id}`} state={{from: location}}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  )
}

MoviesList.propType = {
  movies: PropTypes.arrayOf(PropTypes.string),
};
