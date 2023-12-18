import axios from 'axios';
import { getAccessToken, getRefreshToken, saveTokens, clearTokens } from '../utils/token';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});


api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

  
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
 
        clearTokens();

        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);


const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();


  const response = await api.post('/refresh', { refreshToken });

  const { newAccessToken, newRefreshToken } = response.data;
  saveTokens(newAccessToken, newRefreshToken);

  return newAccessToken;
};

export default api;