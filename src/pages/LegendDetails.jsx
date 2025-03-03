import { Navigateparam } from "../components/ButtonNavigate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../data/httpClient";

export function LegendDetails() {
  const { leyendaId } = useParams();
  const [leyenda, SetLeyenda] = useState([]);

  useEffect(() => {
    getData(`leyendas/${leyendaId}`).then((data) => {
      SetLeyenda(data);
      console.log(data);
    });
  }, [leyendaId]);

  // Función para convertir fecha en relativa
  function getRelativeDate(dateString) {
    if (!dateString) return "Fecha no disponible";

    const fecha = new Date(dateString);
    const ahora = new Date();

    const diferenciaAnios = ahora.getFullYear() - fecha.getFullYear();
    const diferenciaMeses = ahora.getMonth() - fecha.getMonth();
    const diferenciaDias = ahora.getDate() - fecha.getDate();

    if (diferenciaAnios > 0) {
      return `Hace ${diferenciaAnios} ${diferenciaAnios === 1 ? "año" : "años"}`;
    } else if (diferenciaMeses > 0) {
      return `Hace ${diferenciaMeses} ${diferenciaMeses === 1 ? "mes" : "meses"}`;
    } else if (diferenciaDias > 0) {
      return `Hace ${diferenciaDias} ${diferenciaDias === 1 ? "día" : "días"}`;
    } else {
      return "Hoy";
    }
  }

  return (
    <div className="relative w-full">
      {/* Botones en la parte superior derecha */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700">
          Eliminar Leyenda
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          Actualizar Leyenda
        </button>
      </div>

      <Navigateparam />

      {/* Contenedor con imagen a la izquierda e información a la derecha */}
      <div className="flex items-start gap-6 bg-gray-800/50 rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto mt-10">
        {/* Imagen a la izquierda */}
        <div className="w-1/2 flex justify-center">
          <img
            className="w-full rounded-lg"
            src="https://i.pinimg.com/originals/11/ee/19/11ee19ca756ad0f2fa28a4e78eab0b29.jpg"
            alt={leyenda?.nombre || "Leyenda sin nombre"}
          />
        </div>

        {/* Información a la derecha */}
        <div className="w-1/2 text-white">
          <p className="text-xl font-bold">
            <strong>Nombre: </strong>
            {leyenda?.nombre || "Desconocido"}
          </p>
          <p className="text-lg">
            <strong>Fecha: </strong>
            {getRelativeDate(leyenda?.fecha_leyenda)}
          </p>
          <p className="text-md">
            <strong>Descripción: </strong>
            {leyenda?.txt_descrip || "Sin descripción"}
          </p>
          <p className="text-md">
            <strong>Historia: </strong>
            {leyenda?.historia || "No hay historia disponible"}
          </p>
        </div>
      </div>
    </div>
  );
}
