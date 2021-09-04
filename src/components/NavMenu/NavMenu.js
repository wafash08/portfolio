import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Logo, Name, Nav, NavList, NavLink } from "./NavMenu.Styled";

const NavMenu = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <Avatar />
        </Link>
        <Name>Wafa Saefulhaq</Name>
      </Logo>
      <NavList>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/blog">Blog</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="portfolio">Portfolio</NavLink>

        <NavLink to="/timeline">timeline</NavLink>
      </NavList>
    </Nav>
  );
};

export default NavMenu;
