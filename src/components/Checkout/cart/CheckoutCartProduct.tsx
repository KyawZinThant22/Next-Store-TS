// @mui
import { Box, Stack, TableRow, TableCell, Typography, IconButton } from '@mui/material';
import IncrementerButton from 'components/Elements/IncrementButton';
import Iconify from 'components/iconify/Iconify';

import { ICart } from 'store/reducers/cartStore';

// utils

// @types

// components

// ----------------------------------------------------------------------

type CheckoutProductListRowProps = {
   row: ICart;
   onDelete: VoidFunction;
   onDecrease: VoidFunction;
   onIncrease: VoidFunction;
};

export default function CheckoutCartProduct({
   row,
   onDelete,
   onDecrease,
   onIncrease,
}: CheckoutProductListRowProps) {
   const { name, price, quantity, image, stock } = row;

   return (
      <TableRow>
         <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
            <img
               alt="product image"
               src={image}
               className="mr-2 h-[64px] w-[64px]  rounded-xl border bg-[#F3F6F8]"
            />

            <Stack spacing={0.5}>
               <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
                  {name}
               </Typography>
            </Stack>
         </TableCell>

         <TableCell>$ {price}</TableCell>

         <TableCell>
            <Box sx={{ width: 96, textAlign: 'right' }}>
               <IncrementerButton
                  quantity={quantity}
                  onDecrease={onDecrease}
                  onIncrease={onIncrease}
                  disabledDecrease={quantity <= 1}
                  disabledIncrease={quantity >= stock}
               />

               <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  available: {stock}
               </Typography>
            </Box>
         </TableCell>

         <TableCell align="right">$ {parseInt(price) * quantity}</TableCell>

         <TableCell align="right">
            <IconButton onClick={onDelete}>
               <Iconify icon="eva:trash-2-outline" />
            </IconButton>
         </TableCell>
      </TableRow>
   );
}
