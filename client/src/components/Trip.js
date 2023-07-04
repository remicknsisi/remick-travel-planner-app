import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import Activity from "./Activity";
import { useHistory } from "react-router-dom";

function Trip({ trip }) {
    const [location, setLocation] = useState('')
    const [hotel, setHotel] = useState('')
    const { handleBookTrip, currentUser } = useContext(UserContext)
    const history = useHistory()

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

    function onBookTrip(){
        fetch('/bookings', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: currentUser.id,
                trip_id: trip.id
            })
        })
        .then(res => {
            if(res.ok){
                res.json().then(newBooking => {
                    handleBookTrip(newBooking)
                    history.push(`/trips/${trip.id}`)
                })
            }
        })
    }
    //use conditional logic here to point out of this trip is already booked

    const activities = trip.activities.map(a => <Activity key={a.id} activity={a}/>)

    return (
        <div className="trip-component">
            <img className="city" src={location.image}/><img className="city" src={hotel.image}/>
            <p>Location: {location.city}, {location.country}</p>
            <p>Hotel: {hotel.name}</p>
            <p>Itinerary: </p>
                {activities}
            <br/>
            <button onClick={() => onBookTrip()}>Book this Trip!</button>
        </div>
    );
}

export default Trip;