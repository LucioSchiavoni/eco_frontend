import { Link } from 'react-router-dom';
import { useAuthStore } from '@/context/store';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import SheetAdmin from '@/components/button/SheetAdmin';
import { ShoppingCart, Menu, LogOut } from 'lucide-react';
import SearchInput from '../search/SearchInput';
import { getProduct } from '@/api/prodcut';
import { useQuery } from '@tanstack/react-query';

const NavbarMb = () => {
  const profile = useAuthStore((state) => state.profile);
  const logOut = useAuthStore((state) => state.logout);

  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: () => getProduct()
  });

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="w-full md:w-4/12 flex items-center justify-between">
        <SearchInput items={data} isLoading={isLoading}/>
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