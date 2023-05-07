import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../../services/userSlice';
import { viewTracks } from '../../services/apiCalls';
import Spinner from 'react-bootstrap/esm/Spinner';

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
    <div>
    {tracks.length > 0 ?(
      <div>
        {tracks.map((pistas)=>{
          return (
            <>
            <div key={pistas.id}></div>
              <div>
                {pistas.track_number}{pistas.type}
              </div>
            </>
          );
        })}
      </div>
    ): (
      <Spinner animation="border" variant="info" />
    )}
    </div>
  )
}
