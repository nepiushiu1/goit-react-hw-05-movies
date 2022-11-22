import css from './Appbar.module.css';
import { NavLink } from 'react-router-dom';
// import { Movies } from 'pages/Movies/Movies';

export const Appbar = () => {
  return (
    <header className={css.header}>
      <NavLink className={css.name} to="/">
        Home
      </NavLink>
      <NavLink className={css.name} to="movies">
        Movies
      </NavLink>
    </header>
  );
};
