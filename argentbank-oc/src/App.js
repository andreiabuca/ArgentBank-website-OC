import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './assets/css/main.css';
import Home from './pages/home';
import LogIn from './pages/LogIn';
import User from './pages/user'; 

export default function App () {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route 
                  path='/user' 
                  element={isConnected ? <User /> : <Navigate to="/login" />} 
              />
          </Routes>
      </div>
  )  
}