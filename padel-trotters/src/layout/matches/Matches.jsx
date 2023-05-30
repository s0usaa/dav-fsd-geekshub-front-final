import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../services/userSlice';
import { newMatch, viewTracks } from '../../services/apiCalls';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import 'react-datepicker/dist/react-datepicker.css';
import { InputText } from '../../components/inputtext/InputText';
import './Matches.css';
import dayjs from 'dayjs';

export const Matches = () => {
const navigate = useNavigate();
const [welcome, setWelcome] = useState('');
const credencialesRdx = useSelector(userData);
const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(),0),10));
const [tracks, setTracks] = useState([]);

const [match, setMatch] = useState({
  track_id: '',
  date: ''
});

const selectTrack = (e) =>{
  setMatch((prevState)=>({
    ...prevState,
    track_id: e.target.value,
  }));
};

const createMatch = ()=> {
  match.date = startDate;
  newMatch(match, credencialesRdx.credentials.token)
  .then((resultado)=>{
    setMatch(resultado.data);
    setWelcome(`Vas a jugar una partida el dia: ${dayjs(match.date).format('DD/MM/YYYY')} a las: ${dayjs(match.date).format('HH:mm')}`);
    setTimeout(()=>{
      navigate('/');
    },2500);
  })
  .catch((error)=>{
    setMatch(error.message);
  });
};

useEffect(() => {
  if (tracks.length === 0) {
    viewTracks(credencialesRdx.credentials.token)
      .then((respuesta) => {
        setTracks(respuesta.data.data);
      })
      .catch((error) => console.log(error));
  }
}, [tracks]);

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
            <Form.Floating>
            <Form.Select onChange={selectTrack} defaultValue="">
                        <option disabled hidden></option>
                        {tracks.map((pistas)=>{
                          return(
                            <option key={pistas.id} value={pistas.id}>
                              {pistas.track_number} - {pistas.type}
                            </option>
                          )
                        })}
                      </Form.Select>
                      <label htmlFor="floatingInputCustom">
                        Escoge Pista*
                      </label>
              </Form.Floating>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicDate">
            <Form.Label>Fecha</Form.Label>
            <DatePicker
            selected={startDate}
            minDate={new Date()}
            placeholderText='Selecciona una fecha'
            onChange={(fecha)=> setStartDate(fecha)}
            showTimeSelect
            minTime={setHours(setMinutes(new Date(),0),10)}
            maxTime={setHours(setMinutes(new Date(),30),19)}
            dateFormat='dd/MM/yyyy HH:mm'
            locale='es'
            />
          </Form.Group>
          <div className="loginSendDeac loginSendAct m-3" onClick={createMatch}>
            Crear Partida
          </div>
        </Form>
      </Col>
    </Row>
    )}
  </Container>
  )
}
