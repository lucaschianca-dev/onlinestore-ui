import { verifyUser } from "@/services/apiService";
import { useEffect, useState } from "react";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const { token } = params;
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const confirmUser = async () => {
      try {
        await verifyUser(token);
        setStatus("Verificação concluída com sucesso! Agora pode fazer login.");
      } catch (err) {
        console.error(err);
        setStatus(
          "Falha na verificação. O token pode estar expirado ou inválido."
        );
      }
    };

    confirmUser();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold">{status || "A verificar..."}</h1>
      </div>
    </div>
  );
}
