
import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap"
import ProductDetails from "./ProductDetails"
import { useHistory, useNavigate, useLocation} from "react-router-dom";
import { left } from "@popperjs/core";
import NavigationUser from "../user/NavUser"


const Product = (props) => {
    const location = useLocation();
    console.log(location.state.id);
    const style ={
        cardImg: {
            objectFit: 'cover',
            borderRadius: 25,
            width: '80%',
            height: '250px',
        }
    }   

    let nav = useHistory();
    
    const formData = new FormData();
    formData.append('category_id', props.categories)
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        getProducts()
    },[])


    const getProducts = async () => {
        setLoading(true);
        axios.post('http://localhost/projectMascotitas/public/api/categories', formData, 
        {headers:{'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'}})
                                .then((response) => {
                                    setData(response.data);
                                });
        setLoading(false);                      
    };

    const toComponentB = (dataItem) => {
        nav.push({
            pathname: "/projectMascotitas/public/categories/Details",
            state: {
                id: dataItem.id,
                name: dataItem.name,
                image: dataItem.image,
                price: dataItem.price,
                stock: dataItem.stock,
                description: dataItem.description,
                id_user: location.state.id
            },
        });
    };


    return (
        <> 
            <NavigationUser/>
            <Container>
            <center>
                    <br />
                    <h2>Products</h2>
                </center>
                <hr />
            <Row>
            {data.map((dataItem) => (
            <Col sm={3}  key={dataItem.id}>
                <Card style={{ width: '18rem' }} className="mb-4 shadow p-3 mb-5 bg-white rounded">
                    <Card.Img variant="top" src={dataItem.image} style={style.cardImg} className="mx-auto"/>
                    <Card.Body>
                        <Card.Title>{dataItem.name}</Card.Title>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price: {dataItem.price}</ListGroupItem>
                            <ListGroupItem>Stock: {dataItem.stock}</ListGroupItem>
                            <p className="d-none"> {dataItem.description}</p>
                    </ListGroup>
                    <Button onClick={() => {
                        toComponentB(dataItem);
                    }}>View Details</Button>
                </Card>
            </Col>         
            ))}
            </Row>
            </Container>
         </>
    )
    

}

export default Product;