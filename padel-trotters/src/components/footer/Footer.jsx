import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid>
      <Row className="bg-dark text-white text-center">
        <Col md={4}>
          <h5>Direccion</h5>
          <p>Calle Falsa 123, Aspen - MassaChuches</p>
        </Col>
        <Col md={4}>
          <h5>Email</h5>
          <p>clinicadental@dentclinic.com</p>
        </Col>
        <Col md={4}>
          <h5>Telefono</h5>
          <p>555-553487</p>
        </Col>
      </Row>
    </Container>
  );
};
