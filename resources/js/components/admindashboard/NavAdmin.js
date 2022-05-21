import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const  NavigationAdmin = props =>  {
    const location = useLocation();
    let history = useHistory();

    const toProducts = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AProducts",
         }
        )
    }

    const toOrders = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AOrder",
         }
        )
    }

    const toMain = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/MainAdmin",
         }
        )
    }

    const toUsers = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AUsers",
         }
        )
    }

    const toCategories = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/ACategories",
         }
        )
    }

    const toEmployee = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AEmployee",
         }
        )
    }

     return ( 
            <Navbar bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand>Mascotitas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link  onClick={toMain}>Main</Nav.Link>
                                <Nav.Link  onClick={toProducts}>Products</Nav.Link>
                                <Nav.Link  onClick={toOrders}>Orders</Nav.Link>
                                <Nav.Link  onClick={toUsers}>Users</Nav.Link>
                                <Nav.Link  onClick={toCategories}>Categories</Nav.Link>
                                <Nav.Link  onClick={toEmployee}>Employees</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                        </Navbar.Collapse>
                        <Nav.Link as={Link} to="/projectMascotitas/public/">Logout</Nav.Link>
                    </Container>
                </Navbar>
        );
}

export default NavigationAdmin;