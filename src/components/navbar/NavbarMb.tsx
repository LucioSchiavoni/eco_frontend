import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const NavbarMb = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img src="/placeholder.svg?height=10&width=10" alt="Logo" className="w-10 border rounded-full h-10 shadow-xl" />
        <input 
          type="search" 
          placeholder="Buscar..." 
          className="w-full max-w-[200px] border px-3 py-1 rounded-md focus:ring-2 focus:ring-zinc-600 focus:outline-none"
        />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium">Inicio</a>
            <a href="#" className="text-lg font-medium">Login</a>
            <a href="#" className="text-lg font-medium">Registro</a>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default NavbarMb