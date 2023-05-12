import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import IMGHome from '../../img/arreglo-raquetas-pelotas-tenis.jpg';
import IMGHome2 from '../../img/laicos-planos-jugando-al-padel.jpg';
import IMGHome3 from '../../img/monitorear-ensenanza-clase-padel.jpg';
import IMGHome4 from '../../img/hombre-jugando-padel.jpg';
import IMGHome5 from '../../img/persona-preparandose-jugar-al-padel-dentro.jpg';
import IMGHome6 from '../../img/gente-tiro-completo-sentada-al-aire-libre-bebidas.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

export const Home = () => {
  return (
   <Container fluid>
    <Row className='mt-5'>
      <Col>
      <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMGHome}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMGHome2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMGHome3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card className="bg-dark text-white mb-3">
      <Card.Img src={IMGHome4} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white mb-3">
      <Card.Img src={IMGHome5} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white mb-3">
      <Card.Img src={IMGHome6} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
      </Col>
    </Row>
   </Container>
  )
}
