import React from "react";
import '../assets/css/main.css';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { loginUser, fetchUserDetails } from "../userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        dispatch(fetchUserDetails(response.payload.body.token)); 
        navigate('/user', { replace: true });
      }
    });
  };

  return (
    <>
      <NavBar />
      <main className="main bg-dark flex">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          {status === 'failed' && <p className="error-message">{error}</p>}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;