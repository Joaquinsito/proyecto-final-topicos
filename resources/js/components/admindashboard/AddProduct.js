import React, { useState, useEffect } from 'react';
import { Button, Container, Table, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';

const AddProduct = () => {

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
        category_id: "",
        description: "",
        price: "",
        stock: "",
        image: "",
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
        formData.append("category_id", formValue.category_id);
        formData.append("description", formValue.description);
        formData.append("price", formValue.price);
        formData.append("stock", formValue.stock);
        formData.append("image", formValue.image);


        axios
            .post(
                "http://localhost/projectMascotitas/public/api/createproduct",
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
                history.push("/projectMascotitas/public/admindashboard/MainAdmin");
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
            <h1>Add a new product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name of the product</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formValue.name}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Category"
                        name="category_id"
                        value={formValue.category_id}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={formValue.description}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={formValue.price}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Stock"
                        name="stock"
                        value={formValue.stock}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image"
                        name="image"
                        value={formValue.image}
                        onChange={onChange}
                    />
                </Form.Group>
                <div align="center">
                    <Button variant="secondary" type="submit">
                        Add product
                    </Button>
                </div>
            </Form>
        </Container>
    </>
    );
}

export default AddProduct;