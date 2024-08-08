import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../actions/user.actions';
import '../assets/css/main.css';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import AccountList from "../components/accountlist";
import EditUserInfo from "../components/EditUserProfile";

/* User profile page */
function User() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    /* Asynchronous function that retrieves user data and updates it with useEffect */
    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        /* 
                            Checking that the query response is indeed retrieved
                            console.log(data) 
                        */
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        /* Return user data in redux state */
                        dispatch(userProfile(userData));
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <div>
            <NavBar />
            <main className="main bg-dark">
                <EditUserInfo />
                <AccountList />
                <Footer />
            </main>
        </div>
    );
};

export default User; 