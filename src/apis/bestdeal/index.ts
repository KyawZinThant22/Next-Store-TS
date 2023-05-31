import { plainJsonHeader } from 'apis/headers';
import axios from 'axios';
import { BACKEND_URL } from 'config';

export const getBestdeal = async (categoryName?: string) => {
   return axios({
      url: `${BACKEND_URL}products?${
         categoryName && `category=${categoryName}`
      }&select=id,name,price,stock,description,image1&&order_by=createdAt.desc`,
      method: 'GET',
      headers: plainJsonHeader(),
   });
};
