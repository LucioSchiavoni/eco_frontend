import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Navbar } from "./Navbar"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/context/store"
import SheetAdmin from "../button/SheetAdmin"
import { LogOut } from "lucide-react"


const Header = () => {

    const profile = useAuthStore((state) => state.profile)
    const userRol = profile?.rolUser;
    const logout = useAuthStore((state) => state.logout)

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
                   {profile ? (
              userRol === 'ADMIN' ? (
                <div className="flex justify-between gap-4 items-center">
                  <SheetAdmin/>
                      <button onClick={logout}>
                          <LogOut
                      size={24}
                      color={"#000"}
                      className='h-6 w-6 '
                      aria-hidden="true"
                      />
                      </button>
             </div>
              ) : userRol === 'USER' ? (
                <div className="flex items-center gap-2">
                  <p>Bienvenido {profile?.name || 'Usuario'}</p>
                    <button onClick={logout}>
                          <LogOut
                      size={24}
                      color={"#000"}
                      className='h-6 w-6 '
                      aria-hidden="true"
                      />
                      </button>
                </div>
              ) :  <div className="flex gap-2">
                <Link to='/login'>
                  <Button variant="outline">Iniciar sesión</Button>
                </Link>
                <Link to='/registro'>
                   <Button variant="outline">Registrarse</Button>
                </Link>
             
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to='/login'>
                  <Button variant="outline">Iniciar sesión</Button>
                </Link>
                <Link to='/registro'>
                   <Button variant="outline">Registrarse</Button>
                </Link>
             
              </div>
            )}
            </div>
          </div>
        </header>
        
        <main>
         
        </main>
    </div>
  )
}

export default Header