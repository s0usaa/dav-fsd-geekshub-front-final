import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userData } from '../../services/userSlice';
import { viewAllUsers } from '../../services/apiCalls';
import { addChoosen } from '../../services/detailSlice';
import Spinner from 'react-bootstrap/Spinner';

export const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const credencialesRdx = useSelector(userData);

  const [users , setUsers] = useState([]);

  useEffect(()=>{
    if(users.length === 0){
      viewAllUsers(credencialesRdx.credentials.token)
      .then((resultado)=>{
        setUsers(resultado.data.data);
      })
      .catch((error)=> console.log(error));
    }
  },[users]);

  const selected = (persona)=>{
    dispatch(addChoosen({choosenObject: persona}));
    setTimeout(()=>{
      navigate('/detail');
    }, 500);
  };

  return (
    <>
    <h1>Users</h1>
    {users.length > 0 ? (
      <div>
        {users.map((usuarios)=>{
          return (
            <div key={usuarios.id} onClick={()=> selected(usuarios)}>
              <div>{usuarios.name}{usuarios.surname}</div>
              <br/>
              <div></div>
            </div>
          )
        })}
      </div>
    ) : (
      <Spinner animation="border" variant="info" />
    )}
    </>
  )
}
