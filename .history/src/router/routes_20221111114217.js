import Login from '../views/apps/login';
import Register from '../views/apps/register';
import Dashboard from '../views/dashboard';
import SellerDashboard from '../views/apps/dashboard/sellerDashboard';
import Products from '../views/apps/pages/buyer';
import CreateProduct from '../views/apps/pages/seller/createProduct';

const user = localStorage.getItem('userAccount');
const role = user ? JSON.parse(user).role : '';

const signedRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/createProducts',
    component: CreateProduct,
  },
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
export default role ? signedRoutes : unsignedRoutes;