import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../../services/userSlice';
import { viewProfile } from '../../services/apiCalls';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import './Profile.css';

export const Profile = () => {
  const credentialsRdx = useSelector(userData);

  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    level: "",
    phone: "",
    email: ""
  });

  useEffect(()=>{
    if(userProfile.name === ''){
      viewProfile(credentialsRdx.credentials.token)
      .then((respuesta)=>{
        setUserProfile({
          name: respuesta.data.name,
          surname: respuesta.data.surname,
          level: respuesta.data.level,
          phone: respuesta.data.phone,
          email: respuesta.data.email
        });
      })
      .catch((error)=> console.log(error));
    }
  },[userProfile]);
  return (
    <Container fluid>
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
          </Form>
        </Col>
      </Row>
    </Container>
    // <>
    // <div>{userProfile.name}</div>
    // <div>{userProfile.surname}</div>
    // <div>{userProfile.level}</div>
    // <div>{userProfile.phone}</div>
    // <div>{userProfile.email}</div>
    // </>
  )
}
