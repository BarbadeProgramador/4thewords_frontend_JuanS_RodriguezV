import { Link } from "react-router-dom";
import "../styles/components/CardLegend.css";

export function LegendCard({ legend }) {
  return (
    <div className="rounded-xl border-2 border-black p-4 flex flex-col bg-gray-800/50">
      <Link to={"leyenda/" + legend.id}>
        <div className="w-full aspect-video relative mb-2">
          <img
            src="https://i.pinimg.com/originals/11/ee/19/11ee19ca756ad0f2fa28a4e78eab0b29.jpg"
            alt="Leyenda"
            className="rounded-lg"
          />
        </div>
        <div className="flex-grow text-white">
          <p className="text-sm mb-2 line-clamp-3">{legend.txt_descrip}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            <Tag text={legend.categoria.nombre} color="bg-blue-500/20 text-blue-300" />
            <Tag text={legend.canton.nombre} color="bg-green-500/20 text-green-300" />
            <Tag text={legend.distrito.nombre} color="bg-yellow-500/20 text-yellow-300" />
            <Tag text={legend.provincia.nombre} color="bg-red-500/20 text-red-300" />
          </div>
        </div>
      </Link>
    </div>
  );
}

function Tag({ text, color }) {
  return <span className={`text-xs px-2 py-1 rounded-full ${color}`}>{text}</span>;
}
