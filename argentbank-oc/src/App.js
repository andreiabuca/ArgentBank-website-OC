import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import User from './pages/user'; 

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
};

export default App;
