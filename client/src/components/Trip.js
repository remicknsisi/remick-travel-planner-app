import React, { useState, useEffect } from "react";

function Trip({ trip }) {
    const [location, setLocation] = useState('')
    const [hotel, setHotel] = useState('')
    const [activities, setActivities] = useState([])

    console.log(trip)

    useEffect(() => {
        fetch("/")
    })

    return (
        <div>
            <img src={trip.image}/>
            <p>Location: {location}</p>
            <p>Hotel: {hotel}</p>
            <p>Itinerary: {activities}</p>
            <button>Book this Trip!</button>
        </div>
    );
}

export default Trip;