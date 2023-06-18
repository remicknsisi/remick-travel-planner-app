import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider.js";
import EditProfileForm from "./EditProfileForm.js";

function UserDetails() {
    const { currentUser, handleDeleteAccount } = useContext(UserContext)
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div>
            <button onClick={() => setIsHidden(!isHidden)}>Edit My Info</button>
            <button onClick={() => {
                handleDeleteAccount()
                setIsHidden(true)}}>Delete My Account</button>
            {isHidden ? null : <EditProfileForm/>}
        </div>
    );
}

export default UserDetails;