import React, { useState, useContext } from "react";
import DisplayActivities from "./DisplayActivities";
import DisplayHotels from "./DisplayHotels";
import DisplayLocations from "./DisplayLocations";
import { UserContext } from "../context/UserProvider.js";

function DisplayInspiration() {
    const [destinationsAreHidden, setDestinationsAreHidden] = useState(false)
    const [hotelsAreHidden, setHotelsAreHidden] = useState(true)
    const [activitiesAreHidden, setActivitiesAreHidden] = useState(true)
    const { currentUser } = useContext(UserContext)

    if (currentUser) {
    return (
        <div>
            <h1>Where will you go next?</h1>
            <button onClick={() => {
                setDestinationsAreHidden(!destinationsAreHidden)
                setHotelsAreHidden(true)
                setActivitiesAreHidden(true)}}>View Destinations</button>
            <button onClick={() => {
                setHotelsAreHidden(!hotelsAreHidden)
                setActivitiesAreHidden(true)
                setDestinationsAreHidden(true)}}>View Hotels</button>
            <button onClick={() => {
                setActivitiesAreHidden(!activitiesAreHidden)
                setHotelsAreHidden(true)
                setDestinationsAreHidden(true)}}>View Activities</button>
            {destinationsAreHidden ? null : <DisplayLocations/>}
            {hotelsAreHidden ? null : <DisplayHotels/>}
            {activitiesAreHidden ? null : <DisplayActivities/>}
        </div>
    )} else {
        return (
            <p>Please login or signup to view this page.</p>
        )
    }
}

export default DisplayInspiration;