import axios from 'axios';
import { API_URL } from '../consts.js';

axios.defaults.baseURL = API_URL;

export async function getStats() {
  return axios.get('/stats');
}
