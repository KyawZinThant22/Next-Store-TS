import CartIcon from 'assets/icons/CartIcon';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from 'store/store';

const Cart = () => {
   const { cart } = useSelector((state: RootState) => state.cart);
   const location = useLocation();

   return (
      <>
         {location.pathname !== '/home/checkout' && (
            <Link to={`/home/checkout`} className="fixed right-0 top-[15rem]">
               <button className="relative h-10 w-10 rounded-l-full bg-white p-1 shadow-sm">
                  <span className="absolute right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                     {cart.length}
                  </span>
                  <CartIcon className="" />
               </button>
            </Link>
         )}
      </>
   );
};

export default Cart;
