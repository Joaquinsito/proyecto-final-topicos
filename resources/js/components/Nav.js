import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import { useHistory ,useLocation } from "react-router-dom";


const  Navigation = props =>  {    
    const location  = useLocation();
        return (    
            <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/projectMascotitas/public/">Mascotitas</Navbar.Brand>
                <Nav.Link as={Link}to="/projectMascotitas/public/">About</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link}to="/projectMascotitas/public/Login">Login</Nav.Link>
                <Nav.Link as={Link}to="/projectMascotitas/public/Register">Register</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}
       
   

export default Navigation;


