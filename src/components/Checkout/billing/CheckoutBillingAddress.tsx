import { Button, Grid, Stack } from '@mui/material';
import Iconify from 'components/iconify/Iconify';
import React, { useState } from 'react';
import CheckoutSummary from '../payment/CheckoutSummary';
import { useAppSelector } from 'store/hook';
import { RootState } from 'store/store';

type Props = {
   onBackStep: VoidFunction;
};
const CheckoutBillingAddress = ({ onBackStep }: Props) => {
   const { checkout } = useAppSelector((state: RootState) => state.cart);

   const [open, setOpen] = useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };
   return (
      <Grid container spacing={3}>
         <Grid item xs={12} md={8}>
            {/* {_addressBooks.map((address, index) => (
                  <AddressItem
                     key={index}
                     address={address}
                     onCreateBilling={() => onCreateBilling(address)}
                  />
               ))} */}

            <Stack direction="row" justifyContent="space-between">
               <Button
                  size="small"
                  color="inherit"
                  onClick={onBackStep}
                  startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
               >
                  Back
               </Button>

               <Button
                  size="small"
                  onClick={handleOpen}
                  startIcon={<Iconify icon="eva:plus-fill" />}
               >
                  Add new address
               </Button>
            </Stack>
         </Grid>

         <Grid item xs={12} md={4}>
            <CheckoutSummary enableDiscount discount={checkout.discount} />
         </Grid>
      </Grid>
   );
};

export default CheckoutBillingAddress;
