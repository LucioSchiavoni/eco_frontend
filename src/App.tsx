import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductItemPage from "./pages/ProductItemPage"
import LoginPage from "./pages/LoginPage"
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterProductPage from "./pages/admin/RegisterProductPage";

const AppContent =() => {
  
  return (
    <>

  <Routes>
    <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductItemPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/registro" element={<RegisterPage/>}/>
          <Route path="/create/product" element={<RegisterProductPage/>}/>
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
