import { tinaClient } from "../lib/tina";

export default async function ProyectosPage() {
  const projects = await (tinaClient as any).getCollection("proyecto");

  return (
    <main>
      <section className="contenido-centrado">
        <h2>Proyectos</h2>
        <p>Selección de proyectos fotográficos realizados en colaboración y de forma independiente.</p>
      </section>
      <div className="fotos-grid">
        {projects?.docs.map((project: any) => (
          <figure key={project.slug} className="foto-item">
            <div className="foto-overlay">
              <span className="proyecto-nombre">{project.title}</span>
              <a
                href={`/proyectos/${project.slug}`}
                className="btn-ver-proyecto"
                aria-label={`Ver proyecto ${project.title}`}
              >
                👁
              </a>
            </div>
            <a
              href={project.featuredImage || "#"}
              className="glightbox"
              data-gallery="portafolio"
            >
              <img
                src={project.featuredImage || "/file.svg"}
                alt={project.title}
                loading="lazy"
              />
            </a>
          </figure>
        ))}
      </div>
    </main>
  );
}
