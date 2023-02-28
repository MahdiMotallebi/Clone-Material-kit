import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';
export const getToken = () => localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL
});

export default axiosInstance;
