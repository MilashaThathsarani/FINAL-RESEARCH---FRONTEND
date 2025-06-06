import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function HomePage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Contact/>
      <Footer/>


    </>
    
  )
}

export default HomePage
