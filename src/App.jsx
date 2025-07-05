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
import FavouritsPage from './pages/FavouritsPage'
import ChatPage from './pages/ChatPage'
import ContactPage from './pages/ContactPage'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './components/admin/Dashboard'
import ManageCounsellors from './components/admin/ManageCounsellors'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/trackshomepage' element={<TracksHomePage/>} />
      <Route path='/myprofile' element={<MyProfile/>} />
      <Route path='/counsellors' element={<CounsellorsPage/>} />
      <Route path='/fav' element={<FavouritsPage/>} />
      <Route path='/chat' element={<ChatPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path="/admin" element={<AdminLayout />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/managecounsellors" element={<ManageCounsellors />} />
    </Routes>
  )
}

export default App
