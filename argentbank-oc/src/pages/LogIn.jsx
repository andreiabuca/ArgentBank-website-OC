import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../actions/auth.actions';
import { isValidEmail, isValidPassword } from '../utils/regex.jsx';
import '../assets/css/main.css';
import NavBar from "../components/navbar";
import Footer from "../components/footer";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Error message 
    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email adress");
      return;
    }
    if (!isValidPassword(password)) {
      setErrorMessage("Invalid password");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;
        dispatch(loginSuccess(token));
        sessionStorage.setItem("token", token);
        if (rememberMe) {
          localStorage.setItem("token", token);
        }
        navigate('/user');
      } else {
        const error = "Incorrect email/password"
        dispatch(loginFailed(error));
      }
    } catch (error) {
      console.error(error);
    }
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
              <input type="text" id="username" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;