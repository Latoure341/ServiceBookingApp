import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import UserDashBoard from './pages/UserDashBoard.jsx'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<UserDashBoard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router