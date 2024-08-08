import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from '../actions/userActions';
import '../assets/css/main.css';

const EditUserInfo = ({ onCancel }) => {
    const { userInfo } = useSelector((state) => state.user);
    const [newUserName, setNewUserName] = useState(userInfo ? userInfo.userName : '');
    const [firstName, setFirstName] = useState(userInfo ? userInfo.firstName : '');
    const [lastName, setLastName] = useState(userInfo ? userInfo.lastName : '');
    const dispatch = useDispatch();

    const handleUserNameChange = (event) => setNewUserName(event.target.value);
    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(updateUser({ userName: newUserName, firstName, lastName }));
      onCancel(); 
  };
    return (
        <>
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
                            <input type="text" id="firstname" value={firstName} onChange={handleFirstNameChange} />
                        </div>
                        <div className="profile-wrapper">
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" id="lastname" value={lastName} onChange={handleLastNameChange} />
                        </div>
                        <div className="profile-button">
                            <button type="submit">Save</button>
                            <button type="button" onClick={onCancel}>Cancel</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default EditUserInfo;
