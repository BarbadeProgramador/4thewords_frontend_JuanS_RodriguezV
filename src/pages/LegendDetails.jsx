import { Navigateparam } from "../components/ButtonNavigate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getData } from "../data/httpClient";



export function LegendDetails() {	

    
    const { leyendaId } = useParams();
    const [leyenda, SetLeyenda] = useState([]);
    useEffect(() => {
        getData(`leyendas/${leyendaId}`).then((data) => {
            SetLeyenda(data);
            console.log(data);
        });
    }, [leyendaId])


    return (
        <div>
            <Navigateparam />   
            
            <div className="comic-container">
                <div className="comic-card">
                    <div className="comic-image">
                    <img 
                        src="https://i.pinimg.com/originals/11/ee/19/11ee19ca756ad0f2fa28a4e78eab0b29.jpg"
                        alt={leyenda?.nombre || "Leyenda sin nombre"} 
                    />
                    </div>

                    <div className="comic-content">
                    <p className="comic-title">
                        <strong>Nombre: </strong>
                        {leyenda?.nombre || "Desconocido"}
                    </p>
                    <p className="comic-release">
                        <strong>Fecha: </strong>
                        {leyenda?.fecha_leyenda || "No disponible"}
                    </p>
                    <p className="comic-description">
                        <strong>Descripción: </strong>
                        {leyenda?.txt_descrip || "Sin descripción"}
                    </p>
                    <p className="comic-description">
                        <strong>Historia: </strong>
                        {leyenda?.historia || "No hay historia disponible"}
                    </p>
                    </div>   
                </div> 
                </div>

        </div>
    );

}

