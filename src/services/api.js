import axios from 'axios';

import { isAuthenticated } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await isAuthenticated();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
