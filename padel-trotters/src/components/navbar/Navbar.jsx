import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Padel Trotters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={'/register'} >Register</Nav.Link>
            <Nav.Link onClick={handleShow} >Login</Nav.Link>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Inicia sesion</Offcanvas.Title>
              </Offcanvas.Header>
                <Offcanvas.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore!
                </Offcanvas.Body>
            </Offcanvas>
            <Nav.Link as={Link} to={'/contact'}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
