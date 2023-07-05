import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import Activity from "./Activity";
import { useHistory } from "react-router-dom";

function Trip({ trip, isDisplayTrips }) {
    const [location, setLocation] = useState('')
    const [hotel, setHotel] = useState('')
    const { handleBookTrip, currentUser, handleDeleteBooking } = useContext(UserContext)
    const history = useHistory()

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
                    history.push('/trips')
                })
            }
        })
    }
    //use conditional logic here to point out of this trip is already booked

    function onDeleteBooking(){
        // need to search by booking id but only have trip to work with...
        // fetch(`/bookings/${}`, {
        //     method: 'DELETE',
        //     headers: {"Content-Type": "application/json"}
        // })
        // .then(res => {
        //     if(res.ok){
        //         res.json().then(deletedBooking => {
        //             handleDeleteBooking(deletedBooking)
        //             history.push('/trips')
        //         })
        //     }
        // })
    }

    return (
        <div className="trip-component">
            {isDisplayTrips ?
            <>
            <img className="city" src={location.image}/><img className="city" src={hotel.image}/>
            <h3>Your trip to: {location.city}, {location.country}</h3>
            <button onClick={() => history.push(`/trips/${trip.id}`)}>See Trip Details</button><button onClick={() => onDeleteBooking()}>Cancel this Booking</button>
            <br/>
            </> :
            <>
            <img className="city" src={location.image}/><img className="city" src={hotel.image}/>
            <p>Location: {location.city}, {location.country}</p>
            <p>Hotel: {hotel.name}</p>
            <p>Itinerary: </p>
                {trip.activities.map(a => <Activity key={a.id} activity={a}/>)}
            <br/>
            <button onClick={() => onBookTrip()}>Book this Trip!</button>
            </>}
        </div>
    );
}

export default Trip;