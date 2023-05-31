// @mui
import { Table, TableBody } from '@mui/material';
// @types

// components

//

import { ICart } from 'store/reducers/cartStore';
import CheckoutCartProduct from './CheckoutCartProduct';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
   products: ICart[];
   onDelete: (id: string) => void;
   onDecreaseQuantity: any;
   onIncreaseQuantity: any;
};

export default function CheckoutCartProductList({
   products,
   onDelete,
   onIncreaseQuantity,
   onDecreaseQuantity,
}: Props) {
   return (
      <>
         <div className="w-full bg-[#F3F6F8] p-4 px-6">
            <div className="flex items-center justify-between text-sm text-[#637381]">
               <h6>Product</h6>
               <div className="flex items-center justify-between space-x-[100px]">
                  <h6>price</h6>
                  <h6>quantity</h6>
                  <h6>Total Price</h6>
                  <h6></h6>
               </div>
            </div>
         </div>
         <Table>
            <TableBody>
               {products.map((row) => (
                  <CheckoutCartProduct
                     key={row.id}
                     row={row}
                     onDelete={() => onDelete(row.id)}
                     onDecrease={() => onDecreaseQuantity({ productId: row.id })}
                     onIncrease={() => onIncreaseQuantity({ productId: row.id })}
                  />
               ))}
            </TableBody>
         </Table>
      </>
   );
}
