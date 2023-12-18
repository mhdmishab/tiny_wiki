import axios from 'axios';
import { getAccessToken, getRefreshToken, saveTokens, clearTokens } from '../utils/token';
import { logOut } from '../slices/adminSlice';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});


api.interceptors.request.use(
    async(config) => {
      
        const token = await getAccessToken();
        console.log(token,"axios")
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
  
      console.log(1);
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        console.log(2);
  
        try {
          const newAccessToken = await refreshAccessToken();
          console.log(3);
          console.log(newAccessToken, "newAccessToken");
          console.log(originalRequest, "original");
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.log(4);
          clearTokens();
          logOut();
          console.log(refreshError);
          throw refreshError;
        }
      }
      console.log(error);
      return Promise.reject(error);
    }
  );
  
  const refreshAccessToken = async () => {
    try {
      const refreshToken = getRefreshToken();
      console.log(refreshToken);
  
      const response = await api.post('/admin/refresh', { refreshToken });
      console.log(response);
      const { newAccessToken } = response.data;
      console.log(newAccessToken);
      saveTokens(newAccessToken);
  
      return newAccessToken; 
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };

export default api;