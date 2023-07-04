import React, { useState, useEffect } from "react";
import Activity from "./Activity";

function Trip({ trip }) {
    const [location, setLocation] = useState('')
    const [hotel, setHotel] = useState('')

    useEffect(() => {
        fetch(`/locations/${trip.location_id}`)
        .then(res => {
            if (res.ok) {
              res.json()
              .then(locationData => {
                setLocation(locationData)})
            }})
    }, [])

    useEffect(() => {
        fetch(`/hotels/${trip.hotel_id}`)
        .then(res => {
            if (res.ok) {
              res.json()
              .then(hotelData => {
                setHotel(hotelData)})
            }})
    }, [])

    const activities = trip.activities.map(a => <Activity key={a.id} activity={a}/>)

    return (
        <div>
            <img className="city" src={location.image}/><img className="city" src={hotel.image}/>
            <p>Location: {location.city}, {location.country}</p>
            <p>Hotel: {hotel.name} | {hotel.website}</p>
            <p>Itinerary: </p>
                {activities}
            <button>Book this Trip!</button>
        </div>
    );
}

export default Trip;