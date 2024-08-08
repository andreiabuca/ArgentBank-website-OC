import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './assets/css/main.css';
import Home from './pages/home';
import LogIn from './pages/LogIn';
import User from './pages/user'; 
import EditUserInfo from './components/EditUserProfile';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      </Provider>
    </>
  );
};

export default App;
