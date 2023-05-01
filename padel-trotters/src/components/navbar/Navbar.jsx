import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import {login, userData} from '../../services/userSlice';
import {decodeToken} from 'react-jwt';
import { loguin } from "../../services/apiCalls";
import { InputText } from "../inputtext/InputText";
import './NavBar.css';
import { validate2 } from "../../helpers/useful";

export const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);

  const [credenciales, setCredenciales] = useState({
    email: '',
    password: '',
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  });

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      navigate("/");
    }
  }, []);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [loginAct, setLoginAct] = useState(false);
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setLoginAct(false);
        return;
      }
    }
    for (let vacio in credenciales) {
      if (credenciales[vacio] === "") {
        setLoginAct(false);
        return;
      }
    }
    for (let validated in valiCredenciales) {
      if (valiCredenciales[validated] === false) {
        setLoginAct(false);
        return;
      }
    }
    setLoginAct(true);
  });

  const checkError = (e) => {
    let error = "";

    let checked = validate2(
      e.target.name,
      e.target.value,
      e.target.required
      );

    error = checked.message;

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const logueame = () =>{
    loguin(credenciales)
    .then((respuesta)=>{
      let decodificado = decodeToken(respuesta.data);
      let datosBackend = {
        token: respuesta.data,
        usuario: decodificado
      };
      dispatch(login({credentials:datosBackend}));
      setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario}`);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    })
    .catch((error)=> console.log(error));
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
            <Nav.Link onClick={handleShow} >Login</Nav.Link>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Inicia sesion</Offcanvas.Title>
              </Offcanvas.Header>
                <Offcanvas.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Floating>
                <InputText
                  className={
                    credencialesError.nameError === "" ? "mb-4" : "mb-4"
                  }
                  type={"email"}
                  name={"email"}
                  placeholder={"Introduce tu email"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <label htmlFor="floatingInputCustom">Email*</label>
              </Form.Floating>
              <Form.Text className="text-danger">
                {credencialesError.emailError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Floating>
                <InputText
                  className={
                    credencialesError.nameError === "" ? "mb-4" : "mb-4"
                  }
                  type={"password"}
                  name={"password"}
                  placeholder={"Introduce tu password"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <label htmlFor="floatingInputCustom">Password*</label>
              </Form.Floating>
              <Form.Text className="text-danger">
                {credencialesError.passwordError}
              </Form.Text>
            </Form.Group>
            <div
              className={
                loginAct ? "loginSendDeac loginSendAct" : "loginSendDeac"
              }
              onClick={loginAct ? logueame : () => {}}
            >
              Log in
            </div>
            <p>*Los campos con asterisco son obligatorios</p>
                </Offcanvas.Body>
            </Offcanvas>
            <Nav.Link as={Link} to={'/contact'}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
