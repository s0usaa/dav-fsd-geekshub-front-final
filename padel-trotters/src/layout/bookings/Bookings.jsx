import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { viewMatches } from "../../services/apiCalls";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";

export const Bookings = () => {
  const credencialesRdx = useSelector(userData);
  const [userMatch, setUserMatch] = useState([]);

  useEffect(() => {
    if (userMatch.length === 0) {
      viewMatches(credencialesRdx.credentials.token)
        .then((respuesta) => {
          setUserMatch(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userMatch]);
  console.log(userMatch);

  return (
    <Container fluid>
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
                        placeholder={partidas.date}
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
              </Form>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
