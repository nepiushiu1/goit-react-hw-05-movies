import { fetchSelectedMovieTitle } from '../../api/Api';

// import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [message, setMessage] = useState();
  // 'To display films, enter a query in the search field'
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const toBackLocation = `${location.pathname}${location.search}`;

  console.log(location);

  const searchFilms = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return;
      // setMessage(
      //   'Nothing entered! To display films, enter a query in the search field'
      // );
    }
    setFilms([]);
    setSearchParams(query !== '' ? { query: query } : {});
    setQuery('');
  };
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setMessage('');
    fetchSelectedMovieTitle(searchQuery).then(({ results }) =>
      setFilms(results)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery && !films.length) {
      setMessage('Sorry, nothing was found, please try your search again');
    }
  }, [films.length, searchQuery]);

  return (
    <>
      <form onSubmit={searchFilms}>
        <input
          type="text"
          name="inputValue"
          placeholder="Search movies"
          value={query}
          onChange={event => setQuery(event.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </form>

      {!films.length && <p>{message}</p>}
      <ul>
        {films.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: toBackLocation }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
