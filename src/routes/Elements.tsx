import { Suspense, lazy, ElementType } from 'react';

const Loadable = (Component: ElementType) => (props: any) =>
   (
      <Suspense fallback={<p>Loading</p>}>
         <Component {...props} />
      </Suspense>
   );
