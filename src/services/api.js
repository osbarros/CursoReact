import axios from "axios";
import { getToken, logout } from "./auth";

const API_URL = "http://localhost:3333";
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const isUnauthorizedError = error?.response?.status === 401;
    if (isUnauthorizedError) logout();

    return error.response;
  }
);

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (!config.headers.Authorization && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;
