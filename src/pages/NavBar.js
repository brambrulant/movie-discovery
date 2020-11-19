import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/about"> About this website </NavLink>
      <NavLink to="/discover"> Discover Movies </NavLink>
      <NavLink to="/"> Home Page</NavLink>
    </div>
  );
}
