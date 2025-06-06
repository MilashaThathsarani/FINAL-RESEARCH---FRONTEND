import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import AboutUs from './pages/AboutUsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/' element={<AboutUs/>}/> 
    </Routes>
  )
}

export default App
