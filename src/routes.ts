import React from 'react';

const PromptForm = React.lazy(() => import('src/pages/promptForm/PromptForm'));
const AboutUs = React.lazy(() => import('src/pages/aboutUs/AboutUs'));
const ForgotPassword = React.lazy(() => import('src/pages/forgot/ForgotForm'));
const ProfileInformation = React.lazy(() => import('src/pages/profile/ProfileInformation'));

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
  {
    path: '/profile',
    exact: true,
    name: 'ProfileInformation',
    element: ProfileInformation,
  },
];

export default routes;
