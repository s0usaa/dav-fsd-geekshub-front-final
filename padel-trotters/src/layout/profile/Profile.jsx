import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../../services/userSlice';
import { viewProfile } from '../../services/apiCalls';

export const Profile = () => {
  const credentialsRdx = useSelector(userData);

  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    level: "",
    phone: "",
    email: ""
  });

  useEffect(()=>{
    if(userProfile.name === ''){
      viewProfile(credentialsRdx.credentials.token)
      .then((respuesta)=>{
        setUserProfile({
          name: respuesta.data.name,
          surname: respuesta.data.surname,
          level: respuesta.data.level,
          phone: respuesta.data.phone,
          email: respuesta.data.email
        });
      })
      .catch((error)=> console.log(error));
    }
  },[userProfile]);
  return (
    <>
    <div>{userProfile.name}</div>
    <div>{userProfile.surname}</div>
    <div>{userProfile.level}</div>
    <div>{userProfile.phone}</div>
    <div>{userProfile.email}</div>
    </>
  )
}
