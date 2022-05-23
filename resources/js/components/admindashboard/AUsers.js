import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';
import { BsFillPencilFill, BsFillTrashFill, BsFillPersonPlusFill } from "react-icons/bs";

const AUsers = () => {
    let history = useHistory();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/projectMascotitas/public/api/users")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);

    const toAdd = () => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AddUsers",
        });
    };


    const toEdit = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/EditUsers",
            state: {
                id: dataItem.id,
                name: dataItem.name,
                lastname: dataItem.lastname,
                address: dataItem.address,
            },
        });
    };

    const toDelete = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/DeleteUsers",
            state: {
                email: dataItem.email,
                id: dataItem.id,
            },
        });
    };
    return (
        <>
            <NavigationAdmin />
            <Container className="container mt-5 p-5 col-sm-10 bg-white">

                <h2 className='text-center'>Users</h2>
                <Button variant="success" onClick={() => {
                    toAdd();
                }}><BsFillPersonPlusFill></BsFillPersonPlusFill></Button>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>lastname</th>
                            <th>address</th>
                            <th>email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.lastname}</td>
                                <td>{dataItem.address}</td>
                                <td>{dataItem.email}</td>
                                <td><Button className='btn me-2' onClick={() => {
                                    toEdit(dataItem);
                                }}><BsFillPencilFill /></Button>
                                    <Button className='btn' variant="danger" onClick={() => {
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

export default AUsers;