import axios from "axios";

export const API_URL = "http://localhost:8080/api/v1";

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer_${localStorage.getItem("token")}`;
  return config;
});
