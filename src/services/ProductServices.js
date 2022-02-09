import axios from 'axios';
import { API_URL } from '../consts.js';

axios.defaults.baseURL = API_URL;

export default async function getAllProducts() {
  return axios.get('/products');
}