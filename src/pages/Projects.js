import React from 'react';
import { Carousel, Container, Card, Row } from 'react-bootstrap';

function Projects() {
    return(
        <Container fluid>
            <Row className="justify-content-center align-items-center" style={{height: "85vh"}} md="auto">
                <Carousel slide={false} interval={null}>
                    <Carousel.Item>
                            <Card style={{width: "50rem", height: "20rem"}} bg="dark" text="white">
                                <Card.Body>
                                    <Card.Title>BankApp</Card.Title>
                                    <Card.Text>
                                        A web app that allows users to create and manage a basic bank account.
                                        Users are able to create Checking and Savings acounts, deposit and withdraw funds, 
                                        transfer money between accounts, and view transaction history. The frontend website
                                        stores user data in a database which is accessed through a REST API. 
                                        <br />
                                        <br />
                                        Technologies Used: Java, React, MongoDB
                                    </Card.Text>
                                    <Card.Link href="https://github.com/danilo-souza/Bank-App">GitHub</Card.Link>
                                </Card.Body>
                            </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                            <Card style={{width: "50rem", height: "20rem"}} bg="dark" text="white">
                                <Card.Body>
                                    <Card.Title>Pokedex</Card.Title>
                                    <Card.Text>
                                        A web app that allows users to play a simple game inspired by the Pokemon games.
                                        Users will begin the game by creating a user profile, allowing them to view their progress.
                                        Once that is done users will be able to catch new pokemon and add it to their profile. The user is 
                                        then able to view any caught pokemon's information and use them in a battle minigame.
                                        <br />
                                        <br />
                                        Technologies Used: Java, React, SQL
                                    </Card.Text>
                                    <Card.Link href="https://github.com/The-Software-Guild/c263-team-project-team-four">GitHub</Card.Link>
                                </Card.Body>
                            </Card>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}

export default Projects;