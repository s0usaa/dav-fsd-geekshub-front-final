import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../home/Home';

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}
