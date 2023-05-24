import { useRoutes, Navigate } from 'react-router-dom';

import { Home, ProductDetails } from './Elements';
import Layout from 'Layout';

const Admin = () => {
   return useRoutes([
      {
         path: '/',
         element: <Navigate to="home" replace />,
      },
      {
         path: 'home',
         element: <Layout />,
         children: [
            {
               path: '',
               element: <Home />,
            },
            {
               path: 'products',
               element: <ProductDetails />,
            },
            {
               path: 'products/:name',
               element: (
                  <>
                     <h1>love</h1>
                  </>
               ),
            },
         ],
      },
      {
         path: '/about',
         element: <h1>About Page</h1>,
      },
      {
         path: '*',
         element: <Navigate to="/" replace />,
      },
   ]);
};

export default Admin;
