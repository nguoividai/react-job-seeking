import React from 'react';

const PromptForm = React.lazy(() => import('src/pages/promptForm/PromptForm'));
const AboutUs = React.lazy(() => import('src/pages/aboutUs/AboutUs'));
const ForgotPassword = React.lazy(() => import('src/pages/forgot/ForgotForm'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    element: PromptForm,
  },
  {
    path: '/about-us',
    exact: true,
    name: 'AboutUs',
    element: AboutUs,
  },
  {
    path: '/forgot-password',
    exact: true,
    name: 'ForgotPassword',
    element: ForgotPassword,
  },
];

export default routes;
