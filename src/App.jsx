import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './components/Login'
import Signup from './components/SignUp'
import TracksHomePage from './pages/TracksHomePage'
import MyProfile from './components/MyProfile'
import CounsellorsPage from './pages/CounsellorsPage'
import FavouritsPage from './pages/FavouritsPage'
import ChatPage from './pages/ChatPage'
import ContactPage from './pages/ContactPage'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './components/admin/Dashboard'
import ManageCounsellors from './components/admin/ManageCounsellors'
import AdminLogin from './components/admin/AdminLogin'
import MoodsPage from './pages/MoodsPage'
import HappyMoodPage from './pages/HappyMoodPage'
import SadMoodPage from './pages/SadMoodPage'
import AngryMoodPage from './pages/AngryMoodPage'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Features from './components/Features'

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
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/moods" element={<MoodsPage />} />
      <Route path="/mood/happy" element={<HappyMoodPage/>} /> 
      <Route path="/mood/sad" element={<SadMoodPage/>} /> 
      <Route path="/mood/angry" element={<AngryMoodPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/features" element={<Features/>} />
    </Routes>
  )
}

export default App
