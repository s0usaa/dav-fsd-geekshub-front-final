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
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import 'react-datepicker/dist/react-datepicker.css';

export const Matches = () => {
const navigate = useNavigate();
const [welcome, setWelcome] = useState('');
const credencialesRdx = useSelector(userData);
const [tracks , setTracks] = useState([]);
const [selectTrack, setSelectTrack] = useState('');
const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(),0),10))

const [match, setMatch] = useState({
  track_id: selectTrack,
  date: startDate
});

// const inputHandler = (e) =>{
//   setMatch((prevState)=>({
//     ...prevState,
//     [e.target.name]: e.target.value,
//   }));
// };

useEffect(()=>{
  if(tracks.length === 0){
    viewTracks(credencialesRdx.credentials.token)
    .then((respuesta)=>{
      setTracks(respuesta.data.data);
    })
    .catch((error)=> console.log(error));
  }
},[tracks]);

const createMatch = ()=> {
  newMatch(match, credencialesRdx.credentials.token)
  .then((resultado)=>{
    setMatch(resultado.data.data);
    setWelcome(`Vas a jugar una partida el dia: ${match.date}`);
    setTimeout(()=>{
      navigate('/');
    },2500);
  })
  .catch((error)=>{
    setMatch(error.message);
  });
};

  return (
    <Container>
    {welcome !== "" ? (
      <Row className="newAppointmentDesign d-flex justify-content-center align-items-center">
        <Col xs={10} sm={6} className="loginCol">
          <h1>{welcome}</h1>
        </Col>
      </Row>
    ) : (
    <Row className="newAppointmentDesign d-flex align-items-center justify-content-center">
      <Col xs={10} lg={6} sm={12} className="newAppointmentDiv">
      <h1 className="mb-4">Reserva tu Partida</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicDoctor">
            <Form.Label>Pistas</Form.Label>
            <Form.Select onChange={(e)=>{setSelectTrack(e.target.value)}}>
              <option>Selecciona una pista</option>
              {tracks.map((pistas)=>(
                <option key={pistas.id}>
                  {pistas.track_number}-{pistas.type}
                </option>
              ))}
            </Form.Select>
            {/* <InputText
              className={""}
              type={"number"}
              name={"doctor_id"}
              placeholder={"Selecciona el doctor 1 o 2"}
              maxLenght={1}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e)=> (e)}
            /> */}
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
            dateFormat='dd/MM/yyyy HH:mm'/>
            {/* <DatePicker
            selected={date}
            onChange={(fecha)=>setDate(fecha)}
            dateFormat="dd/MM/yyyy"
            timeInputLabel="Fecha:"
            minDate={new Date()}
            placeholderText="Selecciona una fecha"
            /> */}
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
