import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/' element={<SignUpPage/>}/>
    </Routes>
  )
}

export default App
