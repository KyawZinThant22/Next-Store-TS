import { useAppSelector } from 'store/hook';
import { RootState } from 'store/store';

const Checkout = () => {
   const { cart } = useAppSelector((state: RootState) => state.cart);
   return (
      <div className="max-width padding-x">
         {cart.map((item) => (
            <div className="flex items-center justify-between">
               <img src={item.image} alt={item.name} />
               <p>{item.name}</p>
               <p>{item.quantity}</p>
               <p>{item.price}</p>
            </div>
         ))}
      </div>
   );
};

export default Checkout;
