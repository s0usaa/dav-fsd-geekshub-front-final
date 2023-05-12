import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './CreateTracks.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { userData } from '../../services/userSlice';
import { newMTrack } from '../../services/apiCalls';
import { InputText } from '../../components/inputtext/InputText';
export const CreateTracks = () => {
    const navigate = useNavigate();
const [welcome, setWelcome] = useState('');
const credencialesRdx = useSelector(userData);
const [createTracks, setCreateTracks] = useState({
    track_number: '',
    type: ''
})

const inputHandler = (e) =>{
    setCreateTracks((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const matchCreate = ()=>{
    newMTrack(createTracks, credencialesRdx.credentials.token)
    .then((resultado)=>{
        setCreateTracks(resultado.data);
        setWelcome(`Pista numero ${createTracks.track_number} creada correctamente`);
        setTimeout(()=>{
            navigate('/tracks');
        },2500)
    })
    .catch((error)=> console.log(error))
  }

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
      <h1 className="mb-4 text-center">Reserva tu Partida</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicDoctor">
            <Form.Label>Numero de pista</Form.Label>
              <InputText
              className={''}
              type={'text'}
              name={'track_number'}
              placeholder={'Añade el numero de pista nuevo'}
              maxLength={2}
              changeFunction={inputHandler}
              blurFunction={(e)=>(e)}
              />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicDate">
            <Form.Label>Tipo de pista</Form.Label>
            <InputText
              className={''}
              type={'text'}
              name={'type'}
              placeholder={'Añade el tipo de pista'}
              changeFunction={inputHandler}
              blurFunction={(e)=>(e)}
              />
          </Form.Group>
          <div className="loginSendDeac loginSendAct m-3" onClick={matchCreate}>
            Crear Pista
          </div>
        </Form>
      </Col>
    </Row>
    )}
  </Container>
  )
}
