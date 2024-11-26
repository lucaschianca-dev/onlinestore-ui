"use client";

import { useState } from "react";

interface SignupFormProps {
  onSubmit: (data: {
    email: string;
    password: string;
    fullName: string;
    role: "USER" | "ADMIN";
  }) => void;
  isLoading: boolean;
}

export default function SignupForm({ onSubmit, isLoading }: SignupFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "USER" as "USER" | "ADMIN", // Define o tipo explicitamente
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label>Nome Completo</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label>Função</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="USER">Usuário</option>
          <option value="ADMIN">Administrador</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {isLoading ? "Enviando..." : "Registrar"}
      </button>
    </form>
  );
}
