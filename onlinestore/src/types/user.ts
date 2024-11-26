export interface User {
  id: string;
  email: string;
  fullName: string; // Também padronizado para "fullName"
  role: "USER" | "ADMIN";
  clientOrderIds: string[];
  creationAt: string;
  updatedAt: string;
}