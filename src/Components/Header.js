import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <NavLink to="/">React Shopping Cart</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </header>
  );
};

export default Header;
