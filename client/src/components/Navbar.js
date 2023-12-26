import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const NavbarContainer = styled.div`
  ${tw`bg-gray-700 p-4 flex justify-between items-center`}
`;

const Logo = styled.div`
  ${tw`text-white text-lg font-bold`}
`;

const Menu = styled.ul`
  ${tw`list-none flex gap-4`}
`;

const MenuItem = styled.li`
  ${tw`text-white cursor-pointer transition duration-300`}

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Filterfone</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Menu</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
