import { Suspense, lazy, ElementType } from 'react';

const Loadable = (Component: ElementType) => (props: any) =>
   (
      <Suspense fallback={<p>Loading</p>}>
         <Component {...props} />
      </Suspense>
   );

//layout
export const Layout = Loadable(lazy(() => import('Layout/index')));
export const Home = Loadable(lazy(() => import('section/Home/index')));
