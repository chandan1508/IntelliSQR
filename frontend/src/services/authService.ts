import axios, { AxiosError } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    throw new Error(axiosError.response?.data?.error || "Invalid credentials or network issue");
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    throw new Error(axiosError.response?.data?.error || "Registration failed");
  }
};
