import Dashboard from '../views/dashboard';
import Home from '../views/Home/Home';
import TestPage from '../views/testPage';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/testPage',
    component: TestPage,
  }
];

export default routes;