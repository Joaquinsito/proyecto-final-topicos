import React  from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";
import Swal from 'sweetalert2'; 
import NavigationAdmin from './NavAdmin';
import Main from '../mainpage/Main';

const MainAdmin = () => {
    return (
        <>
        <NavigationAdmin/>
        <Container>
            <h1>Welcome Admin</h1>
        </Container>
        </>
    );
}

export default MainAdmin;