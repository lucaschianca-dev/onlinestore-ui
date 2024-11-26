"use client";

import { useState } from "react";
import { registerUser } from "@/services/apiService";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (formData: {
    email: string;
    password: string;
    fullName: string;
    role: "USER" | "ADMIN";
  }) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await registerUser(formData);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, success, handleSignup };
};