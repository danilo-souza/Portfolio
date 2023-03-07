import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container style={{flex: "1"}} fluid>
            <Row md="auto" style={{height:"100%"}} className="justify-content-center align-items-center">
                <Col>
                <h1>Hi! I am Danilo Cortes De Souza</h1>
                <p style={{fontStyle: "italic"}}>Software Developer from Doral, Florida</p>
                <p style={{fontStyle: "italic"}}>danilos063@gmail.com</p>
                <p style={{fontStyle: "italic"}}>786-440-4496</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;