import React from "react";
import '../assets/css/main.css';
import { useSelector } from 'react-redux';

const Header = ({ onEditClick }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>Welcome back<br />{userInfo ? userInfo.userName : 'User'}!</h1>
      <button className="edit-button" onClick={onEditClick}>Edit Name</button>
    </div>
  );
};

export default Header; 