import React from 'react';

const MainLayout = React.lazy(() => import('./layout/MainLayout'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    element: MainLayout,
  },
];

export default routes;
