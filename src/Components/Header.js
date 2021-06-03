import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <NavLink to="/">React Shopping Cart</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </header>
  );
};

export default Header;
