import { lazy } from 'react';

import { Role } from './enum';
import ROUTE from './routes';

const Login = lazy(() => import('../ui/modules/login/containers/Login'));

const Dashboard = lazy(
  () => import('../ui/modules/dashboard/containers/Dashboard')
);

export const MAIN_ROUTES = [
  {
    path: ROUTE.LOGIN,
    name: 'login',
    element: Login,
  },
  {
    path: ROUTE.DASHBOARD,
    name: 'dashboard',
    element: Dashboard,
  },
];

export const menus = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    // icon: DownloadOutlined,
    route: ROUTE.DASHBOARD,
    roles: [Role.AGENCY_OBSERVER],
  },
];
