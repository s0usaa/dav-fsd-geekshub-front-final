import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { deleteTrack, updateTrack, viewTracks } from "../../services/apiCalls";
import Spinner from "react-bootstrap/esm/Spinner";
import "./Tracks.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Tracks.css";
import Card from "react-bootstrap/Card";
import IMGTrack1 from "../../img/mujer-jugando-al-padel-tiro-completo.jpg";
import { addChoosen, detailData } from "../../services/detailSlice";
import { InputText } from "../../components/inputtext/InputText";

export const Tracks = () => {
  const credencialesRdx = useSelector(userData);
  const [tracks, setTracks] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const delTrack = (pistas) => {
    deleteTrack(pistas.id, credencialesRdx.credentials.token)
      .then(() => {
        setTimeout(() => {
          viewTracks(credencialesRdx.credentials.token)
            .then((respuesta) => {
              setTracks(respuesta.data.data);
            })
            .catch((error) => console.log(error));
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  const pistasRedux = useSelector(detailData);

  const [upTrack, setUpTrack] = useState({
    type: "",
  });

  const inputHandler = (e) => {
    setUpTrack((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const selected = (track) => {
    dispatch(addChoosen({ choosenObject: track }));
    handleShow();
  };

  const updateTracks = () => {
    updateTrack(
      pistasRedux.choosenObject.id,
      upTrack,
      credencialesRdx.credentials.token
    )
      .then((resultado) => {
        setUpTrack(resultado.data);
        setTimeout(() => {
          handleClose();
          viewTracks(credencialesRdx.credentials.token)
            .then((respuesta) => {
              setTracks(respuesta.data.data);
            })
            .catch((error) => console.log(error));
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (tracks.length === 0) {
      viewTracks(credencialesRdx.credentials.token)
        .then((respuesta) => {
          setTracks(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [tracks]);

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center tracksDesign">
        {tracks.length > 0 &&
        credencialesRdx.credentials.usuario.roleId === 1 ? (
          <Col>
            {tracks.map((pistas) => {
              return (
                <div key={pistas.id}>
                  <Card className="bg-dark text-white m-5">
                    <Card.Img src={IMGTrack1} alt="Pistas" />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Pista numero: {pistas.track_number}
                      </Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit reiciendis recusandae esse quas eius quo
                        perferendis eligendi, quam dolorem aspernatur.
                      </Card.Text>
                      <Card.Text>{pistas.type}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                  <div className="d-flex justify-content-center">
                    <div
                      className="loginSendDeac loginSendAct m-3"
                      onClick={() => delTrack(pistas)}
                    >
                      Eliminar Pista
                    </div>
                    <div
                      className="loginSendDeac loginSendAct m-3"
                      onClick={() => selected(pistas)}
                    >
                      Modificar pista
                    </div>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modificar Reserva</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="input1">
                            <Form.Label>Especialidad</Form.Label>
                            <InputText
                              className={""}
                              type={"text"}
                              name={"type"}
                              placeholder={"Modifica el typo de pista"}
                              changeFunction={inputHandler}
                              blurFunction={(e) => e}
                            />
                          </Form.Group>
                          <div
                            className="loginSendDeac loginSendAct m-3"
                            onClick={updateTracks}
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
        ) : tracks.length > 0 &&
          credencialesRdx.credentials.usuario.roleId === 2 ? (
          <Col>
            {tracks.map((pistas) => {
              return (
                <div key={pistas.id}>
                  <Card className="bg-dark text-white m-5">
                    <Card.Img src={IMGTrack1} alt="Pistas" />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Pista numero: {pistas.track_number}
                      </Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit reiciendis recusandae esse quas eius quo
                        perferendis eligendi, quam dolorem aspernatur.
                      </Card.Text>
                      <Card.Text>{pistas.type}</Card.Text>
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
