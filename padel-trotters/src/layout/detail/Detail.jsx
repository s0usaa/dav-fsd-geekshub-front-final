import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { detailData } from '../../services/detailSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Detail.css'

export const Detail = () => {
    const detailRdx = useSelector(detailData);

    useEffect(()=> {}, []);

  return (
    <Container fluid>
      <Row className="detailDesign d-flex align-items-center justify-content-center">
        <Col className="detailCol" xs={10} lg={6}>
          <h2 className="mb-4 text-center">Informacion del Usuario</h2>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRdx.choosenObject.name}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Apellido
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRdx.choosenObject.surname}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Telefono
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRdx.choosenObject.phone}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRdx.choosenObject.email}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Nivel
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRdx.choosenObject.level}
                  readOnly
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    // <>
    // <h2>Detail</h2>
    // <div>{detailRdx.choosenObject.name}</div>
    // <div>{detailRdx.choosenObject.surname}</div>
    // <div>{detailRdx.choosenObject.phone}</div>
    // <div>{detailRdx.choosenObject.email}</div>
    // </>
  )
}
