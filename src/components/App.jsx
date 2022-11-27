import { Routes, Route, Navigate } from 'react-router-dom';
import { Loyaut } from './Loyaut/Loyaut';
import { lazy } from 'react';

// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { Home } from '../../src/pages/Home/Home';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
