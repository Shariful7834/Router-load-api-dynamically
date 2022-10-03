import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/countries">Countries</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  );
};

export default Header;
