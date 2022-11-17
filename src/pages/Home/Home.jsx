import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/Api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchPopularMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  console.log(fetchPopularMovies());
  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
