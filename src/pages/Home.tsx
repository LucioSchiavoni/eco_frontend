import Layout from "@/components/Layout"
import { Navbar } from "../components/navbar/Navbar"

import CardProduct from "@/components/item/CardProduct"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"



const Home = () => {
  return (
    <Layout>
   <div className="container mx-auto px-4">
        <header className="py-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Navbar />
           
            <div className="hidden md:block w-full">
              <input 
                type="search" 
                placeholder="Buscar..." 
                className="w-full border  rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-zinc-800"
              />
            </div>
            <div className="  flex items-center gap-4">
              <Button variant="outline" size="icon" className="w-12 h-12">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Carrito de compras</span>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">Iniciar sesion</Button>
                <Button>Registrate</Button>
              </div>
            </div>
          </div>
        </header>
        
        <main>
          <div className="flex justify-center items-center">
            <CardProduct />
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Home