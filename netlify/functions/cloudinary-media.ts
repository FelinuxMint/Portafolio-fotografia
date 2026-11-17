import type { Handler } from "@netlify/functions";
import { createMediaHandler } from "@tinacms/cloudinary";

const handler: Handler = async (event, context) => {
  const mediaHandler = createMediaHandler({
    // Configuración de Cloudinary
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    // Carpeta donde se guardarán las imágenes en Cloudinary
    folder: "portafolio-fotografia",
  });

  return mediaHandler(event, context);
};

export { handler };
