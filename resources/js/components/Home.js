
import { bottom } from "@popperjs/core";
import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Image} from "react-bootstrap"

const Home = (props) => {
    
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        getProducts()
    },[])

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
        axios.post('http://localhost/projectMascotitas/public/api/indexproduct')
                                .then((response) => {
                                    setData(response.data);
                                });
        setLoading(false);
        console.log(data);                        
    };

    return (
       <>   
            <Container>
                <center>
                    <br />
                    <h2>Product</h2>
                </center>
                <hr />
                {/* <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Existencias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name}</td>
                                <td>${dataItem.price}</td>
                                <td>{dataItem.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table> */}
            </Container>

            <Container>
            <Row>
            {data.map((dataItem) => (
            <Col sm={3}   key={dataItem.id}>
                <Card style={{ width: '18rem'}} className="mb-4">
                    <Card.Img src={dataItem.image} style={style.cardImg} className="mx-auto"/>
                    <Card.Body>
                        <Card.Title>{dataItem.name}</Card.Title>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price: {dataItem.price}</ListGroupItem>
                            <ListGroupItem>Stock: {dataItem.stock}</ListGroupItem>
                        </ListGroup>
                </Card>
            </Col>         
            ))}
            </Row>
            </Container>
       </>
    )
}
export default Home;