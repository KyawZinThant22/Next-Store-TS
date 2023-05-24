import { plainJsonHeader } from 'apis/headers';
import axios from 'axios';
import { BACKEND_URL } from 'config';

export const FetchProductDetails = async (id?: string) => {
   return axios({
      url: `${BACKEND_URL}products/${id}`,
      method: 'GET',
      headers: plainJsonHeader(),
   });
};
