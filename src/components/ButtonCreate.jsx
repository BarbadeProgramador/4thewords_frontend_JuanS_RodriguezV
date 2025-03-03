import { Link } from "react-router-dom";

export function CreateFormButton() {
    return (
      <Link to={"leyenda/create/"}>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Crear Leyenda</button>
      </Link>
    );
  }