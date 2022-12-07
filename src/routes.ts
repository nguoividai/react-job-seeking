import React from 'react';

const PromptForm = React.lazy(() => import('src/pages/promptForm/PromptForm'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    element: PromptForm,
  },
];

export default routes;
