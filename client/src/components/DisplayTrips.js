import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import Trip from "./Trip";

function DisplayTrips() {
    const { currentUser } = useContext(UserContext)

    console.log(currentUser)

  if (currentUser) {
    return (
    <div>
        <h1>Your Booked Trips</h1>
        {currentUser.trips.length > 0 ? currentUser.trips.map(trip => <Trip key={trip.id} isDisplayTrips={true} trip={trip}/>) : "**You have no booked trips!**"}
    </div>
    )} else {
        return (
            <p>Please login or signup to view this page.</p>
        )
    }
}

export default DisplayTrips;