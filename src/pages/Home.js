import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container style={{flex: "1"}} fluid>
            <Row md="auto" style={{height:"100%"}} className="justify-content-center align-items-center">
                <Col>
                <h1>Hi! I am Danilo Cortes De Souza</h1>
                <p style={{fontStyle: "italic"}}>Software Developer</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;