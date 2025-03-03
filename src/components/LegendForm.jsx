import { useState } from "react";

export function LegendForm({ handleSubmit }) {
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
    if (["categoria", "provincia", "canton", "distrito"].includes(name)) {
      setFormData({ ...formData, [name]: { nombre: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
      <textarea name="txt_descrip" value={formData.txt_descrip} onChange={handleChange} placeholder="Descripción" />
      <input type="date" name="fecha_leyenda" value={formData.fecha_leyenda} onChange={handleChange} />
      <textarea name="historia" value={formData.historia} onChange={handleChange} placeholder="Historia" />
      <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} placeholder="URL de Imagen" />
      <input type="text" name="categoria" value={formData.categoria.nombre} onChange={handleChange} placeholder="Categoría" />
      <input type="text" name="provincia" value={formData.provincia.nombre} onChange={handleChange} placeholder="Provincia" />
      <input type="text" name="canton" value={formData.canton.nombre} onChange={handleChange} placeholder="Cantón" />
      <input type="text" name="distrito" value={formData.distrito.nombre} onChange={handleChange} placeholder="Distrito" />
      <button type="submit">Enviar</button>
  </form>
  );
}
