import { tinaClient } from "../lib/tina";

export default async function HomePage() {
  // Obtener proyectos de TinaCMS
  const projects = await tinaClient.getCollection("proyecto");

  return (
    <main>
      <section id="galeria" className="galeria">
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
      </section>
    </main>
  );
}
