import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../../services/userSlice";
import { validate2 } from "../../helpers/useful";
import { loguin } from "../../services/apiCalls";
import { InputText } from "../../components/inputtext/InputText";
import { decodeToken } from 'react-jwt';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);
  const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
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
      navigate("/login");
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
        e.target.required);

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

  const logueame = () => {
    loguin(credenciales)
      .then((respuesta) => {
        let decodificado = decodeToken(respuesta.data);
        let datosBackend = {
          token: respuesta.data,
          usuario: decodificado,
        };
        dispatch(login({ credentials: datosBackend }));
        setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => console.log(error));
  };

  console.log(credentialsRdx);

  return (
    <Container fluid>
      {welcome !== "" ? (
        <Row className="loginDesign d-flex justify-content-center align-items-center">
          <Col xs={10} sm={6} className="loginCol">
            <h1>{welcome}</h1>
          </Col>
        </Row>
      ) : (
        <Row className="loginDesign d-flex justify-content-center align-items-center">
          <Col className="loginCol" xs={10} lg={6}>
            <h1>Acceso a clientes</h1>
            <h5>Ya dispongo de cuenta</h5>
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
          </Col>
        </Row>
      )}
    </Container>
  );
};
