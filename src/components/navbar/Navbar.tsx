import { NavbarDsk } from "./NavbarDsk"
import NavbarMb from "./NavbarMb"



export const Navbar = () => {
  return (
    
    <>
    <div className="hidden md:block">
      <nav className="justify-center items-center flex py-8  ">
         <NavbarDsk/>
      </nav>
       
    </div>
    <div className="md:hidden">
        <NavbarMb/>
    </div>
    </>
  )
}
