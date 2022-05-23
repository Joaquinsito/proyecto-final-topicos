import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const DeleteCategories = () => {
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
                "http://localhost/projectMascotitas/public/api/deletecategory",
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
                history.push("/projectMascotitas/public/admindashboard/ACategories");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <NavigationAdmin></NavigationAdmin>
            <Container className="container mt-5 p-5 col-sm-6 bg-white">
                <h1>Delete the category: <span className='text-danger'>{location.state.name}</span> </h1>
            

                <div className='text-center mt-5'>
                    <h3>Are you sure?</h3>
                    <Button className='btn col-sm-2' variant='primary' onClick={deleteProduct}>
                        Delete
                    </Button>
                </div>

            </Container>
        </>
    );
}

export default DeleteCategories;