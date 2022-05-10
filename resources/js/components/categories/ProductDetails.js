import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Details = props => {
    const location = useLocation();
    console.log("En el product details")
    const param = location.state.id;
    console.log(param)

    const style ={
        cardImg: {
            objectFit: 'cover',
            borderRadius: 25,
            width: '80%',
            height: '250px',
        }
    }
    return (
        <Container className="pt-4">
            <Container className="shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col sm="6"><Image src={location.state.image} style={style.cardImg} className="mx-auto"></Image></Col>
                    <Col sm="6">
                        <Row><Col className="h1 bold">{location.state.name}</Col></Row>
                        <Row><Col className="h5">{location.state.description}</Col></Row>
                        <Row><Col className="text-muted"> Stock: {location.state.stock}</Col></Row>
                        <Row><Col className="strong">Price: {location.state.price}</Col></Row>
                        <Row><Col sm="3"><Button>Buy</Button></Col></Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Details;