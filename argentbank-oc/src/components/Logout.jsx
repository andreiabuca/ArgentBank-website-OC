import React from "react";
import '../assets/css/main.css'; 
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const LogOut = () => {

  const { userInfo } = useSelector((state) => state.user);

    return (
        <div>
        <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle space"></i>
          {userInfo ? userInfo.userName : 'User'}
        </Link>
        <Link className="main-nav-item" to="/">
          <i className="fa fa-sign-out space"></i>
          Sign Out
        </Link>
      </div>
    );
};

export default LogOut; 