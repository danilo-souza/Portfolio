import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Footer() {
    return (
        <Navbar className="mt-2" sticky="bottom" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                        <Navbar.Text className="mx-5">Contact Info:</Navbar.Text>

                        <Navbar.Text className="mx-5">danilos063@gmail.com</Navbar.Text>

                        <Navbar.Text className="mx-5">+1 (786)440-4496</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;