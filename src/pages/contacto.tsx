import { tinaClient } from "../lib/tina";

export default async function ContactoPage() {
  const contacto = await (tinaClient as any).getDocument("contacto", "contacto");

  return (
    <main>
      <section className="contenido-centrado">
        <h2>{contacto?.title || "Contacto"}</h2>
        <p>{contacto?.content || "Escríbeme para agendar una sesión o conocer más sobre mi trabajo."}</p>
        <p>Correo: contacto@pazjaviera.cl &nbsp;|&nbsp; Instagram: @pazjaviera</p>
      </section>
    </main>
  );
}
