import React from 'react';
import './MainApp.css';
import { Body } from './body/Body';
import { Footer } from '../components/footer/Footer';
import { NavBar } from '../components/navbar/Navbar';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Body/>
    <Footer/>
    </>
  )
}
