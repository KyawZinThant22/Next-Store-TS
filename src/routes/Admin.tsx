import { useRoutes, Navigate } from 'react-router-dom';

const Admin = () => {
   return useRoutes([
      {
         path: '/',
         element: <Navigate to="/home" replace />,
      },
   ]);
};

export default Admin;
