import { PendingUser } from "@/types/pendingUser";
import { User } from "@/types/user";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://localhost:7033/api", // Troque para HTTP se HTTPS não estiver configurado
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Registrar um novo PendingUser
export const registerUser = async (
  data: Omit<PendingUser, "id" | "creationAt" | "updatedAt">
): Promise<PendingUser> => {
  const response = await api.post("/Auth/register", data);
  return response.data;
};

// Confirmar o registro de um PendingUser
export const verifyUser = async (token: string): Promise<User> => {
  const response = await api.post(`/Auth/verify/${token}`);
  return response.data;
};
