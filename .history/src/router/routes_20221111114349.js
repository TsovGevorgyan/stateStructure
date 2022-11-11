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

const unsignedRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];
console.log('routes', signedRoutes);
export default routes;