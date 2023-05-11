import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Padel Trotters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {!credencialesRdx.credentials.usuario ? (
              <>
            <Nav.Link as={Link} to={'/register'} >Register</Nav.Link>
            <Nav.Link as={Link} to={'/login'} >Login</Nav.Link>
              </>
            ): credencialesRdx.credentials.usuario.roleId === 2 ?(
              <>
            <Nav.Link as={Link} to={'/coaches'} >Entrenadores</Nav.Link>
            <Nav.Link as={Link} to={'/tracks'} >Pistas</Nav.Link>
            <NavDropdown title={credencialesRdx.credentials.usuario.name} id="dropdown" variant="primary">
            <NavDropdown.Item as={Link} to={'/profile'}>Perfil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/matches'}>Jugar Partida</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/bookings'}>Reservas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={'/'} onClick={()=>logout()}>Logout</Nav.Link>
              </>
            ): credencialesRdx.credentials.usuario.roleId === 1 ? (
              <>
            <Nav.Link as={Link} to={'/coaches'} >Entrenadores</Nav.Link>
            <Nav.Link as={Link} to={'/tracks'} >Pistas</Nav.Link>
            <NavDropdown title='Admin' id='dropdownAdmin' variant="secondary">
              <NavDropdown.Item as={Link} to={'/users'}>Usuarios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={'/'} onClick={()=>logout()}>Logout</Nav.Link>
              </>
            ):(
              <Nav.Link as={Link} to={'/'} onClick={()=>logout()}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
