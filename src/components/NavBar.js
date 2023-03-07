import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    let navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand style={{cursor: "pointer"}} onClick={() => handleClick("/")}>Danilo Cortes De Souza</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => handleClick("/Projects")} className="mx-5">Projects</Nav.Link>
                        <Nav.Link onClick={() => handleClick("/About")} className="mx-5">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;