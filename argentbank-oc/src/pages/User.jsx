import React from "react";
import '../assets/css/main.css'; 
import Header from "../components/header";
import AccountList from "../components/accountlist";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const User = () => {
    return (
        <div>
            <NavBar/>
        <main className="main bg-dark">
        <Header/>
        <AccountList/>
        <Footer/>
        </main>
        </div>
    );
};

export default User; 