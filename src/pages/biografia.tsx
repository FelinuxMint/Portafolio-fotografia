import { tinaClient } from "../lib/tina";

export default async function BiografiaPage() {
  const biografia = await (tinaClient as any).getDocument("biografia", "biografia");

  return (
    <main>
      <section className="contenido-centrado">
        <h2>{biografia?.title || "Biografía"}</h2>
        <p>{biografia?.content || "Fotógrafa dedicada a capturar momentos y emociones a través de la lente, con especial interés en la luz natural y los detalles cotidianos."}</p>
      </section>
    </main>
  );
}
