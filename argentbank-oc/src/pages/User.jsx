import React from "react";
import '../assets/css/main.css'; 
import Header from "../components/header";
import AccountList from "../components/accountlist";

const User = () => {
    return (
        <div>
        <main class="main bg-dark">
        <Header/>
        <AccountList/>
        </main>
        </div>
    );
};

export default User; 