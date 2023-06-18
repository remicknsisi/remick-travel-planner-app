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
            <button onClick={() => setIsHidden(!isHidden)}>Edit My Info</button>
            <button onClick={() => {
                confirmDelete()
                setIsHidden(true)}}>Delete My Account</button>
            {isHidden ? null : <EditProfileForm/>}
        </div>
    );
    } else {
        <p>Please login or signup to view this page.</p>
    }}

export default UserDetails;