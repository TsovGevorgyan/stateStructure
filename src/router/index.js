import {
    Route,
    BrowserRouter as Router,
    Routes
  } from 'react-router-dom';
  
  import routes from './routes';
  
  const AppRouter = ({ children }) => {
    return (
      <Router>
        {children}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={<route.component />}
              path={route.path}
            />
          ))}
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;