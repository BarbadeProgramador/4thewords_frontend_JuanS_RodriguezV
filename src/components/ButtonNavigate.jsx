import { useNavigate } from "react-router-dom";

export function Navigateparam(){

    const navigate = useNavigate();

    return(
        <div className="container">
        <button 
            onClick={() => navigate(-1)} 
            className="buttonNavigate">
            <div className="comic-arrow"></div>
        </button>
        </div>
    );

}