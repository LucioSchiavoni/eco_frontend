import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductItemPage from "./pages/ProductItemPage"
import LoginPage from "./pages/LoginPage"
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';

const AppContent =() => {
  
  return (
    <>

  <Routes>
    <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductItemPage/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<LoginPage/>}/>
  </Routes>

    </>
  )
}

function App() {
  return (
    <>
    <BrowserRouter basename="/">
       <AppContent />
    <ToastContainer 
    position="top-right"
    pauseOnHover={false}
    pauseOnFocusLoss={false}
  />
  </BrowserRouter>
    </>
 

  )
}

export default App
