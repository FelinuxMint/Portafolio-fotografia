import { tinaClient } from "@/lib/tina";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProyectoPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const project = await tinaClient.getDocument("proyecto", params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="proyecto-detalle">
        <div className="contenido-centrado">
          <h1>{project.title}</h1>
          <p>{project.description || ""}</p>
          <a href="/" className="btn-volver">
            ← Volver a la galería
          </a>
        </div>

        <div className="fotos-grid">
          {project.photos?.map((foto: any, index: number) => (
            <figure key={index} className="foto-item">
              <a
                href={foto.imagen || "#"}
                className="glightbox"
                data-gallery={project.slug}
              >
                <img
                  src={foto.imagen || "/file.svg"}
                  alt={foto.titulo || project.title}
                  loading="lazy"
                />
              </a>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
