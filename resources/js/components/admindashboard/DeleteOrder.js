import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const DeleteOrder = () => {
    let history = useHistory();
    const location = useLocation();
    const [formValue, setformValue] = React.useState({
        id: "",
    });


    const deleteProduct = () => {
        const formData = new FormData();
        formData.append("id", location.state.id);

        axios
            .post(
                "http://localhost/projectMascotitas/public/api/deleteCompra",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("response:");
                console.log(response);
                history.push("/projectMascotitas/public/admindashboard/AOrder");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <NavigationAdmin></NavigationAdmin>
            <Container className="container mt-5 p-5 col-sm-7 bg-white">
                <h1>Delete the order: <span className='text-danger'>{location.state.id}</span></h1>

                <div className='mt-4 text-center'>
                    <h3>Are you sure?</h3>
                    <Button className='btn col-sm-2' variant='primary' onClick={deleteProduct}>
                        Delete
                    </Button>
                </div>
            </Container>

        </>
    );
}

export default DeleteOrder;