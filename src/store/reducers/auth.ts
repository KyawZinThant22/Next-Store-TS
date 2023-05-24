import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface ICustomer {
   id: string;
   email: string;
   fullname: string;
   shippingAddress: string;
   phone: string;
}

interface ICustomerAuth {
   customer: ICustomer;
   token: string;
   checked: boolean;
   authSuccess: boolean;
}

interface ICustomerLoginPayload {
   email: string;
   fullname: string;
   shippingAddress: string;
   phone: string;
   token: string;
   id: string;
}

interface ICustomerRegister {
   token: string;
}

const initialState: ICustomerAuth = {
   customer: {
      id: '',
      email: '',
      fullname: '',
      shippingAddress: '',
      phone: '',
   },
   token: '',
   checked: false,
   authSuccess: false,
};

const CustomerSlice = createSlice({
   name: 'customerAuth',
   initialState,
   reducers: {
      registerCustomer: (state, action: PayloadAction<ICustomerRegister>) => {
         const { token } = action.payload;
         state: {
            state.token = token;
            state.checked = true;
            state.authSuccess = true;
         }
      },
      CustimerLogin: (state, action: PayloadAction<ICustomerLoginPayload>) => {
         const { email, fullname, shippingAddress, phone, token, id } = action.payload;
         state: {
            (state.authSuccess = true),
               (state.checked = true),
               (state.token = token),
               (state.customer = {
                  email,
                  fullname,
                  shippingAddress,
                  phone,
                  id,
               });
         }
      },

      unSetAuth: (state) => {
         Cookies.remove('token');
         state: {
            (state.checked = true),
               (state.authSuccess = false),
               (state.customer = {
                  fullname: '',
                  id: '',
                  shippingAddress: '',
                  email: '',
                  phone: '',
               }),
               (state.token = '');
         }
      },
   },
});

export const { CustimerLogin, registerCustomer, unSetAuth } = CustomerSlice.actions;
export default CustomerSlice.reducer;
