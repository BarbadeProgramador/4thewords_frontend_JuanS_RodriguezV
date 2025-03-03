
import { LegendForm } from "../components/LegendForm";

export function LegendCreate() {
  const handleSubmit = async (formData) => {
    console.log("Enviando datos:", formData); // Para depuración

    try {
      const response = await fetch("http://127.0.0.1:8000/leyendas/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar la leyenda");
      }

      const data = await response.json();
      console.log("Leyenda guardada:", data);
      alert("Leyenda guardada con éxito");
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un error al guardar la leyenda.");
    }
  };

  return <LegendForm onSubmit={handleSubmit} />;
}
