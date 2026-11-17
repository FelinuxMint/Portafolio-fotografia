import { tinaClient } from "../lib/tina";

export default async function ExposicionesPage() {
  const exposiciones = await (tinaClient as any).getDocument("exposiciones", "exposiciones");

  return (
    <main>
      <section className="contenido-centrado">
        <h2>{exposiciones?.title || "Exposiciones"}</h2>
        <p>{exposiciones?.content || "Próximamente: información sobre exposiciones colectivas e individuales."}</p>
      </section>
    </main>
  );
}
