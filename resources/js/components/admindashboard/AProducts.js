import React, { useState, useEffect } from 'react';
import { Button, Container, Table,  } from "react-bootstrap";
import axios from 'axios';
import { useHistory} from "react-router-dom";
import Swal from 'sweetalert2';
import NavigationAdmin from './NavAdmin';
import { BsFillPencilFill, BsFillTrashFill, BsFillArchiveFill } from "react-icons/bs";

const AProdcuts = () => {
    let history = useHistory();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/projectMascotitas/public/api/indexproduct")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);

    const toAdd = () => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/AddProduct",
        });
    };

    const toEdit = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/EditProduct",
            state: {
                name: dataItem.name,
                image: dataItem.image,
                price: dataItem.price,
                stock: dataItem.stock,
                description: dataItem.description,
                category_id: dataItem.category_id,
            },
        });
    };

    const toDelete = (dataItem) => {
        history.push({
            pathname: "/projectMascotitas/public/admindashboard/DeleteProduct",
            state: {
                name: dataItem.name,
            },
        });
    };


    return (
        <>
         <NavigationAdmin/>
        <Container className="container mt-5 p-5 col-sm-10 bg-white">
                
                    <h2 className='text-center'>Productos</h2>
            
                <Button variant="success" onClick={toAdd}><BsFillArchiveFill></BsFillArchiveFill></Button>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.category_id}</td>
                                <td>{dataItem.description}</td>
                                <td>${dataItem.price}</td>
                                <td>{dataItem.stock}</td>
                                <td><Button  className='btn me-2' onClick={() => {
                                toEdit(dataItem);
                                }}><BsFillPencilFill/></Button>
                                <Button className='btn' onClick={() => {
                                toDelete(dataItem);
                                }}variant="danger"><BsFillTrashFill/></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default AProdcuts;