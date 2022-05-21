
import React, { useEffect, useState } from "react";
import NavigationUser from "../user/NavUser"
import { useLocation, useHistory } from "react-router-dom";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap"
import Swal from 'sweetalert2';


const Mainprofile = () => {
        let history = useHistory();    
        const location = useLocation();
        const id = location.state.id;
        localStorage.setItem('User_Level', id);


        const formData = new FormData();
        formData.append('id', location.state.id)
        const [data, setData] = useState([]);
        const [isLoading, setLoading] = useState(false);
        useEffect(()=>{
            getData()
        },[]);
    
    
        const getData = async () => {
            setLoading(true);
            axios.post('http://localhost/projectMascotitas/public/api/userData', formData, 
            {headers:{'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + location.state.token,
            'Accept': 'application/json'}})
                                    .then((response) => {
                                        setData(response.data);
                                    });
            setLoading(false);                      
        };


        let nav = useHistory();
        const toComponentB = (dataItem) => {
            nav.push({
                pathname: "/projectMascotitas/public/user/EditProfile",
                state: {
                    id: dataItem.id,
                    name: dataItem.name,
                    lastname: dataItem.lastname,
                    address: dataItem.address,
                    email: dataItem.email,
                },
            });
        };
    
        return (
            <> 
            <NavigationUser/>
            <Container>
            <center>
                    <br />
                    <h2>Datos</h2>
                </center>
                <hr />
            <Row>
            {data.map((dataItem) => (
            <Col sm={3}  key={dataItem.id}>
                <Card style={{ width: '18rem' }} className="mb-4 shadow p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title>Name: {dataItem.name}</Card.Title>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Lastname: {dataItem.lastname}</ListGroupItem>
                            <ListGroupItem>Address: {dataItem.address}</ListGroupItem>
                            <ListGroupItem>Email: {dataItem.email}</ListGroupItem>
                    </ListGroup>
                    <Button onClick={() => {
                        toComponentB(dataItem)
                    }}>Edit</Button>
                </Card>
            </Col>         
            ))}
            </Row>
            </Container>
         </>
        )
    
}

export default Mainprofile;