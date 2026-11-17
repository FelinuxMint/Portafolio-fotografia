import { createClient } from "tinacms";

export const tinaClient = createClient({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  tinaGraphQLVersion: "v3",
});
