import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import Login from './components/Login'
import Signup from './components/SignUp'
import TracksHomePage from './pages/TracksHomePage'
import MyProfile from './components/MyProfile'
import Counsellors from './components/Counsellors'
import CounsellorsPage from './pages/CounsellorsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/trackshomepage' element={<TracksHomePage/>} />
      <Route path='/myprofile' element={<MyProfile/>} />
       <Route path='/counsellors' element={<CounsellorsPage/>} />
    </Routes>
  )
}

export default App
