import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import Home from './pages/home';
import LogIn from './pages/LogIn';
import User from './pages/user'; 

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
};

export default App;
