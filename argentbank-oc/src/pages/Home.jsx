import React from "react";
import '../assets/css/main.css'; 
import Banner from "../components/banner";
import Features from "../components/features";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Home; 