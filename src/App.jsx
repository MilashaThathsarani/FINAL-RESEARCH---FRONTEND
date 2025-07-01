import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import Login from './components/Login'
import Signup from './components/SignUp'
import TracksHomePage from './pages/TracksHomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/trackshomepage' element={<TracksHomePage/>} />
    </Routes>
  )
}

export default App
