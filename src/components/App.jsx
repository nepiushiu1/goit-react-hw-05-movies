import { Home } from '../../src/pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Loyaut } from './Loyaut/Loyaut';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route path="home" element={<Home />}>
            {/* <Route path="home" element={<Home />}></Route> */}
          </Route>
          <Route path="movies" element={<div>Movies</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};
