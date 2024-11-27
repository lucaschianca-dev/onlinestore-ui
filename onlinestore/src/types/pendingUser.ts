export interface PendingUser {
  id: string;
  email: string;
  fullName: string; // Nota: padronizamos para "fullName"
  role: "CLIENT" | "ADMIN";
  password: string;
  creationAt: string;
  updatedAt: string;
}
