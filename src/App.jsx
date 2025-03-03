// Authors: Juan S. Rodriguez 
import './App.css'
import  { LegendsGrid }from './components/Legends_Grid'
import { Header } from './components/Header'
import { AllRoutes } from './routes/routes'
import { getData } from './data/httpClient'

function App() {


  return (
    <>
     <Header/>
     <AllRoutes/>
    </>
  )
}

export default App
