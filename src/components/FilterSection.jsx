import { useState } from "react";
import { CreateFormButton } from "./ButtonCreate";


export function FiltersSection({ data, onApplyFilters }) {
  const [filters, setFilters] = useState({
    categoria: "",
    canton: "",
    distrito: "",
    provincia: "",
  });

  // Obtener opciones únicas de las leyendas
  const categorias = [...new Set(data.map((item) => item.categoria.nombre))];
  const cantones = [...new Set(data.map((item) => item.canton.nombre))];
  const distritos = [...new Set(data.map((item) => item.distrito.nombre))];
  const provincias = [...new Set(data.map((item) => item.provincia.nombre))];


  // Manejar cambios en los filtros
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Aplicar filtros
  const handleApplyFilters = () => {
    onApplyFilters(filters);

    console.log("ejecutando handleApplyFilters");
  };

  return (
    <div className="w-full md:w-1/4 p-4 border-r-2 border-black">
      <div className="rounded-3xl border-2 border-black p-6 h-full">
        <h2 className="text-xl font-bold mb-6">SECTION FILTERS</h2>

        <div className="space-y-4">
          {/* Categoría */}
          <div>
            <label className="block mb-2 font-medium">Categoría</label>
            <select name="categoria" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Todas las categorías</option>
              {categorias.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Cantón */}
          <div>
            <label className="block mb-2 font-medium">Cantón</label>
            <select name="canton" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Todos los cantones</option>
              {cantones.map((canton) => (
                <option key={canton} value={canton}>
                  {canton}
                </option>
              ))}
            </select>
          </div>

          {/* Distrito */}
          <div>
            <label className="block mb-2 font-medium">Distrito</label>
            <select name="distrito" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Todos los distritos</option>
              {distritos.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Provincia</label>
            <select name="provincia" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Todos las provincias</option>
              {provincias.map((provincia) => (
                <option key={provincia} value={provincia}>
                  {provincia}
                </option>
              ))}
            </select>
          </div>
          
          {/* Botón Aplicar */}
          <button
            className="w-full bg-black text-white py-2 px-4 rounded mt-4"
            onClick={handleApplyFilters}
          >
            Aplicar filtros
          </button>
        </div>
        <br />
        <CreateFormButton />
      </div>

        
    </div>
  );
}