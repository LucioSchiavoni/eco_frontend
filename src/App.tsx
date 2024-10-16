import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { CardItem } from "./components/item/CardItem"

function App() {
  
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<CardItem/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
