import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Rinominato il componente Navbar
import img from "../immagini/Logo.PNG"

function CustomNavbar() {

    
    return (
        <BootstrapNavbar expand="lg" className="bg-trasparent">
            <Container className="ContainerNav">
                <BootstrapNavbar.Brand style={{ color: "antiquewhite" }} href="#home"></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-start">
                <img className="LOGO"  src={img} alt="logo" />
                        <Nav.Link style={{ color:"antiquewhite"}}  href="/">Home</Nav.Link>
                        <Nav.Link style={{ color: "antiquewhite" }}  href="About">About</Nav.Link>
                        <Nav.Link style={{ color: "antiquewhite"}} href="Contact">Contact</Nav.Link>
                        </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default CustomNavbar;
