import { useState } from "react";

export function LegendForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    txt_descrip: "",
    fecha_leyenda: "",
    historia: "",
    imagen: "",
    categoria: { nombre: "" },
    provincia: { nombre: "" },
    canton: { nombre: "" },
    distrito: { nombre: "" }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    if (keys.length > 1) {
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: { ...prev[keys[0]], [keys[1]]: value }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit !== "function") {
      console.error("onSubmit no es una función. Verifica que se está pasando correctamente.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
      <textarea name="txt_descrip" placeholder="Descripción" value={formData.txt_descrip} onChange={handleChange} />
      <button type="submit">Guardar Leyenda</button>
    </form>
  );
}
