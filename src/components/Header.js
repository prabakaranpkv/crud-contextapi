import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

export default function Header() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Profile List</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
