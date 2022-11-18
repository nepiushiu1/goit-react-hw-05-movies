import css from './Appbar.module.css';
import { NavLink } from 'react-router-dom';

export const Appbar = () => {
  return (
    <header className={css.header}>
      <NavLink className={css.name}>Home</NavLink>
      <NavLink className={css.name}>Movies</NavLink>
    </header>
  );
};
