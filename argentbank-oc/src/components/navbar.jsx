import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../assets/css/main.css'; 
import logo from '../assets/img/argentBankLogo.png';
import SignOut from "./signout";

const NavBar = () => {
  const location = useLocation();
    return (
        <nav className="main-nav">
      <Link className="main-nav-logo" to="/home">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      {location.pathname === '/user' ? (
          <SignOut />
        ) : (
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
    );
};

export default NavBar;