import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">WELCOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}
