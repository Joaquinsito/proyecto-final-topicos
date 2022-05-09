import React from "react";
import { Carousel, Button, Container, Col, Row, Image } from "react-bootstrap";
const Main = (props) => {
    return(
        <>  
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
                        src="./images/img1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Conoce más sobre esta información</h3>
                        <Button variant="dark">Descubre más</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/img1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Container>
        </>
    )
}

export default Main;
