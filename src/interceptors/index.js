import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants';

// add the token to the request header
export const jwtInterceptor = () => {
  axios.interceptors.request.use((request) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      request.headers.Authorization = `bearer ${token}`;
    }
    return request;
  });
};
