import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider.js";

function Nav() {
    const { currentUser, logout } = useContext(UserContext)
    const history = useHistory()

    function handleLogout(){
        fetch("/logout",{
            method: "DELETE"
        })
        .then(() => {
            logout()
            history.push('/login')
        })
    }

    return (
        <div className="nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/trips" className="nav-link">My Trips</NavLink>
            <NavLink to="/trips/new" className="nav-link">Get Inspired</NavLink>
            <NavLink to="/travelagents" className="nav-link">Find an Agent</NavLink>
            {currentUser ? <button onClick={() => history.push(`/users/${currentUser.id}`)}>My Account</button> : null}
            {currentUser ? <button onClick={handleLogout}>Logout</button> : <button onClick={() => history.push('/login')}>Login</button>}
        </div>
        );
}

export default Nav;