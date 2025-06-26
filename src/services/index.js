import axios from "axios";
import Cookies from "js-cookie";

export const API = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const APIBACKEND = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepta erros globais da API
APIBACKEND.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expirado ou inválido. Desconectando...");

      Cookies.remove("user");
      window.location.href = "/e-commerce-shoes"; // redireciona manualmente
    }

    return Promise.reject(error);
  }
);
