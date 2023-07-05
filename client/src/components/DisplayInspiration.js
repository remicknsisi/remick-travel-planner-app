import React, { useState } from "react";
import DisplayActivities from "./DisplayActivities";
import DisplayHotels from "./DisplayHotels";
import DisplayLocations from "./DisplayLocations";

function DisplayInspiration() {
    const [destinationsAreHidden, setDestinationsAreHidden] = useState(false)
    const [hotelsAreHidden, setHotelsAreHidden] = useState(true)
    const [activitiesAreHidden, setActivitiesAreHidden] = useState(true)

    return (
        <div>
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
    );
}

export default DisplayInspiration;