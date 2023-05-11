import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userData } from '../../services/userSlice'
import { viewCoaches } from '../../services/apiCalls';
import Spinner from 'react-bootstrap/esm/Spinner';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import IMGCoach from '../../img/gente-jugando-al-padel-dentro.jpg';

export const Coaches = () => {
  const credentialsRdx = useSelector(userData);

  const [coaches, setCoaches] = useState([])

  useEffect(()=>{
    if(coaches.length === 0){
      viewCoaches(credentialsRdx.credentials.token)
      .then((respuesta)=>{
        setCoaches(respuesta.data.data);
      })
      .catch((error)=> console.log(error));
    }
  },[coaches]);
  return (
    <Container fluid>
      <Row className='d-flex justify-content-center tracksDesign'>
        {coaches.length > 0 && credentialsRdx.credentials.usuario.roleId === 1 ? (
          <Col>
            {coaches.map((entrenadores)=>{
              return(
                <div key={entrenadores.id}>
                <Card className='bg-dark text-white m-5'>
                  <Card.Img src={IMGCoach} alt="Entrenadores" />
                  <Card.ImgOverlay>
        <Card.Title>Entrenador de {entrenadores.especialidad}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis recusandae esse quas eius quo perferendis eligendi, quam dolorem aspernatur.
        </Card.Text>
      </Card.ImgOverlay>
                </Card>
                </div>
              )
            })}
          </Col>
        ) : coaches.length > 0 && credentialsRdx.credentials.usuario.roleId === 2 ? (
          <Col>
            {coaches.map((entrenadores)=>{
              return(
                <div key={entrenadores.id}>
                <Card className='bg-dark text-white m-5'>
                  <Card.Img src={IMGCoach} alt="Entrenadores" />
                  <Card.ImgOverlay>
        <Card.Title>Entrenador de {entrenadores.especialidad}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis recusandae esse quas eius quo perferendis eligendi, quam dolorem aspernatur.
        </Card.Text>
      </Card.ImgOverlay>
                </Card>
                </div>
              )
            })}
          </Col>
        ) : (
          <div>
       <Spinner animation="border" variant="info"/>
       <span>Cargando...</span>
       </div>
        )}
      </Row>
    </Container>
  )
}
