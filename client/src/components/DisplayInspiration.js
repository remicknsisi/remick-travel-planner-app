import React, { useState, useEffect } from "react";

function DisplayInspiration() {
    const [destinationsAreHidden, setDestinationsAreHidden] = useState(false)
    const [hotelsAreHidden, setHotelsAreHidden] = useState(true)
    const [activitiesAreHidden, setActivitiesAreHidden] = useState(true)

    const [locations, setLocations] = useState([])
    const [hotels, setHotels] = useState([])
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('/locations')
        .then(res => res.json())
        .then(locationData => setLocations(locationData))
    }, [])
    useEffect(() => {
        fetch('/hotels')
        .then(res => res.json())
        .then(hotelData => setHotels(hotelData))
    }, [])
    useEffect(() => {
        fetch('/activities')
        .then(res => res.json())
        .then(activityData => setActivities(activityData))
    }, [])

    return (
        <div>
            <button onClick={() => setDestinationsAreHidden(!destinationsAreHidden)}>View Destinations</button><button onClick={() => setHotelsAreHidden(!hotelsAreHidden)}>View Hotels</button><button onClick={() => setActivitiesAreHidden(!activitiesAreHidden)}>View Activities</button>
        </div>
    );
}

export default DisplayInspiration;