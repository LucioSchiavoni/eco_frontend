
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'

const NavbarMb = () => {

  return (
    <nav className="px-3 py-3 flex gap-2 border">
        <img src="" alt="icono" />
        <div  className="absolute right-2 top-2">
    
<Menu>
    
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} >
        {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
      </MenuButton>
      <MenuList>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>Registro</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
  </div>
  
<input type="text" className="px-3 rounded-md border py-1 focus:ring-1 focus:ring-blue-500 focus:outline-none" placeholder="Buscar.." />

  </nav>
  )
}

export default NavbarMb