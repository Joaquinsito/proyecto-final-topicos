import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/projectMascotitas/public/">Mascotitas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link}to="/projectMascotitas/public/Home">Products</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/projectMascotitas/public/categories/Food">
                                Food
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/projectMascotitas/public/categories/Toys">
                                Toys
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/projectMascotitas/public/categories/Clothes">
                                Clothes
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/projectMascotitas/public/Home">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link}to="/projectMascotitas/public/Login">Login</Nav.Link>
                <Nav.Link as={Link}to="/projectMascotitas/public/Home">Register</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;


