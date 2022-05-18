import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button, Image, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavigationUser from "../user/NavUser";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const Details = props => {
    const location = useLocation();
    const param = location.state.id;
    let history = useHistory();


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


    const style ={
        cardImg: {
            objectFit: 'cover',
            borderRadius: 25,
            width: '80%',
            height: '250px',
        }
    }

    const [formValue, setformValue] = React.useState({
        id: "",
        product_id: "",
        amount: "",
    });

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("id", location.state.id_user);
        formData.append("product_id", param);
        formData.append("amount", formValue.amount);
        axios
            .post(
                "http://localhost/projectMascotitas/public/api/createCompra",
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
                    title: 'Compra successfully'
                })
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };


    return (
        <>
        <NavigationUser/>
        <Container className="pt-4">
            <Container className="shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col sm="6"><Image src={location.state.image} style={style.cardImg} className="mx-auto"></Image></Col>
                    <Col sm="6">
                        <Row><Col className="h1 bold">{location.state.name}</Col></Row>
                        <Row><Col className="h5">{location.state.description}</Col></Row>
                        <Row><Col className="text-muted"> Stock: {location.state.stock}</Col></Row>
                        <Row><Col className="strong">Price: {location.state.price}</Col></Row>
                        <Row><Col className="strong">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="number" name="amount" max={location.state.stock} value={formValue.amount}
                                    onChange = {onChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col></Row>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Details;