import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const  NavigationUser = props =>  {
    const location = useLocation();
    let history = useHistory();

    const toMain = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/user/Mainprofile",
            state: {
                token: location.state.token,
                id: location.state.id
           },
         }
        )
    }

    const toHome = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/Home",
            state: {
                token: location.state.token,
                id: location.state.id
           },
         }
        )
    }

    const toOrder = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/user/OrderUser",
            state: {
                token: location.state.token,
                id: location.state.id
           },
         }
        )
    }

    const toCategoryFood = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/categories/Food",
            state: {
                token: location.state.token,
                id: location.state.id
           },
         }
        )
    }

    const toCategoryToy = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/categories/Toys",
            state: {
                token: location.state.token,
                id: location.state.id
           },
         }
        )
    }

    const toCategoryClothes = (e) =>{
        history.push({
            pathname: "/projectMascotitas/public/categories/Clothes",
            state: {
                token: location.state.token,
                id: location.state.id_user
           },
         }
        )
    }

     return ( 
            <Navbar bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/projectMascotitas/public/">Mascotitas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link  onClick={toHome}>Products</Nav.Link>
                                <NavDropdown title="Categories" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={toCategoryFood}>
                                        Food
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={toCategoryToy}>
                                        Toys
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={toCategoryClothes}>
                                        Clothes
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                        </Navbar.Collapse>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={toMain}>
                                        Main profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item  onClick={toOrder}>
                                        Orders
                                    </NavDropdown.Item>
                                </NavDropdown>
                        <Nav.Link as={Link} to="/projectMascotitas/public/">Logout</Nav.Link>
                    </Container>
                </Navbar>
        );
}

export default NavigationUser;