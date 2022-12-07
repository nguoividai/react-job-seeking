import React, { Suspense, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import { useAppDispatch } from './services/redux';
import { jwtInfo } from './features/authentication/actions';
import ScrollToTop from './router/ScrollToTop';

// Containers
const MainLayout = React.lazy(() => import('./layout/MainLayout'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback="loading">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route, idx) => {
              return (
                route.element && <Route key={idx} path={route.path} element={<route.element />} />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
