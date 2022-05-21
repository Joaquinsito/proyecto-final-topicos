import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useLocation} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const EditProduct = () => {
    const location = useLocation();
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
        id: "",
        name: "",
        lastname: "",
        address: "",
        email: "",
    });
    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("id", location.state.id);
        formData.append("name", formValue.name);
        formData.append("lastname", formValue.lastname);
        formData.append("address", formValue.address);

        axios
            .post(
                "http://localhost/projectMascotitas/public/api/updateData",
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
                    title: 'User edited successfully'
                  })
                history.push("/projectMascotitas/public/admindashboard/AUsers");
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
            <h1>Edit Users</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={location.state.name}
                        name="name"
                        value={formValue.name}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={location.state.lastname}
                        name="lastname"
                        value={formValue.lastname}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={location.state.address}
                        name="address"
                        value={formValue.address}
                        onChange={onChange}
                        />
                </Form.Group>
                <div align="center">
                    <Button variant="secondary" type="submit">
                        Edit user
                    </Button>
                </div>
            </Form>
        </Container>
    </>
    );
}

export default EditProduct;