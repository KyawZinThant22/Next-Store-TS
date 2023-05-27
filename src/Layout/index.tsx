import Cart from 'components/Cart';
import { Topbar, Navbar } from 'components/NavComponents/index';
import { Outlet } from 'react-router-dom';
import Footer from 'section/Footer';

const Layout = () => {
   return (
      <>
         <Cart />

         <Topbar />
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default Layout;
