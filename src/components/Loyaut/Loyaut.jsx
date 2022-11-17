import { Appbar } from 'components/Appbar/Appdar';
import { Outlet } from 'react-router-dom';
import css from './Loyaut.module.css';

export const Loyaut = () => {
  return (
    <div className={css.conteiner}>
      <Appbar />
      <Outlet />
    </div>
  );
};
