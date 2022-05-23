import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useLocation} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const DeleteProduct = () =>{
    let history = useHistory();
    const location = useLocation();
    const [formValue, setformValue] = React.useState({
        name: "",
    });


    const deleteProduct = () => {
        const formData = new FormData();
        formData.append("name", location.state.name);

        axios
            .post(
                "http://localhost/projectMascotitas/public/api/deleteproduct",
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
                history.push("/projectMascotitas/public/admindashboard/AProducts");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>  
        <NavigationAdmin></NavigationAdmin>
        <Container className="container mt-5 p-5 col-sm-7 bg-white">
                <h1>Delete the product: <span className='text-danger'>{location.state.name}</span> </h1>
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

export default DeleteProduct;