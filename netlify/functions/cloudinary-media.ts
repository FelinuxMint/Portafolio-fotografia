import type { Handler } from "@netlify/functions";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handler: Handler = async (event, context) => {
  // Solo permitir métodos POST para subidas
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { fileData, fileName } = body;

    if (!fileData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No file data provided" }),
      };
    }

    // Subir a Cloudinary
    const result = await cloudinary.uploader.upload(fileData, {
      folder: "portafolio-fotografia",
      public_id: fileName,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        secure_url: result.secure_url,
        public_id: result.public_id,
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler };
