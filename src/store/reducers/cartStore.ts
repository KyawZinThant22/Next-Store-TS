import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICart {
   id: string;
   name: string;
   price: string;
   quantity: number;
   image: string;
   stock: number;
}
export type ICheckoutBillingAddress = {
   receiver: string;
   phone: string;
   fullAddress: string;
   addressType: string;
   isDefault: boolean;
};

export type IProductCheckoutState = {
   activeStep: number;
   subtotal: number;
   total: number;
   discount: number;
   shipping: number;
   billing: ICheckoutBillingAddress | null;
   totalItems: number;
};

export interface ICartStore {
   cart: ICart[];
   checkout: IProductCheckoutState;
}

interface ICartPayload {
   id: string;
   name: string;
   price: string;
   image: string;
   stock: number;
}
const initialState: ICartStore = {
   cart: [],
   checkout: {
      activeStep: 0,
      subtotal: 0,
      total: 0,
      discount: 0,
      shipping: 0,
      billing: null,
      totalItems: 0,
   },
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<ICartPayload>) => {
         const itemInCart = state.cart.find((item) => item.id === action.payload.id);
         if (itemInCart) {
            itemInCart.quantity++;
         } else {
            state.cart.push({ ...action.payload, quantity: 1 });
         }
      },
      incrementQuantity: (state, action: PayloadAction<{ productId: string }>) => {
         const item = state.cart.find((item) => item.id === action.payload.productId);
         if (item) {
            item.quantity++;
         }
      },
      decrementQuantity: (state, action: PayloadAction<{ productId: string }>) => {
         const item = state.cart.find((item) => item.id === action.payload.productId);
         if (item) {
            item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
         }
      },
      removeItem: (state, action) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload);
         state.cart = removeItem;
      },

      backStep(state) {
         state.checkout.activeStep -= 1;
      },

      nextStep(state) {
         state.checkout.activeStep += 1;
      },

      gotoStep(state, action) {
         const step = action.payload;
         state.checkout.activeStep = step;
      },
      applyDiscount(state, action) {
         const discount = action.payload;
         state.checkout.discount = discount;
      },
   },
});

export default cartSlice.reducer;

export const {
   addToCart,
   incrementQuantity,
   decrementQuantity,
   removeItem,
   backStep,
   nextStep,
   applyDiscount,
   gotoStep,
} = cartSlice.actions;
