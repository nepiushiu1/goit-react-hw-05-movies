import { useEffect, useState } from 'react';

import { fetchSelectedFilm } from '../../api/Api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesId() {
      try {
        const movie = await fetchSelectedFilm();

        console.log(movie);

        setMovies(movie.results);
      } catch (error) {
        console.log(error.massage);
      }
    }
    fetchMoviesId();
  }, []);

  console.log(fetchSelectedFilm(movies));

  return (
    <>
      <li>{movies.id}</li>
    </>
  );
};
// console.log(fetchSelectedFilm(movie));
