import React from "react";
import { NavLink, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="./AboutPage"> About this website </NavLink>
      <NavLink to="./DiscoverMovies"> Discover Movies </NavLink>
      <NavLink to="./HomePage"> Home Page</NavLink>
    </div>
  );
}
