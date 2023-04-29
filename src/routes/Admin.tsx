import { useRoutes, Navigate } from 'react-router-dom';

import { Home } from './Elements';

const Admin = () => {
   return useRoutes([
      {
         path: '/',
         element: <Navigate to="/home" replace />,
      },
      {
         path: '/home',
         element: <Home />,
      },
   ]);
};

export default Admin;
