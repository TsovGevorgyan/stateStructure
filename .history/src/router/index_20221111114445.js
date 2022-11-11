import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from 'react-router-dom';
  
  import routes from './routes';
  
  const signedHomePage = '/dashboard';
  const unsignedHomePage = '/login';
  
  const AppRouter = ({ children }) => {
    return (
      <Router>
        {children}
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </Router>
    );
  };
  
  export default AppRouter;