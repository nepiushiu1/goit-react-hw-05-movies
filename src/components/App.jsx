import { Home } from '../../src/pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Loyaut } from './Loyaut/Loyaut';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </>
  );
};
