import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">WELCOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/discover">Search for Movies</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}
