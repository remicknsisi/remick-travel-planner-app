import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import Trip from "./Trip";

function DisplayTrips() {
    const { currentUser } = useContext(UserContext)

  if (currentUser) {
    return (
    <div>
        This is the display trips component
    </div>
    );
    } else {
        return (
            <p>Please login or signup to view this page.</p>
        )
    }
}

export default DisplayTrips;