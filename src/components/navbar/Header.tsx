import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Navbar } from "./Navbar"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/context/store"



const Header = () => {

    const profile = useAuthStore((state) => state.profile)

  return (
    <div>
         <header className="py-4 mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Navbar />
           
            <div className="hidden md:block w-4/12">
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
                {
                    profile.username ? (
                        <div className="flex items-center gap-2">
                            <img src={profile.avatar} alt="avatar" className="w-8 h-8  rounded-full" />
                            <span className="font-semibold">{profile.username}</span>
                        </div>
                    )
                    :
              <div className="flex  gap-2">
                <Link to='/login' >
                      <Button variant="outline">Iniciar sesion</Button>
                </Link>

                <Button>Registrate</Button>
              </div>
 
                }
            </div>
          </div>
        </header>
        
        <main>
         
        </main>
    </div>
  )
}

export default Header