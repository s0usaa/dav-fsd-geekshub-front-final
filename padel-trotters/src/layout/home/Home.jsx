import React from "react";
import "./Home.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import IMGHome from "../../img/arreglo-raquetas-pelotas-tenis.jpg";
import IMGHome2 from "../../img/laicos-planos-jugando-al-padel.jpg";
import IMGHome3 from "../../img/monitorear-ensenanza-clase-padel.jpg";
import IMGHome5 from "../../img/persona-preparandose-jugar-al-padel-dentro.jpg";
import IMGHome4 from "../../img/padel-alto-angulo-linea-blanca.jpg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export const Home = () => {
  return (
    <Container fluid>
      <Row className="mt-5 homeDesign">
        <Col>
          <Carousel slide={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={IMGHome} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={IMGHome2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={IMGHome3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Row className="g-0 homeImg-1">
              <Col xs={4} lg={4}>
                <Card.Img src={IMGHome5}/>
              </Col>
              <Col xs={8} lg={8} className="text-center">
                <h1>Clases particulares</h1>
                <h4>Aprende de los mejores profesionales para pulir tu técnica, tanto en ataque como en defensa.</h4>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row className="g-0 homeImg-1">
              <Col xs={8} lg={8} className="text-center">
                <h1>Nuevas instalaciones</h1>
                <h4>Ven a jugar en nuestras pistas cubiertas y al aire libre.</h4>
              </Col>
              <Col xs={4} lg={4}>
                <Card.Img src={IMGHome4}/>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
