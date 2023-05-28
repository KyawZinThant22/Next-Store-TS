import Breadcrumb from 'components/Elements/Breadcrumb';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { removeItem } from 'store/reducers/cartStore';
import { RootState } from 'store/store';
import CheckoutStep from './CheckoutStep';

const Checkout = () => {
   const { cart } = useAppSelector((state: RootState) => state.cart);
   const dispatch = useAppDispatch();
   const location = useLocation();

   const handleRemoveItem = (id: string) => {
      dispatch(removeItem(id));
   };
   return (
      <>
         <Helmet>
            <title>Next-Store - Checkout</title>
            <meta name="description" content="Product Checkout page" />
         </Helmet>
         <div className="max-width padding-x  mt-4">
            <Breadcrumb pathname={location.pathname} />

            <div className="grid grid-cols-12">
               <div className="col-span-8 ">
                  <CheckoutStep />
               </div>
            </div>
            {cart.map((item) => (
               <div className="flex items-center justify-between">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                  <p>{item.price}</p>
                  <button
                     onClick={() => handleRemoveItem(item.id)}
                     className="h-10 w-10 cursor-pointer bg-red-400 text-white "
                  >
                     X
                  </button>
               </div>
            ))}
         </div>
      </>
   );
};

export default Checkout;
