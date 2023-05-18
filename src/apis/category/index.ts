import { plainJsonHeader } from 'apis/headers';
import axios from 'axios';
import { BACKEND_URL } from 'config';

export const getCategory = async () => {
   return axios({
      url: `${BACKEND_URL}categories?select=name,id,thumbnailImage&order_by=createdAt`,
      method: 'GET',
      headers: plainJsonHeader(),
   });
};
