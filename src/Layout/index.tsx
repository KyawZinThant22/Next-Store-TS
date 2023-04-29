import { Topbar, Navbar } from 'components/NavComponents/index';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <Topbar />
         <Navbar />
         {children}
      </>
   );
};

export default Layout;
