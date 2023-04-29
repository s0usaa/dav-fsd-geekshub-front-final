import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">Padel Trotters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    //   <Container fluid>
    //     <Navbar.Brand as={Link} to="/">
    //       Padel Trotters
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         {!credentialsRdx.credentials.usuario ? (
    //           <>
    //             <Nav.Link as={Link} to={"/"}>
    //               Login
    //             </Nav.Link>
    //             <Nav.Link as={Link} to={"/"}>
    //               Register
    //             </Nav.Link>
    //           </>
    //         ) : credentialsRdx.credentials.usuario.roleId === 1 ? (
    //           <>
    //             <NavDropdown title="Admin">
    //               <NavDropdown.Item as={Link} to={"/users"}>
    //                 Admin
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //             <Nav.Link as={Link} to={"/"}>
    //               Home
    //             </Nav.Link>
    //             <Nav.Link as={Link} to={"/"} onClick={() => logout()}>
    //               Logout
    //             </Nav.Link>
    //           </>
    //         ) : credentialsRdx.credentials.usuario.roleId === 2 ? (
    //           <>
    //             <NavDropdown title="Doctor">
    //               <NavDropdown.Item as={Link} to={"/appointmentDr"}>
    //                 Usuarios
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //             <Nav.Link as={Link} to={"/"} onClick={() => logout()}>
    //               Logout
    //             </Nav.Link>
    //           </>
    //         ) : (
    //           <Nav.Link as={Link} to={"/"} onClick={() => logout()}>
    //             Logout
    //           </Nav.Link>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
