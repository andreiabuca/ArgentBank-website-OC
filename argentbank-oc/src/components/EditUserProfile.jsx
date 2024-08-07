import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateUser } from "../actions/userActions"; 
import logoEdit from "../assets/img/logo-edit.jpg";
import Footer from "../components/footer";
import Account from "./account";
import '../assets/css/main.css';

const EditUserInfo = () => {
    const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState(userInfo.userName || "");
  const [firstName, setFirstName] = useState(userInfo.firstName || "");
  const [lastName, setLastName] = useState(userInfo.lastName || "");

  const handleUserNameChange = (event) => setNewUserName(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", {
        userName: newUserName,
        firstName: firstName,
        lastName: lastName,
      }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      dispatch(updateUser(response.data.body)); 
    } catch (error) {
      console.error("There was an error updating the username!", error);
    }
  };
    return (
        <>
            <nav className="main-nav">
                <img
                    className="main-nav-logo-image"
                    src={logoEdit}
                    alt="Argent Bank Logo"
                />
                <div className="profile-header">
                    <p>{userInfo.userName}</p>
                    <i className="fa fa-user-circle profile-icon"></i>
                    <i class="fa-solid fa-gear profile-icon"></i>
                    <i class="fa-solid fa-power-off profile-icon"></i>
                </div>
            </nav>
            <main>
                <section className="profile-content">
                    <h1>Edit user info</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="profile-wrapper">
                            <label htmlFor="username">User name:</label>
                            <input type="text" id="username" value={newUserName} onChange={handleUserNameChange} />
                        </div>
                        <div className="profile-wrapper">
                            <label htmlFor="firstname">First name:</label>
                            <input type="firstname" id="firstname" value={firstName} onChange={handleFirstNameChange} />
                        </div>
                        <div className="profile-wrapper">
                            <label htmlFor="lastname">Last name:</label>
                            <input type="lastname" id="lastname" value={lastName} onChange={handleLastNameChange} />
                        </div>
                        <div className="profile-button">
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    </form>
                </section>
            </main>
            <Account
            title="Argent Bank Checking (x3448)"
            amount="48,098.43"
            description="Available Balance"
            showTransactionsButton={false}
            customClass="custom-color"
            showProfileArrow={true}
            />
            <Account
            title="Argent Bank Checking (x3448)"
            amount="48,098.43"
            description="Available Balance"
            showTransactionsButton={false}
            customClass="custom-color"
            showProfileArrow={true}
            />
            <Account
            title="Argent Bank Checking (x3448)"
            amount="48,098.43"
            description="Available Balance"
            showTransactionsButton={false}
            customClass="custom-color"
            showProfileArrow={true}
            />
            <Footer/>
        </>
    );
};

export default EditUserInfo;
