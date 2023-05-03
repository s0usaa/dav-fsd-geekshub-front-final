import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../home/Home';
import { Register } from '../register/Register';
import { Contact } from '../contact/Contact';
import { Login } from '../login/Login';
import { Tracks } from '../tracks/Tracks';
import { Coaches } from '../coaches/Coaches';
import { Matches } from '../matches/Matches';
import { Users } from '../users/Users';
import { Profile } from '../profile/Profile';

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tracks' element={<Tracks/>}/>
        <Route path='/coaches' element={<Coaches/>}/>
        <Route path='/matches' element={<Matches/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}
