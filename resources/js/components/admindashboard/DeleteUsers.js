import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useLocation} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const DeleteUser = () =>{
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
                "http://localhost/projectMascotitas/public/api/deleteUser",
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
                history.push("/projectMascotitas/public/admindashboard/AUsers");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>  
        <NavigationAdmin></NavigationAdmin>
            <Container>
                <h1>Delete the User: {location.state.email}</h1>
                <h4>are you sure?</h4>
                <Button onClick={deleteProduct}>
                    Delete
                </Button>
            </Container>
        </>
    );
}

export default DeleteUser;