import { NavbarDsk } from "./NavbarDsk"
import NavbarMb from "./NavbarMb"



export const Navbar = () => {
  return (
    
    <>
    <div className="hidden md:block">
        <NavbarDsk/>
    </div>
    <div className="md:hidden">
        <NavbarMb/>
    </div>
    </>
  )
}
