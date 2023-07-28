import { useState } from 'react';
import PropTypes from 'prop-types';

export const MovieSearchForm = ({
  setSearchParams,
}) => {
  const [query, setQuery] = useState('');

  const onHandleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const onHundleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return alert('Заповніть строку пошуку');
    }
    setSearchParams(query);
  };

  return (
    <form onSubmit={onHundleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={onHandleInput}
        value={query}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

MovieSearchForm.propType = {
  setSearchParams: PropTypes.object.isRequired,
  searchValue: PropTypes.string,
};

