import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { updateProfile, viewProfile } from "../../services/apiCalls";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Profile.css";
import { validate } from "../../helpers/useful";
import { InputText } from "../../components/inputtext/InputText";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const credentialsRdx = useSelector(userData);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [welcome, setWelcome] = useState("");

  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    level: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (userProfile.name === "") {
      viewProfile(credentialsRdx.credentials.token)
        .then((respuesta) => {
          setUserProfile({
            name: respuesta.data.name,
            surname: respuesta.data.surname,
            level: respuesta.data.level,
            phone: respuesta.data.phone,
            email: respuesta.data.email,
          });
        })
        .catch((error) => console.log(error));
    }
  }, [userProfile]);

  const [upProfile, setUpProfile] = useState({
    coaches_id: "",
    name: "",
    surname: "",
    phone: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    coaches_idVali: false,
    nameVali: false,
    surnameVali: false,
    phoneVali: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    coaches_idError: "",
    nameError: "",
    surnameError: "",
    phoneError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  const inputHandler = (e) => {
    setUpProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setRegisterAct(false);
        return;
      }
    }
    for (let vacio in upProfile) {
      if (upProfile[vacio] === "") {
        setRegisterAct(false);
        return;
      }
    }

    for (let validated in valiCredenciales) {
      if (valiCredenciales[validated] === false) {
        setRegisterAct(false);
        return;
      }
    }
    setRegisterAct(true);
  });

  const checkError = (e) => {
    let error = "";
    let checked = validate(e.target.name, e.target.value, e.target.required);
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

  const userUpdate = () => {
    updateProfile(upProfile, credentialsRdx.credentials.token)
      .then((resultado) => {
        setUpProfile(resultado.data);
        setWelcome("Perfil actualizado correctamente");
        setTimeout(() => {
          handleClose();
          setWelcome("");
          viewProfile(credentialsRdx.credentials.token)
            .then((respuesta) => {
              setUserProfile({
                name: respuesta.data.name,
                surname: respuesta.data.surname,
                level: respuesta.data.level,
                phone: respuesta.data.phone,
                email: respuesta.data.email,
              });
            })
            .catch((error) => console.log(error));
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      {welcome !== "" ? (
        <Row className="appointmentDesign d-flex justify-content-center align-items-center">
          <Col xs={10} sm={6} className="loginCol">
            <h1>{welcome}</h1>
          </Col>
        </Row>
      ) : (
        <Row className="profileDesign align-items-center d-flex justify-content-center">
          <Col className="profileCol" xs={10} lg={6}>
            <div className="mb-4 text-dark text-center">
              <h2>Datos de tu perfil</h2>
            </div>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="2">
                  Nombre
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={userProfile.name}
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextSurname"
              >
                <Form.Label column sm="2">
                  Apellido
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={userProfile.surname}
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPhone"
              >
                <Form.Label column sm="2">
                  Telefono
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={userProfile.phone}
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={userProfile.email}
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Nivel
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={userProfile.level}
                    readOnly
                  />
                </Col>
              </Form.Group>
              <div
                className="registerSendDeac registerSendAct m-3"
                onClick={handleShow}
              >
                Modificar perfil
              </div>
            </Form>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modificar Perfil</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="input1">
                    <Form.Floating>
                      <InputText
                        className={
                          credencialesError.coaches_idError === ""
                            ? "mb-4"
                            : "mb-4"
                        }
                        type={"number"}
                        name={"coaches_id"}
                        placeholder={"Elige entre 1 o 2"}
                        required={true}
                        maxLenght={1}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <label htmlFor="floatingInputCustom">
                        Escoge entrenador 1 o 2*
                      </label>
                    </Form.Floating>
                    <Form.Text className="text-dark">
                      {credencialesError.coaches_idError}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="input2">
                    <Form.Floating>
                      <InputText
                        className={
                          credencialesError.nameError === "" ? "mb-4" : "mb-4"
                        }
                        type={"text"}
                        name={"name"}
                        placeholder={"Escoge tu nombre"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <label htmlFor="floatingInputCustom">Nombre*</label>
                    </Form.Floating>
                    <Form.Text className="text-dark">
                      {credencialesError.nameError}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="input2">
                    <Form.Floating>
                      <InputText
                        className={
                          credencialesError.surnameError === ""
                            ? "mb-4"
                            : "mb-4"
                        }
                        type={"text"}
                        name={"surname"}
                        placeholder={"Escoge tu apellido"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <label htmlFor="floatingInputCustom">Apellido*</label>
                    </Form.Floating>
                    <Form.Text className="text-dark">
                      {credencialesError.surnameError}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicPhone">
                    <Form.Floating>
                      <InputText
                        className={
                          credencialesError.phoneError === "" ? "mb-4" : "mb-4"
                        }
                        type={"text"}
                        name={"phone"}
                        placeholder={"Introduce tu telefono"}
                        required={true}
                        maxLenght={9}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <label htmlFor="floatingInputCustom">Telefono*</label>
                    </Form.Floating>
                    <Form.Text className="text-dark">
                      {credencialesError.phoneError}
                    </Form.Text>
                  </Form.Group>
                  <div
                    className={
                      registerAct
                        ? "registerSendDeac registerSendAct"
                        : "registerSendDeac"
                    }
                    onClick={registerAct ? userUpdate : () => {}}
                  >
                    Aceptar
                  </div>
                  <p>*Los campos con asterisco son obligatorios</p>
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      )}
    </Container>
  );
};
