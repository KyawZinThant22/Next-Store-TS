import sum from 'lodash/sum';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Grid, Button, CardHeader, Typography } from '@mui/material';

import Iconify from 'components/iconify/Iconify';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import CheckoutCartProductList from './CheckoutCartProductList';
import CheckoutSummary from '../payment/CheckoutSummary';
import { Button as IButton } from 'components/Elements';

// ----------------------------------------------------------------------

type Props = {
   onNextStep: VoidFunction;
   onDeleteCart: (productId: string) => void;
   onApplyDiscount: (value: number) => void;
   onIncreaseQuantity: any;
   onDecreaseQuantity: any;
};

export default function CheckoutCart({
   onNextStep,
   onApplyDiscount,
   onDeleteCart,
   onIncreaseQuantity,
   onDecreaseQuantity,
}: Props) {
   //    const { total, discount, subtotal } = cart.checkout;
   const { cart, checkout } = useSelector((state: RootState) => state.cart);
   const { total, discount, subtotal } = checkout;

   const totalItems = sum(cart.map((item) => item.quantity));

   const isEmptyCart = !cart.length;

   return (
      <Grid container spacing={3}>
         <Grid item xs={12} md={8}>
            <div className="shasow-lg overflow-hidden rounded-2xl border ">
               <CardHeader
                  title={
                     <Typography variant="h6">
                        Cart
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                           &nbsp;({totalItems} item)
                        </Typography>
                     </Typography>
                  }
                  sx={{ mb: 1, backgroundColor: 'white' }}
               />

               {!isEmptyCart ? (
                  <CheckoutCartProductList
                     products={cart}
                     onDelete={onDeleteCart}
                     onIncreaseQuantity={onIncreaseQuantity}
                     onDecreaseQuantity={onDecreaseQuantity}
                  />
               ) : (
                  <>emplty </>
               )}
            </div>

            <div className="mt-4 cursor-pointer">
               <Button
                  to={'http://localhost:5173/home'}
                  component={RouterLink}
                  color="inherit"
                  startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
               >
                  Continue Shopping
               </Button>
            </div>
         </Grid>

         <Grid item xs={12} md={4}>
            <CheckoutSummary
               enableDiscount
               total={total}
               discount={discount}
               subtotal={subtotal}
               onApplyDiscount={onApplyDiscount}
            />

            <div className="h-[50px] w-full">
               <IButton
                  label="Check Out"
                  type="submit"
                  variant="contained"
                  rounded="rounded-lg"
                  fontSize="text-sm"
                  disable={cart.length < 0}
                  arialabel="check out button"
                  action={onNextStep}
               />
            </div>
         </Grid>
      </Grid>
   );
}
