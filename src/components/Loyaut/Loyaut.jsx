import { Appbar } from 'components/Appbar/Appdar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import css from './Loyaut.module.css';

export const Loyaut = () => {
  return (
    <div>
      <Appbar />
      <Suspense fullback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
