import css from './Appbar.module.css';
import { NavLink } from 'react-router-dom';

export const Appbar = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.name}>
        Home
      </NavLink>
      <NavLink to="movies" className={css.name}>
        Movies
      </NavLink>
    </header>
  );
};
