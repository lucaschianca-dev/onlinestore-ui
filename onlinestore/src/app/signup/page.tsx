"use client";

import SignupForm from "@/components/signupForm";
import { useSignup } from "@/hooks/useSignup";
import { useRouter } from "next/navigation"; // Usando o useRouter para redirecionamento
import { LuCheckCircle } from "react-icons/lu"; // Importando o ícone

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

        {/* Modal do DaisyUI exibido ao ter sucesso */}
        {success && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
              <div className="modal-box p-8 rounded-lg shadow-xl bg-white transition-all transform scale-95 hover:scale-100 duration-300 ease-in-out">
                {/* Centralizando o ícone acima do título */}
                <div className="flex justify-center mb-4">
                  <LuCheckCircle className="text-gray-400 text-6xl" />
                </div>
                <h3 className="text-2xl font-semibold text-green-600 text-center mb-6">
                  Registro Bem-sucedido!
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Você será redirecionado para a página de login em breve.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Exibe o erro, se houver */}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}