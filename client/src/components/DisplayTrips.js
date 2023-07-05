import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import Trip from "./Trip";

function DisplayTrips() {
    const { currentUser } = useContext(UserContext)

  if (currentUser) {
    return (
    <div>
        {currentUser.trips.map(trip => <Trip key={trip.id} isDisplayTrips={true} trip={trip}/>)}
    </div>
    )} else {
        return (
            <p>Please login or signup to view this page.</p>
        )
    }
}

export default DisplayTrips;