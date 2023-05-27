import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducers/auth';
import CartReducer from './reducers/cartStore';

export const store = configureStore({
   reducer: {
      auth: AuthReducer,
      cart: CartReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

const { dispatch } = store;

export { dispatch };
