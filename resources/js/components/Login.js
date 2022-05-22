import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import Navigation from './Nav';
// import Form from 'react-bootstrap/Form';

const LoginForm = () => {
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
        password: ''
    })

    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    }



    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        axios.post("http://localhost/projectMascotitas/public/api/login",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'aplication/json'
                }
            }
        ).then(response => {
            localStorage.setItem('lvl_user', response.data.id)
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
            history.push({
                pathname: "/projectMascotitas/public/user/Mainprofile",
                state: {
                    token: response.data.token,
                    id: response.data.id
                },
            }
            )
        }).catch(error => {
            console.log(error);
            // Toast.fire({
            //     icon: 'error',
            //     title: 'Bad Credentials'
            //   })

            if (formValue.password == "root" &&
                formValue.email == "admin@mascotitas.com") {
                history.push({
                    pathname: "/projectMascotitas/public/admindashboard/MainAdmin",
                })
            }
        });

    }
    return (
        <>
            <Navigation />
            <div className="container mt-4 align-items-center">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="p-5 card">
                            <Form onSubmit={handleSubmit}>
                                <Form.Label className='form-control-lg fs-2 fw-bold col-sm-12 text-center'>Login</Form.Label>
                                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className="mb-5 text-left" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={formValue.password}
                                        onChange={onChange} />
                                </Form.Group>
                                <Form.Group className='mt-4 text-center'>
                                <Button className='col-sm-4 text-center' variant="primary" type="submit">
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
export default LoginForm;