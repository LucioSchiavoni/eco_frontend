import { Link } from 'react-router-dom';
import { useAuthStore } from '@/context/store';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import SheetAdmin from '@/components/button/SheetAdmin';
import { Search, ShoppingCart, Menu, LogOut } from 'lucide-react';

const NavbarMb = () => {
  const profile = useAuthStore((state) => state.profile);
  const logOut = useAuthStore((state) => state.logout);

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="w-full md:w-4/12 flex items-center justify-between">
        <div className="relative flex-grow mr-2">
          <input 
            type="search" 
            placeholder="Buscar..." 
            className="w-full border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <Button variant="outline" size="icon" className="md:hidden w-10 h-10">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Carrito de compras</span>
        </Button>
      </div>
      {profile ? (
        profile.rolUser === "ADMIN" ? (
          <SheetAdmin />
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <Button variant="ghost" size="icon"  onClick={logOut}>
                  <LogOut className="h-6 w-6" />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-lg font-medium">Inicio</Link>
              <Link to="/login" className="text-lg font-medium">Login</Link>
              <Link to="/registro" className="text-lg font-medium">Registro</Link>
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </nav>
  );
};

export default NavbarMb;