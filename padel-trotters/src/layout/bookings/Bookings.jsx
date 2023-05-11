import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import {
  deleteMatch,
  updateMatches,
  viewMatches,
} from "../../services/apiCalls";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./Bookings.css";
import Modal from "react-bootstrap/Modal";
import { InputText } from "../../components/inputtext/InputText";
import ReactDatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";
import { addChoosen, detailData } from "../../services/detailSlice";

export const Bookings = () => {
  const credencialesRdx = useSelector(userData);
  const [userMatch, setUserMatch] = useState([]);
  const [welcome, setWelcome] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 10)
  );
  const dispatch = useDispatch();

  const delMatch = (partidas) => {
    deleteMatch(partidas.id, credencialesRdx.credentials.token)
      .then(() => {
        setTimeout(() => {
          viewMatches(credencialesRdx.credentials.token)
            .then((respuesta) => {
              setUserMatch(respuesta.data.data);
            })
            .catch((error) => console.log(error));
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  const [upMatch, setUpMatch] = useState({
    // id: partidasRedux.choosenObject.id, si lo hacemos por body
    track_id: '',
    date: '',
  });

  const inputHandler = (e) => {
    setUpMatch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateMatch = () => {
    upMatch.date = startDate;
    updateMatches( partidasRedux.choosenObject.id ,upMatch, credencialesRdx.credentials.token)
      .then((resultado) => {
        setUpMatch(resultado.data);
        setWelcome('Hola q ase')
        setTimeout(() => {
          handleClose();
          setWelcome('');
          viewMatches(credencialesRdx.credentials.token)
            .then((respuesta) => {
              setUserMatch(respuesta.data.data);
            })
            .catch((error) => console.log(error));
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (userMatch.length === 0) {
      viewMatches(credencialesRdx.credentials.token)
        .then((respuesta) => {
          setUserMatch(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userMatch]);

  const selected = (matches)=>{
    dispatch(addChoosen({choosenObject: matches}));
    handleShow();
  };

  const partidasRedux = useSelector(detailData);

  return (
    <Container fluid>
      {welcome !== "" ? (
        <Row className="appointmentDesign d-flex justify-content-center align-items-center">
          <Col xs={10} sm={6} className="loginCol">
            <h1>{welcome}</h1>
          </Col>
        </Row>
      ) : (
        <Row className="appointmentDesign align-items-center d-flex justify-content-center mt-5">
          <Col xs={12} sm={8} lg={6}>
            <h3 className="text-center mt-3">Mis Reservas</h3>
            {userMatch.map((partidas) => {
              return (
                <Form key={partidas.id}>
                  <div className="appointmentDiv">
                    <Form.Group as={Row} controlId="formPlaintextPassword" className="mb-2">
                      <Form.Label column sm="2" className="mx-2">
                        Pista
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder={partidas.track_id}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-2"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2" className="mx-2">
                        Fecha
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder={dayjs(partidas.date).format(
                            "DD/MM/YYYY HH:mm"
                          )}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2" className="mx-2">
                        Entrenador
                      </Form.Label>
                      <Col className="mb-2">
                        <Form.Control
                          type="text"
                          placeholder={partidas.User.Coach.especialidad}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                  </div>
                  <div className="d-flex">
                    <div
                      className="loginSendDeac loginSendAct m-3"
                      onClick={() => delMatch(partidas)}
                    >
                      Eliminar reserva
                    </div>
                    <div
                      className="loginSendDeac loginSendAct m-3"
                      onClick={()=>selected(partidas)}
                    >
                      Modificar reserva
                    </div>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modificar Reserva</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="input1">
                          {/* <Form.Label>Numero reserva</Form.Label>
                            <InputText
                              className={""}
                              type={"text"}
                              name={"id"}
                              placeholder={"Selecciona el numero de reserva"}
                              maxLength={3}
                              changeFunction={inputHandler}
                              blurFunction={(e) => e}
                            /> */}
                            <Form.Label>Numero de pista</Form.Label>
                            <InputText
                              className={""}
                              type={"text"}
                              name={"track_id"}
                              placeholder={"Selecciona pista de 1 a la 4"}
                              maxLength={1}
                              changeFunction={inputHandler}
                              blurFunction={(e) => e}
                            />
                            <Form.Label>Fecha</Form.Label>
                            <ReactDatePicker
                              selected={startDate}
                              minDate={new Date()}
                              placeholderText="Selecciona una fecha"
                              onChange={(fecha) => setStartDate(fecha)}
                              showTimeSelect
                              minTime={setHours(setMinutes(new Date(), 0), 10)}
                              maxTime={setHours(setMinutes(new Date(), 30), 19)}
                              dateFormat="dd/MM/yyyy HH:mm"
                            />
                          </Form.Group>
                          <div
                            className="loginSendDeac loginSendAct m-3"
                            onClick={updateMatch}
                          >
                            Aceptar
                          </div>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Form>
              );
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};
