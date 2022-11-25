import { Home } from '../../src/pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loyaut } from './Loyaut/Loyaut';
import { Movies } from 'pages/Movies/Movies';
import { MovieDescription } from './MovieDescription/MovieDescription';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDescription />}>
            <Route path="cast" element={<div>cast</div>}></Route>
            <Route path="reviews" element={<div>reviews</div>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
