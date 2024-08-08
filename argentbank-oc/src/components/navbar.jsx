import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/auth.actions';
import '../assets/css/main.css';
import logo from '../assets/img/argentBankLogo.webp';

function NavBar() {
  /* Updates user data on header component from state redux */
  const isConnected = useSelector((state) => state.auth.token);
  const firstname = useSelector((state) => state.user.userData.firstname);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isConnected ? (
        <div className='connected'>
          <Link to='/user'>
            <i className='fa fa-user-circle i-margin' />
            <p>{firstname}</p>
          </Link>
          <Link className="main-nav-item" to='/' onClick={logoutHandler}>
            <i className='fa fa-sign-out space' />
            <p> Sign out </p>
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/Login">
            <i className="fa fa-user-circle i-margin"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;