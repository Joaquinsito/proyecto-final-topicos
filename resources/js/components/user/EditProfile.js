
import React, { useEffect, useState } from "react";
import NavigationUser from "../user/NavUser"
import { useLocation, useHistory } from "react-router-dom";
import { Container, Table, Card, ListGroup, ListGroupItem, Row, Col, Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2';


const Mainprofile = () => {
    let history = useHistory();    
    const location = useLocation();
    const param = location.state.token;
    const id = location.state.id_user;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      const [formValue, setformValue] = React.useState({
        name: '',
        lastname: '',
        address: '',

        })

    const onChange = (e) => {
        e.persist();
        setformValue({...formValue, [e.target.name]: e.target.value});
    }


    const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("id", id)
    formData.append("name", formValue.name)
    formData.append("lastname", formValue.lastname)
    formData.append("address", formValue.address)
    axios.post("http://localhost/projectMascotitas/public/api/updateData",
    formData,
    {headers:{'Content-Type': 'multipart/form-data',
    'Accept': 'aplication/json'}}
    ).then(response => {
        console.log('response');
        console.log(response);
        Toast.fire({
            icon: 'success',
            title: 'Se han actualizado los datos successfully'
          })
         history.push({
             pathname: "/projectMascotitas/public/user/Mainprofile",
             state: {token:location.state.token,
                    id: location.state.id}
          }
         )
    }).catch(error => {
        console.log(error);
        Toast.fire({
            icon: 'error',
            title: 'No se han actualizado los datos '
          })
    });
    }
        

    
        return(
            <> 
            <NavigationUser id={location.state.id} token={location.state.token}/>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder={location.state.name} name="name" value={formValue.name}
                            onChange = {onChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder={location.state.lastname} name="lastname" value={formValue.lastname}
                            onChange = {onChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder={location.state.address} name="address" value={formValue.address}
                            onChange = {onChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
         </>
        )
}

export default Mainprofile;