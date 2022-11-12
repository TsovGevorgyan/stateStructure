import {
    Route,
    Routes
  } from 'react-router-dom';
  
  import routes from './routes';
  
  const AppRouter = () => {
    return (
      <>
        {/* {children} */}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={<route.component />}
              path={route.path}
            />
          ))}
        </Routes>
      </>
    );
  };
  
  export default AppRouter;