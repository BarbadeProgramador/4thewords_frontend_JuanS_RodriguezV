import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { LandingPage } from "../pages/LandingPages"
import { LegendDetails } from "../pages/LegendDetails";
import { LegendCreate } from "../pages/LegendCreate";


export function AllRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/leyenda/:leyendaId" element={<LegendDetails/>}></Route>
                <Route exact path="/leyenda/create/" element={<LegendCreate/>}></Route>
                {/* <Route exact path="/leyenda/update/:leyendaId" element={<LegendDetails/>}></Route>
                <Route exact path="/leyenda/delete/:leyendaId" element={<LegendDetails/>}></Route> */}
            </Routes>
        </Router>
    );
}