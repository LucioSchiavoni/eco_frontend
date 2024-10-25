import { ShoppingCart, LogOut, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Navbar } from "./Navbar"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/context/store"
import SheetAdmin from "../button/SheetAdmin"

const Header = () => {
    const profile = useAuthStore((state) => state.profile)
    const userRol = profile?.rolUser;
    const logout = useAuthStore((state) => state.logout)

    return (
        <div>
            <header className="py-4 mb-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <Navbar />
                    <div className="hidden w-full md:w-4/12 md:flex items-center justify-between">

                    
                    <div className="relative flex-grow mr-2">
                            <input 
                                type="search" 
                                placeholder="Buscar..." 
                                className="w-full border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
</div>
                    <div className="hidden md:flex items-center gap-4">
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
                                            className='h-6 w-6'
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
                                            className='h-6 w-6'
                                            aria-hidden="true"
                                        />
                                    </button>
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
                            )
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