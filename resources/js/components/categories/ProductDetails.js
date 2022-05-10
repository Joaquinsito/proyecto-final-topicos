import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap"

const Details = (props) => {

    return (
        <Container>
            <Row>
                <Col sm="7">Imagen</Col>
                <Col sm="5">
                    <Row>{props.data}</Row>
                    <Row><Col>Nombre Producto</Col></Row>
                    <Row><Col>description</Col></Row>
                    <Row><Col>Price</Col></Row>
                    <Row><Col>Stock</Col></Row>
                    <Row><Col>Amount</Col></Row>
                    <Row><Col sm="3"><Button>Buy</Button></Col></Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Details;