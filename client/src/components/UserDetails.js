import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider.js";
import EditProfileForm from "./EditProfileForm.js";

function UserDetails() {
    const { handleDeleteAccount, currentUser } = useContext(UserContext)
    const [isHidden, setIsHidden] = useState(true)

    function confirmDelete(){
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            handleDeleteAccount()
        }
    }

    if (currentUser) {
        return (
        <div>
            <h2>Welcome, {currentUser.name}</h2>
            {currentUser.image.length > 0 ? <img className="profile-picture-account-details" src={currentUser.image}/> : null}
            <br/><br/>
            {isHidden ? <button onClick={() => setIsHidden(!isHidden)}>Edit My Info</button> : <button onClick={() => setIsHidden(!isHidden)}>Hide Edit My Info</button>}
            <button onClick={() => {
                confirmDelete()
                setIsHidden(true)}}>Delete My Account</button>
            <br/><br/>
            {isHidden ? null : <EditProfileForm/>}
        </div>
    );
    } else {
        <p>Please login or signup to view this page.</p>
    }}

export default UserDetails;