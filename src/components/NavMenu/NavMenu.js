import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/timeline">timeline</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
