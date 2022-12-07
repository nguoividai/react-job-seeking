import React from 'react';
import { Outlet } from 'react-router-dom';

const AppBody = () => {
  return (
    <div className="app-body">
      <Outlet />
    </div>
  );
};

export default React.memo(AppBody);
