import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../../services/userSlice';
import { viewTracks } from '../../services/apiCalls';
import Spinner from 'react-bootstrap/esm/Spinner';
import './Tracks.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Tracks.css';
import Card from 'react-bootstrap/Card';
import IMGTrack1 from '../../img/mujer-jugando-al-padel-tiro-completo.jpg';

export const Tracks = () => {
  const credentialsRdx = useSelector(userData);

  const [tracks, setTracks] = useState([]);

  useEffect(()=>{
    if(tracks.length === 0){
      viewTracks(credentialsRdx.credentials.token)
      .then((respuesta)=>{
        setTracks(respuesta.data.data);
      })
      .catch((error)=> console.log(error));
    }
  },[tracks]);

  return (
    <Container fluid>
      <Row className='d-flex justify-content-center tracksDesign'>
        {tracks.length > 0 && credentialsRdx.credentials.usuario.roleId === 1 ? (
          <Col>
            {tracks.map((pistas)=>{
              return(
                <div key={pistas.id}>
                <Card className='bg-dark text-white m-5'>
                  <Card.Img src={IMGTrack1} alt="Pistas" />
                  <Card.ImgOverlay>
        <Card.Title>Pista numero: {pistas.track_number}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis recusandae esse quas eius quo perferendis eligendi, quam dolorem aspernatur.
        </Card.Text>
        <Card.Text>{pistas.type}</Card.Text>
      </Card.ImgOverlay>
                </Card>
                </div>
              )
            })}
          </Col>
        ) : tracks.length > 0 && credentialsRdx.credentials.usuario.roleId === 2 ? (
          <Col>
            {tracks.map((pistas)=>{
              return(
                <div key={pistas.id}>
                <Card className='bg-dark text-white m-5'>
                  <Card.Img src={IMGTrack1} alt="Pistas" />
                  <Card.ImgOverlay>
        <Card.Title>Pista numero: {pistas.track_number}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis recusandae esse quas eius quo perferendis eligendi, quam dolorem aspernatur.
        </Card.Text>
        <Card.Text>{pistas.type}</Card.Text>
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
