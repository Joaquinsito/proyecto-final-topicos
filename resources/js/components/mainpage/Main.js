import React from "react";
import { Carousel, Button, Container, Col, Row, Image } from "react-bootstrap";
import Navigation from '../Nav';
const Main = (props) => {
    return(
        <>  
            <Navigation/>
            <Container>
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./images/img1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="./images/img2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/img3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Container>
        </>
    )
}

export default Main;
