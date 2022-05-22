import React, { useEffect, useState } from "react";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap"
import NavigationUser from "../user/NavUser"
import { useLocation, useHistory } from "react-router-dom";
const orderUser = () =>{
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
            axios.post('http://localhost/projectMascotitas/public/api/compraUser', formData, 
            {headers:{'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'}})
                                    .then((response) => {
                                        setData(response.data);
                                    });
            setLoading(false);                      
        };

    return (
        <> 
            <NavigationUser />
            <Container className="container mt-5 p-5 col-sm-9 bg-white">
                <h1 className="text-center">Orders</h1>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>ID client</th>
                            <th>ID producto</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.user_id}</td>
                                <td>{dataItem.products_id}</td>
                                <td>{dataItem.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default orderUser;