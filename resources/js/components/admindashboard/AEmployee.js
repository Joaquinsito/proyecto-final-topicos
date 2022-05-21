import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';
import { BsFillPencilFill, BsFillTrashFill, BsFillPersonPlusFill } from "react-icons/bs";

const AEmployee = () => {
    let history = useHistory();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/projectMascotitas/public/api/employees")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);

    const toAdd = () => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AddEmployee",
        });
    };


    const toEdit = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/EditEmployee",
            state: {
                id: dataItem.id,
                name: dataItem.name,
                lastname: dataItem.lastname,
            },
        });
    };

    const toDelete = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/DeleteEmployee",
            state: {
                email: dataItem.email,
                id: dataItem.id,
            },
        });
    };
    return (
        <>
         <NavigationAdmin/>
        <Container>
                <center>
                    <br />
                    <h2>Users</h2>
                </center>
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
                                <td>{dataItem.email}</td>
                                <td><Button onClick={() => {
                                toEdit(dataItem);
                                }}><BsFillPencilFill/></Button>
                                <Button variant="danger" onClick={() => {
                                toDelete(dataItem);
                                }}><BsFillTrashFill/></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default AEmployee;