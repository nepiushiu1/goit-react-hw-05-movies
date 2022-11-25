import { useState, useEffect } from 'react';
import { useParams, Link, NavLink, useLocation } from 'react-router-dom';

import { fetchSelectedFilm } from '../../api/Api';

import css from './MovieDescription.module.css';

export const MovieDescription = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movie = await fetchSelectedFilm(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, [movieId]);

  console.log(movie);

  const img = 'https://image.tmdb.org/t/p/w300';

  const { poster_path, original_title, genres, overview, vote_average } = movie;

  const backLinkHref = location?.state?.from ?? 'home';

  return (
    <>
      <main>
        <NavLink className={css.btn} to={backLinkHref}>
          Go back
        </NavLink>
        <div className={css.conteiner}>
          <img
            src={
              //   movie.poster_path?
              `${img}${poster_path}`
              // : '../../public/logo192.png'
              //   `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            }
            alt={original_title}
          />
          <div className={css.description}>
            <h1>{original_title}</h1>
            <div>
              <p>User Score: {vote_average}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres?.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
        </div>
        <div className={css.a}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link>Cast</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
