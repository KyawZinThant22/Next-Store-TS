// @mui
import {
   Box,
   Card,
   Stack,
   Button,
   Divider,
   TextField,
   Typography,
   CardContent,
   InputAdornment,
} from '@mui/material';
import { sum } from 'lodash';
import { useAppSelector } from 'store/hook';
import { RootState } from 'store/store';

import { fCurrency } from 'utils/FCurrency';
// utils

// components

// ----------------------------------------------------------------------

type Props = {
   total: number;
   discount: number;
   subtotal: number;
   shipping?: number;
   onEdit?: VoidFunction;
   enableEdit?: boolean;
   onApplyDiscount?: (discount: number) => void;
   enableDiscount?: boolean;
};

export default function CheckoutSummary({
   total,
   discount,
   subtotal,
   shipping,
   onApplyDiscount,
   enableDiscount = false,
}: Props) {
   const displayShipping = shipping !== null ? 'Free' : '-';

   const { cart } = useAppSelector((state: RootState) => state.cart);

   const totalPrice = cart.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity;
      return acc + itemPrice * itemQuantity;
   }, 0);

   return (
      <Card sx={{ mb: 3, borderRadius: 3, border: 0 }}>
         <h1 className="p-3 text-lg font-[500]">Order Summary</h1>
         <CardContent>
            <Stack spacing={2}>
               <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     Discount
                  </Typography>
                  <Typography variant="subtitle2">
                     {discount ? fCurrency(-discount) : '-'}
                  </Typography>
               </Stack>

               <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     Shipping
                  </Typography>
                  <Typography variant="subtitle2">
                     {shipping ? fCurrency(shipping) : displayShipping}
                  </Typography>
               </Stack>

               <Divider />

               <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1">Total</Typography>
                  <Box sx={{ textAlign: 'right' }}>
                     <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                        ${totalPrice - discount}
                     </Typography>
                     <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                        (VAT included if applicable)
                     </Typography>
                  </Box>
               </Stack>

               {enableDiscount && onApplyDiscount && (
                  <TextField
                     fullWidth
                     placeholder="Discount codes / Gifts"
                     value="DISCOUNT5"
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <Button
                                 color="primary"
                                 onClick={() => onApplyDiscount(5)}
                                 sx={{ mr: -0.5 }}
                              >
                                 Apply
                              </Button>
                           </InputAdornment>
                        ),
                     }}
                  />
               )}
            </Stack>
         </CardContent>
      </Card>
   );
}
