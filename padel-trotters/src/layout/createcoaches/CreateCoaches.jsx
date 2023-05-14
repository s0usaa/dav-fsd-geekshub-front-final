import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './CreateCoaches.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { userData } from '../../services/userSlice';
import { newCoach } from '../../services/apiCalls';
import { InputText } from '../../components/inputtext/InputText';

export const CreateCoaches = () => {

    const navigate = useNavigate();
    const [welcome, setWelcome] = useState("");
    const credencialesRdx = useSelector(userData);
    const [createCoaches, setCreateCoaches] = useState({
        especialidad: "",
      });

      const inputHandler = (e) => {
        setCreateCoaches((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const coachesCreate = () => {
        newCoach(createCoaches, credencialesRdx.credentials.token)
          .then((resultado) => {
            setCreateCoaches(resultado.data);
            setWelcome(
              `Entrenad@r de especialidad ${createCoaches.especialidad} cread@ correctamente`
            );
            setTimeout(() => {
              navigate("/coaches");
            }, 2500);
          })
          .catch((error) => console.log(error));
      };
  return (
    <Container>
      {welcome !== "" ? (
        <Row className="matchesDesign d-flex justify-content-center align-items-center">
          <Col xs={10} sm={6} className="loginCol">
            <h1>{welcome}</h1>
          </Col>
        </Row>
      ) : (
        <Row className="matchesDesign d-flex align-items-center justify-content-center">
          <Col xs={10} lg={6} sm={12} className="matchesDiv">
            <h1 className="mb-4 text-center">Crear un entrenador</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicDoctor">
                <Form.Label>Especialidad</Form.Label>
                <InputText
                  className={""}
                  type={"text"}
                  name={"especialidad"}
                  placeholder={"Añade la especialidad del entrenador"}
                  maxLength={20}
                  changeFunction={inputHandler}
                  blurFunction={(e) => e}
                />
              </Form.Group>
              <div
                className="loginSendDeac loginSendAct m-3"
                onClick={coachesCreate}
              >
                Crear Entrenador
              </div>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  )
}
