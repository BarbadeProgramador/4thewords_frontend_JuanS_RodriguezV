import { useEffect, useState } from "react"
import { LegendCard } from "./CardLegend"
import { getData } from "../data/httpClient"
import { FiltersSection } from "./FilterSection"
import { Link } from "react-router-dom";

// Datos de ejemplo actualizados para las tarjetas

export  function LegendsGrid() {

  const [legendsData , setLegend ] = useState([]);
  const [filteredLegends, setFilteredLegends] = useState([]);

  useEffect(() => {
    getData('leyendas/')
      .then((data) => {
        setLegend(data);
        setFilteredLegends(data);
      });
  }, []);


  const applyFilters = (filters) => {

    console.log("Aplicando filtros", filters);
    const filtered = legendsData.filter((legend) => {
      return (
        (!filters.categoria || legend.categoria.nombre === filters.categoria) &&
        (!filters.canton || legend.canton.nombre === filters.canton) &&
        (!filters.distrito || legend.distrito.nombre === filters.distrito) &&
        (!filters.provincia || legend.provincia.nombre === filters.provincia)
      );
    })
    setFilteredLegends(filtered);
  };

  return (
    <section className="w-full flex bg-gray-800/50">
    {/* Sección de Filtros */}
    <FiltersSection data={legendsData} onApplyFilters={applyFilters} />
  
    {/* Sección de Leyendas */}
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-xl font-bold mb-6 text-center text-white">LEGENDS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredLegends.map((legend) => (
          <LegendCard key={legend.id} legend={legend} />
        ))}
      </div>
    </div>
  </section>
  
  )
}

