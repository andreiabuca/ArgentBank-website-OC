import React, { useState }  from "react";
import '../assets/css/main.css'; 
import Header from "../components/header";
import AccountList from "../components/accountlist";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import EditUserInfo from "../components/EditUserProfile";

const User = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    return (
        <div>
            <NavBar/>
        <main className="main bg-dark">
            {isEditing ? (
              <EditUserInfo onCancel={handleCancelEdit}/>  
            ) : (
                <Header onEditClick={handleEditClick}/>
            )}
        <AccountList/>
        <Footer/>
        </main>
        </div>
    );
};

export default User; 