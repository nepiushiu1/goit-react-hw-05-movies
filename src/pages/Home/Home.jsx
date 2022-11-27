import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/Api';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={css.item}>
            <Link to={`/movies/${id}`} className={css.link}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
