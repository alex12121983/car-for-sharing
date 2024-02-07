import { NavLink } from 'react-router-dom';

import { Nav, NavbarLink } from './Navbar.styled';

const NavBar = () => {
  return (
    <Nav>
      <NavbarLink as={NavLink} to="/">
        Home page
      </NavbarLink>
      <NavbarLink as={NavLink} to="/catalog">
        Find Auto
      </NavbarLink>
      <NavbarLink as={NavLink} to="/favorites">
        Favorite
      </NavbarLink>
    </Nav>
  );
};

export default NavBar;
