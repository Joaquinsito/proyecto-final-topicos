
import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap"

const Food = (props) => {
    
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        getProducts()
    },[])


    const getProducts = async () => {
        setLoading(true);
        axios.post('http://localhost/projectMascotitas/public/api/food')
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
                    <h2>Products - Food</h2>
                </center>
                <hr />
            <Row>
            {data.map((dataItem) => (
            <Col sm={3}  key={dataItem.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{dataItem.name}</Card.Title>
                        <Card.Text>
                            {dataItem.description}
                        </Card.Text>
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
export default Food;