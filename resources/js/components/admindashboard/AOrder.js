import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const AOrder = () => {
    let history = useHistory();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/projectMascotitas/public/api/allcompraUser")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);

    const toDelete = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/DeleteOrder",
            state: {
                id: dataItem.id,
            },
        });
    };

    return (
        <>
            <NavigationAdmin />
            <Container className="container mt-5 p-5 col-sm-10 bg-white">

                <h2 className='text-center'>Orders</h2>

                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>user_id</th>
                            <th>Product name</th>
                            <th>product_id</th>
                            <th>amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.user_id}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.products_id}</td>
                                <td>{dataItem.amount}</td>
                                <td><Button variant="danger"
                                    onClick={() => {
                                        toDelete(dataItem);
                                    }}><BsFillTrashFill /></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default AOrder;