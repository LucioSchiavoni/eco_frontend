import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface Route {
  name: string;
  path: string;
}

export default function SheetAdmin() {
  const [open, setOpen] = useState(false)

  const routes: Route[] = [
    { name: "Inicio", path: "/" },
    { name: "Registrar producto", path: "/create/product" },
    { name: "Crear Categoria", path: "/contacto" },
    { name: "Crear Sub-Categoria", path: "/contacto" },
    { name: "Pedidos", path: "/sobre-nosotros" },
    { name: "Stock", path: "/contacto" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Abrir menú de navegación">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Navegación</SheetTitle>
        </SheetHeader>
        <nav className="mt-6">
          <ul className="space-y-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="block py-2 px-4 text-lg hover:bg-zinc-100 rounded-md transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}