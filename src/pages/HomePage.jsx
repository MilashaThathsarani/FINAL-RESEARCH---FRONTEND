import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SignUpPage from './SignUpPage';
import Signup from '../components/SignUp';
import Login from '../components/Login';
import Tracks from '../components/Tracks';
import Features from '../components/Features';


function HomePage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Features/>
      <Contact/>
      <Tracks/>
      <Footer/>


    </>
    
  )
}

export default HomePage
