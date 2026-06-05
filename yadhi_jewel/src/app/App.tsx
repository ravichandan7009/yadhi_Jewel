import { Outlet } from "react-router-dom"
import Navbar from "../shared/components/Navbar"



function App() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Yadhi's Jewells</h1>
        <Outlet />
      </main>
    </>
  )

}

export default App
