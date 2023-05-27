import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICart {
   id: string;
   name: string;
   price: string;
   quantity: number;
   image: string;
}

interface ICartStore {
   cart: ICart[];
}

interface ICartPayload {
   id: string;
   name: string;
   price: string;
   image: string;
}
const initialState: ICartStore = {
   cart: [],
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
      incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
         const item = state.cart.find((item) => item.id === action.payload.id);
         if (item) {
            item.quantity++;
         }
      },
      decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
         const item = state.cart.find((item) => item.id === action.payload.id);
         if (item) {
            item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
         }
      },
      removeItem: (state, action) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload);
         state.cart = removeItem;
      },
   },
});

export default cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
