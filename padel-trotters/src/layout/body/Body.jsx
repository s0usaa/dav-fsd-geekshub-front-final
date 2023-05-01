import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../home/Home';
import { Register } from '../register/Register';
import { Contact } from '../contact/Contact';

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}
