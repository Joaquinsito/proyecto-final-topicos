import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import Navigation from './Nav';
// import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
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
        email: '',
        password: '',
        name: '',
        lastname: '',
        address: '',

    })

    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();

        
        formData.append("name", formValue.name)
        formData.append("lastname", formValue.lastname)
        formData.append("address", formValue.address)
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        axios.post("http://localhost/projectMascotitas/public/api/register",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'aplication/json'
                }
            }
        ).then(response => {
            console.log('response');
            console.log(response);
            Toast.fire({
                icon: 'success',
                title: 'Register successfully'
            })
            history.push({
                pathname: "/projectMascotitas/public/user/Mainprofile",
                state: { token: response.data.token }
            }
            )
        }).catch(error => {
            console.log(error);
            Toast.fire({
                icon: 'error',
                title: 'Bad data'
            })
        });
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card p-5">
                            <Form onSubmit={handleSubmit}>
                                <Form.Label className='form-control-lg fs-2 fw-bold col-sm-12 text-center'>Register</Form.Label>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" value={formValue.name}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name="lastname" value={formValue.lastname}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" name="address" value={formValue.address}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={formValue.password}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className='mt-5 text-center'>
                                    <Button className='col-sm-4  mb-5 text-center' variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}
export default RegisterForm;