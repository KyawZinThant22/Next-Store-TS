import Breadcrumb from 'components/Elements/Breadcrumb';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hook';
import {
   applyDiscount,
   backStep,
   decrementQuantity,
   gotoStep,
   incrementQuantity,
   nextStep,
   removeItem,
} from 'store/reducers/cartStore';
import { AppDispatch, RootState } from 'store/store';
import CheckoutStep from './CheckoutStep';
import CheckoutCart from './cart/CheckoutCart';
import CheckoutBillingAddress from './billing/CheckoutBillingAddress';

const Checkout = () => {
   const { cart, checkout } = useAppSelector((state: RootState) => state.cart);

   console.log(cart);
   const STEPS = ['Cart', 'Billing & address', 'Payment'];

   const { activeStep } = checkout;
   const dispatch: AppDispatch = useAppDispatch();
   const location = useLocation();
   const completed = activeStep === STEPS.length;

   const handleRemoveItem = (id: string) => {
      dispatch(removeItem(id));
   };

   const handleNextStep = () => {
      dispatch(nextStep());
   };

   const handleIncreaseQuantity = ({ productId }: { productId: string }) => {
      dispatch(incrementQuantity({ productId }));
   };

   const handleDecreaseQuantity = ({ productId }: { productId: string }) => {
      dispatch(decrementQuantity({ productId }));
   };

   const handleBackStep = () => {
      dispatch(backStep());
   };

   const handleGotoStep = (step: number) => {
      dispatch(gotoStep(step));
   };

   const handleApplyDiscount = (value: number) => {
      if (cart.length) {
         dispatch(applyDiscount(value));
      }
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
               <div className="col-span-8 mt-6 ">
                  <CheckoutStep activeStep={activeStep} steps={STEPS} />
               </div>
            </div>
            <div>
               {completed ? (
                  <p>Complete</p>
               ) : (
                  <>
                     {activeStep === 0 && (
                        <CheckoutCart
                           onNextStep={handleNextStep}
                           onDeleteCart={handleRemoveItem}
                           onApplyDiscount={handleApplyDiscount}
                           onIncreaseQuantity={handleIncreaseQuantity}
                           onDecreaseQuantity={handleDecreaseQuantity}
                        />
                     )}
                     {activeStep === 1 && <CheckoutBillingAddress onBackStep={handleBackStep} />}
                  </>
               )}
            </div>
         </div>
      </>
   );
};

export default Checkout;
