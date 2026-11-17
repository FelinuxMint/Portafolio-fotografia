import { defineConfig } from "tinacms";

export default defineConfig({
  /** 
   * Tu título de proyecto aparece en la barra de encabezado de Tina
   **/
  title: "Portafolio de Fotografía - Paz Javiera",
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      return {
        upload: async () => ({}),
        delete: async () => ({}),
        get: async () => ({}),
        list: async () => ({ docs: [], next: 0 }),
      };
    },
  },
  /**
   * Para habilitar la edición visual localmente, Tina proporciona un componente <Sidebar />
   * que puedes agregar a tu aplicación para abrir el panel de Tina en el navegador.
   **/
  sidebar: {
    position: "fixed",
    opacity: 1,
    width: 420,
  },
  /**
   * Tina busca cualquier archivo nombrado `tina/config.ts` dentro de la carpeta src 
   * y considera cualquier carpeta dentro de src como un "colección de contenido".
   **/
  schema: {
    collections: [
      {
        label: "Proyectos",
        name: "proyecto",
        path: "src/content/proyectos",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            required: true,
          },
          {
            type: "string",
            label: "Slug (URL)",
            name: "slug",
            required: true,
          },
          {
            type: "number",
            label: "Orden en galería",
            name: "order",
            required: true,
          },
          {
            type: "rich-text",
            label: "Descripción",
            name: "description",
            required: false,
          },
          {
            type: "image",
            label: "Imagen destacada",
            name: "featuredImage",
            required: false,
          },
          {
            type: "object",
            label: "Fotos del proyecto",
            name: "photos",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.titulo || "Foto" }),
            },
            fields: [
              {
                type: "image",
                label: "Imagen",
                name: "imagen",
                required: true,
              },
              {
                type: "string",
                label: "Título de la foto",
                name: "titulo",
                required: false,
              },
            ],
          },
        ],
      },
      {
        label: "Página de Inicio",
        name: "pagina_inicio",
        nameOverride: "pagina-inicio",
        path: "src/content/pagina-inicio",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            required: true,
          },
          {
            type: "string",
            label: "Subtítulo",
            name: "subtitle",
            required: false,
          },
        ],
      },
      {
        label: "Biografía",
        name: "biografia",
        path: "src/content/biografia",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            required: true,
          },
          {
            type: "rich-text",
            label: "Contenido",
            name: "content",
            required: false,
          },
        ],
      },
      {
        label: "Contacto",
        name: "contacto",
        path: "src/content/contacto",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            required: true,
          },
          {
            type: "rich-text",
            label: "Contenido",
            name: "content",
            required: false,
          },
        ],
      },
      {
        label: "Exposiciones",
        name: "exposiciones",
        path: "src/content/exposiciones",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            required: true,
          },
          {
            type: "rich-text",
            label: "Contenido",
            name: "content",
            required: false,
          },
        ],
      },
    ],
  },
});
