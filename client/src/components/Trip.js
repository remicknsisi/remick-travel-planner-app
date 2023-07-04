import React, { useState, useEffect } from "react";

function Trip({ trip }) {
    const [location, setLocation] = useState('')
    const [hotel, setHotel] = useState('')
    const [activities, setActivities] = useState([])

    console.log(trip)

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

    console.log(hotel)

    return (
        <div>
            <img className="city" src={location.image}/><img className="city" src={hotel.image}/>
            <p>Location: {location.city}, {location.country}</p>
            <p>Hotel: {hotel.name} | {hotel.website}</p>
            <p>Itinerary: {activities}</p>
            <button>Book this Trip!</button>
        </div>
    );
}

export default Trip;