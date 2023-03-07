import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BsStarFill, BsStar} from 'react-icons/bs';

function About(){

    return(
        <Container fluid>
            <Row className="justify-content-start mb-3" md="auto">
                <h1>Danilo Cortes De Souza</h1>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h2>About Me:</h2>
            </Row>
            <Row className="justify-content-start" md="auto">
                <p style={{textAlign: "left"}}>
                    Hi, I'm Danilo. I'm a Software Developer at the start of his career. <br />
                    I am currently working with Wiley Edge in their full-stack Java development program. <br />
                    The program focused on creating full-stack web applications using java, React, and SQL. <br />
                    <br />
                    Before Starting at Wiley, I was focusing on completing my education. <br />
                    In 2022, I finished graduated with a Master's Degree from the Florida International University. <br />
                    Previously, in 2020, I completed my Bachelor's Degree from the University of Florida. <br />
                    Throughout this time I worked on different projects using a variety of languages, like C++, <br />
                    Python, and C#.
                </p>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h2>Work History:</h2>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h5>Wiley Edge: Alumni Trainee (2022-present)</h5>
            </Row>
            <Row className="justify-content-start mb-3" md="auto">
                <p style={{fontStyle: "italic"}}>
                    7-week training program focusing on building <br />
                    full-stack Java web-applications.
                </p>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h2>Education:</h2>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h5>MS in Cybersecurity</h5>
            </Row>
            <Row className="justify-content-start" md="auto">
                <p style={{fontStyle: "italic"}}>
                    Florida International University (2021-2022)
                </p>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h5>BS in Computer Science</h5>
            </Row>
            <Row className="justify-content-start mb-3" md="auto">
                <p style={{fontStyle: "italic"}}>
                    University of Florida (2016-2020)
                </p>
            </Row>
            <Row className="justify-content-start" md="auto">
                <h2>Skills:</h2>
            </Row>
            <Row className="justify-content-start" md="auto">
                <Col>
                    <h5>Java: </h5>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <br/>
                    <h5>Python: </h5>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <br/>
                    <h5>React: </h5>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <br/>
                </Col>
                <Col>
                    <h5>SQL: </h5>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <br/>

                    <h5>MongoDB: </h5>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <br />
                </Col>
            </Row>
        </Container>
    );
}

export default About;