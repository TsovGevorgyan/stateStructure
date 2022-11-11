import Login from '../views/apps/login';
import Register from '../views/apps/register';
import Dashboard from '../views/dashboard';
import TestPage from '../views/testPage';

const user = localStorage.getItem('userAccount');
const role = user ? JSON.parse(user).role : '';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/test',
    component: TestPage,
  }
];

export default routes;