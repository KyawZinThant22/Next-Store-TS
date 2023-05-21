import { plainJsonHeader } from 'apis/headers';
import axios from 'axios';
import { BACKEND_URL } from 'config';

export const getBestdeal = async () => {
   return axios({
      url: `${BACKEND_URL}products?select=id,name,price,description,image1&limit=3&order_by=createdAt.desc`,
      method: 'GET',
      headers: plainJsonHeader(),
   });
};
