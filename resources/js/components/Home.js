
import { bottom } from "@popperjs/core";
import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Image, Button} from "react-bootstrap";
import { useHistory, useNavigate, useLocation } from "react-router-dom";
import NavigationUser from "./user/NavUser"

const Home = (props) => {
    const location = useLocation();
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        getProducts()
    },[])
    let nav = useHistory();

    const style ={
        cardImg: {
            objectFit: 'cover',
            borderRadius: 25,
            width: '80%',
            height: '250px',
        }
    }
    const getProducts = async () => {
        setLoading(true);
        axios.post('http://localhost/projectMascotitas/public/api/indexproduct',
        {headers:{'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + location.state.token,
        'Accept': 'application/json'}})
                                .then((response) => {
                                    setData(response.data);
                                });
        setLoading(false);
        console.log(data);                        
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
                id_user : location.state.id
            },
        });
    };


    return (
       <>   
            <NavigationUser />
            <Container>
            <Row>
            {data.map((dataItem) => (
            <Col sm={3}   key={dataItem.id} className="m-4">
                <Card style={{ width: '18rem'}} className="mb-4">
                    <Card.Img src={dataItem.image} style={style.cardImg} className="mx-auto"/>
                    <Card.Body>
                        <Card.Title>{dataItem.name}</Card.Title>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price: {dataItem.price}</ListGroupItem>
                            <ListGroupItem>Stock: {dataItem.stock}</ListGroupItem>
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
export default Home;