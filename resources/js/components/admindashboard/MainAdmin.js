import React from 'react';
import { Button, Form, Container, CarouselItem } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';
import Main from '../mainpage/Main';

const MainAdmin = () => {
    return (
        <>
            <NavigationAdmin />

            <Container className='w-100 bg-white'>
                <img
                    className="d-block w-100"
                    src="../images/welcome.png"
                />
            </Container>
        </>
    );
}

export default MainAdmin;