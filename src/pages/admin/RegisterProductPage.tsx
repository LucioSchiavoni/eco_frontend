import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductForm from "@/components/forms/ProductForm"
import Layout from "@/components/Layout"
import Header from "@/components/navbar/Header"

const RegisterProductPage = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Header/>
      <div className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="">
          <div className="p-6 sm:p-10">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-zinc-800">Registrar Nuevo Producto</h1>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al Inicio</span>
              </Button>
            </div>
            <ProductForm />
          </div>
        </div>
      </div>
    </div>
    </Layout>
    
  )
}

export default RegisterProductPage