import { createClient } from "tinacms";

export const tinaClient = createClient({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  // Nota: En producción, el token se usa solo en el servidor (build de Tina)
  // No exponer TINA_TOKEN al cliente del navegador
});
