import { useRoutes, Navigate } from 'react-router-dom';

import { Layout } from './Elements';

const Admin = () => {
   return useRoutes([
      {
         path: '/',
         element: <Navigate to="/home" replace />,
      },
      {
         path: '/home',
         element: <Layout />,
      },
   ]);
};

export default Admin;
