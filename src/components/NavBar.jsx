import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
        </MenuButton>
        <MenuList>
            <MenuItem>Alimentos</MenuItem>
            <MenuItem>Peluqueria</MenuItem>
            <MenuItem>Accesorios</MenuItem>
            <MenuItem>Juguetes</MenuItem>
        </MenuList>
        </Menu>
 );
}

export default Navbar