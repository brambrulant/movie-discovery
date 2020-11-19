import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">WELCOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">about</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />
    </div>
  );
}
