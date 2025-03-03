
import { LegendsGrid } from '../components/Legends_Grid'



export function LandingPage() {


  return (
    <>
     <main className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <LegendsGrid />
      </div>
    </main>
    </>
  )
}