import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { deleteMatch, viewMatches } from "../../services/apiCalls";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import './Bookings.css'

export const Bookings = () => {
  const navigate = useNavigate();
  const credencialesRdx = useSelector(userData);
  const [userMatch, setUserMatch] = useState([]);
  const [welcome, setWelcome] = useState('');

  const delMatch = (partidas)=> {
    deleteMatch(partidas.id, credencialesRdx.credentials.token)
    .then(
      ()=>{
        setTimeout(()=>{
          viewMatches(credencialesRdx.credentials.token)
          .then((respuesta)=>{
            setUserMatch(respuesta.data.data)
            setWelcome('Partida borrada correctamente')
          })
          .catch((error)=> console.log(error));
          navigate('/bookings')
        },500);
      }
    )
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (userMatch.length === 0) {
      viewMatches(credencialesRdx.credentials.token)
        .then((respuesta) => {
          setUserMatch(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userMatch]);

  return (
    <Container fluid>
      {welcome !== '' ? (
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
                  <Form.Group as={Row} controlId="formPlaintextPassword">
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
                        placeholder={dayjs(partidas.date).format('DD/MM/YYYY HH:mm')}
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
                <div className="loginSendDeac loginSendAct m-3" onClick={() =>delMatch(partidas)}>
            Eliminar reserva
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
