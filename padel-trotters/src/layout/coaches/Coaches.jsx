import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import {
  deleteCoach,
  updateCoaches,
  viewCoaches,
} from "../../services/apiCalls";
import Spinner from "react-bootstrap/esm/Spinner";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import IMGCoach1 from "../../img/gente-jugando-al-padel-dentro.jpg";
import IMGCoach2 from "../../img/persona-preparandose-jugar-al-padel-dentro (1).jpg";
import { addChoosen, detailData } from "../../services/detailSlice";
import { InputText } from "../../components/inputtext/InputText";

export const Coaches = () => {
  const credencialesRdx = useSelector(userData);
  const [coaches, setCoaches] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const delCoach = (entrenadores) => {
    deleteCoach(entrenadores.id, credencialesRdx.credentials.token)
      .then(() => {
        setTimeout(() => {
          viewCoaches(credencialesRdx.credentials.token)
            .then((respuesta) => {
              setCoaches(respuesta.data.data);
            })
            .catch((error) => console.log(error));
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  const entrenadoresRedux = useSelector(detailData);

  
  const [upCoach, setUpCoach] = useState({
    especialidad: "",
  });

  const inputHandler = (e) => {
    setUpCoach((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const selected = (coach) => {
    dispatch(addChoosen({ choosenObject: coach }));
    handleShow();
  };

  const updateCoach = () => {
    updateCoaches(
      entrenadoresRedux.choosenObject.id,
      upCoach,
      credencialesRdx.credentials.token
    )
      .then((resultado) => {
        setUpCoach(resultado.data);
        setTimeout(() => {
          handleClose();
          viewCoaches(credencialesRdx.credentials.token)
            .then((respuesta) => {
              setCoaches(respuesta.data.data);
            })
            .catch((error) => console.log(error));
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (coaches.length === 0) {
      viewCoaches(credencialesRdx.credentials.token)
        .then((respuesta) => {
          setCoaches(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [coaches]);

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center tracksDesign">
        {coaches.length > 0 &&
        credencialesRdx.credentials.usuario.roleId === 1 ? (
          <Col>
            {coaches.map((entrenadores) => {
              return (
                <div key={entrenadores.id}>
                  <Card className="bg-dark text-white m-5">
                    <Card.Img src={entrenadores.especialidad === 'Ataque' ? IMGCoach1 : IMGCoach2} alt="Entrenadores" />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Entrenador de {entrenadores.especialidad}
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                  <div className="d-flex justify-content-center">
                    <div
                      className="modSendDeac modSendAct m-3"
                      onClick={() => delCoach(entrenadores)}
                    >
                      Eliminar entrenador
                    </div>
                    <div
                      className="modSendDeac modSendAct m-3"
                      onClick={() => selected(entrenadores)}
                    >
                      Mod. Entrenador
                    </div>
                    <Modal show={show} onHide={handleClose} backdrop='static'>
                      <Modal.Header closeButton>
                        <Modal.Title>Modificar Entrenador</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="input1">
                            <Form.Label>Especialidad</Form.Label>
                            <InputText
                              className={""}
                              type={"text"}
                              name={"especialidad"}
                              placeholder={"Selecciona la especialidad"}
                              changeFunction={inputHandler}
                              blurFunction={(e) => e}
                            />
                          </Form.Group>
                          <div
                            className="loginSendDeac loginSendAct m-3"
                            onClick={updateCoach}
                          >
                            Aceptar
                          </div>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              );
            })}
          </Col>
        ) : coaches.length > 0 &&
          credencialesRdx.credentials.usuario.roleId === 2 ? (
          <Col>
            {coaches.map((entrenadores) => {
              return (
                <div key={entrenadores.id}>
                  <Card className="bg-dark text-white m-5">
                    <Card.Img src={entrenadores.especialidad === 'Ataque' ? IMGCoach1 : IMGCoach2} alt="Entrenadores" />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Entrenador de {entrenadores.especialidad}
                      </Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit reiciendis recusandae esse quas eius quo
                        perferendis eligendi, quam dolorem aspernatur.
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              );
            })}
          </Col>
        ) : (
          <div>
            <Spinner animation="border" variant="info" />
            <span>Cargando...</span>
          </div>
        )}
      </Row>
    </Container>
  );
};
