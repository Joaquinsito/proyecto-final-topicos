import React, { useState, useEffect } from 'react';
import { Button, Container, Table, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const AddCategories = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
    });
    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("name", formValue.name);


        axios
            .post(
                "http://localhost/projectMascotitas/public/api/createcategory",
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
                Toast.fire({
                    icon: 'success',
                    title: 'Product added successfully'
                  })
                history.push("/projectMascotitas/public/admindashboard/ACategories");
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };
    return (
        <>
        <NavigationAdmin />
        <Container>
            <br />
            <br />
            <h1>Add a new category</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name of the category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formValue.name}
                        onChange={onChange}
                    />
                </Form.Group>
                <div align="center">
                    <Button variant="secondary" type="submit">
                        Add categories
                    </Button>
                </div>
            </Form>
        </Container>
    </>
    );
}

export default AddCategories;