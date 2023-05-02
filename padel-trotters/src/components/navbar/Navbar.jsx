import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './NavBar.css';
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from "../../services/userSlice";


export const NavBar = () => {

  const credencialesRdx = useSelector(userData);
  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(userout({credentials:{}, token:''}));
  }

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
            <Nav.Link as={Link} to={'/login'} >Login</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
