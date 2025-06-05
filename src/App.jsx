import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/aboutUs'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/' element={<AboutUs/>}/> 
    </Routes>
  )
}

export default App
