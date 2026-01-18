import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const RecruitPage = lazy(() => import('../pages/recruit/page'));
const ThanksPage = lazy(() => import('../pages/thanks/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/recruit',
    element: <RecruitPage />,
  },
  {
    path: '/thanks',
    element: <ThanksPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
