import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CardProduct from "./components/item/CardProduct"

function App() {
  
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
        <Route path="/card" element={<CardProduct/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
