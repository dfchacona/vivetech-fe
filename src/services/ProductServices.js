import axios from 'axios';
import { API_URL } from '../consts.js';

axios.defaults.baseURL = API_URL;

export async function getAllProducts() {
  return axios.get('/products');
}

export async function getProductById(id) {
  return axios.get(`/product/${id}`);
}