import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductItemPage from "./pages/ProductItemPage"


function App() {
  
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductItemPage/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
