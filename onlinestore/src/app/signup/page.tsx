"use client";

import SignupForm from "@/components/signupForm";
import { useSignup } from "@/hooks/useSignup";
import { useRouter } from "next/navigation"; // Usando o useRouter para redirecionamento

export default function SignupPage() {
  const { isLoading, error, success, handleSignup } = useSignup();
  const router = useRouter(); // Usando o hook de navegação do Next.js para redirecionamento

  // Redirecionar após o sucesso
  if (success) {
    setTimeout(() => {
      router.push("/"); // Redireciona para a página inicial após 3 segundos
    }, 3000); // 3 segundos de espera
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Registro</h1>
        <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
        {/* Exibe o alerta de sucesso quando o registro é bem-sucedido */}
        {success && (
          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <div className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg animate__animated animate__fadeIn">
              Registro bem-sucedido! Você será redirecionado em breve.
            </div>
          </div>
        )}
        {/* Exibe o erro, se houver */}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}