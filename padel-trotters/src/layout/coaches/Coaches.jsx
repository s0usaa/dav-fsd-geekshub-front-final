import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userData } from '../../services/userSlice'
import { viewCoaches } from '../../services/apiCalls';
import Spinner from 'react-bootstrap/esm/Spinner';

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
    <div>
      {coaches.length > 0 ? (
        <div>
          {coaches.map((entrenadores)=>{
            return (
              <>
              <div key={entrenadores.id}>
              {entrenadores.especialidad}
              </div>
              </>
            );
          })}
        </div>
      ) : (
        <Spinner animation="border" variant="info" />
      )}
    </div>
  )
}
