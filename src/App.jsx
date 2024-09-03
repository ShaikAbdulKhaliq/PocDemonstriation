import Tilevarint1 from "./Components/Variant1/Tilevarint1"
import TileviewVariation2 from "./Components/variant2/Tilevarint2"
import Tileview from "./Components/variant3/Tilevariant3"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Tilevarint1/>}/>
      <Route path="/view1" element={<TileviewVariation2/>}/>
      <Route path="/view2" element={<Tileview/>}/>
    </Routes>
    </BrowserRouter>
     {/* <TileviewVariation2/> */}
    </>
  )
}

export default App
