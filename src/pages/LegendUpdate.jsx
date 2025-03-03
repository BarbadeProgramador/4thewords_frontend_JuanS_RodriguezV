import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function UpdateLegendForm({ fetchLegendById, updateLegend }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [legend, setLegend] = useState({
    nombre: "",
    txt_descrip: "",
    fecha_leyenda: "",
    historia: "",
    imagen: "",
    categoria: "",
    provincia: "",
    canton: "",
    distrito: ""
  });

  useEffect(() => {
    async function loadLegend() {
      try {
        const data = await fetchLegendById(id);
        setLegend(data);
      } catch (error) {
        console.error("Error cargando la leyenda:", error);
      }
    }
    loadLegend();
  }, [id, fetchLegendById]);

  function handleChange(e) {
    setLegend({ ...legend, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateLegend(id, legend);
      alert("Leyenda actualizada correctamente");
      navigate("/");
    } catch (error) {
      console.error("Error actualizando la leyenda:", error);
      alert("Hubo un error al actualizar la leyenda");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <label>Nombre:</label>
      <input type="text" name="nombre" value={legend.nombre} onChange={handleChange} required />
      
      <label>Descripción:</label>
      <textarea name="txt_descrip" value={legend.txt_descrip} onChange={handleChange} required />
      
      <label>Fecha de la leyenda:</label>
      <input type="date" name="fecha_leyenda" value={legend.fecha_leyenda} onChange={handleChange} required />
      
      <label>Historia:</label>
      <textarea name="historia" value={legend.historia} onChange={handleChange} required />
      
      <label>Imagen URL:</label>
      <input type="text" name="imagen" value={legend.imagen} onChange={handleChange} required />
      
      <label>Categoría:</label>
      <input type="text" name="categoria" value={legend.categoria} onChange={handleChange} required />
      
      <label>Provincia:</label>
      <input type="text" name="provincia" value={legend.provincia} onChange={handleChange} required />
      
      <label>Cantón:</label>
      <input type="text" name="canton" value={legend.canton} onChange={handleChange} required />
      
      <label>Distrito:</label>
      <input type="text" name="distrito" value={legend.distrito} onChange={handleChange} required />
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Actualizar</button>
    </form>
  );
}
