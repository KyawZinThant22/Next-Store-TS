import { Topbar, Navbar } from 'components/NavComponents/index';
import { ReactNode } from 'react';
import Footer from 'section/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <Topbar />
         <Navbar />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
