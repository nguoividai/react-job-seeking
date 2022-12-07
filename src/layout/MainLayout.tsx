import React from 'react';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const MainLayout = () => {
  return (
    <>
      <AppHeader />

      <AppBody />

      <AppFooter />
    </>
  );
};

export default React.memo(MainLayout);
