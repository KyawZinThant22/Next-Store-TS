import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducers/auth';
import CartReducer from './reducers/cartStore';
import storage from 'redux-persist/lib/storage';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

const persistConfig = {
   key: 'root',
   storage,
};

const persistedCartReducer = persistReducer(persistConfig, CartReducer);

export const store = configureStore({
   reducer: {
      auth: AuthReducer,
      cart: persistedCartReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

const { dispatch } = store;

export { dispatch };
