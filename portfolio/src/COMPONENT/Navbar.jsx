import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Rinominato il componente Navbar



function CustomNavbar() {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
            <Container>
                <BootstrapNavbar.Brand href="#home">De Paolis Luigi</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                        </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default CustomNavbar;
