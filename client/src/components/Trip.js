import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import Activity from "./Activity";
import { useHistory } from "react-router-dom";

function Trip({ trip, isDisplayTrips }) {
    const [location, setLocation] = useState('')
    const [error, setError] = useState('')
    const [hotel, setHotel] = useState('')
    const [bookings, setBookings] = useState([])
    const [errorsList, setErrorsList] = useState([])
    const { handleBookTrip, currentUser, handleDeleteBooking } = useContext(UserContext)
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

    useEffect(() => {
        fetch(`/bookings`)
        .then(res => {
            if (res.ok) {
              res.json()
              .then(bookingData => {
                setBookings(bookingData)})
            }})
    }, [])

    function onBookTrip(){
    if (trip.travel_agent.available){
        fetch('/bookings', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                trip_id: trip.id
            })
        })
        .then(res => {
            if(res.ok){
                res.json().then(newBooking => {
                    handleBookTrip(newBooking, trip)
                    history.push('/trips')
                })
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })} else {
            setErrorsList(<p>This agent is currently unavailable for booking.</p>)
        }
    }
    //use conditional logic here to point out of this trip is already booked -- make it a validation

    function onDeleteBooking(){
        const deletedBooking = bookings.find(b => b.trip_id == trip.id)
        fetch(`/bookings/${deletedBooking.id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            if(res.ok){
                res.json().then(deletedBooking => {
                    handleDeleteBooking(deletedBooking, trip)
                })
            } else {
                res.json()
                .then(message => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
        }
        })
    }

    return (
        <div className="trip-component">
            {isDisplayTrips ?
            <>
            <img className="city" src={location.image}/><img className="city" src={hotel.image}/>
            <h3>Your trip to: {location.city}, {location.country}</h3>
            <button onClick={() => history.push(`/trips/${trip.id}`)}>See Trip Details</button><button onClick={() => onDeleteBooking()}>Cancel this Booking</button>
            <p className="error-message">{error}</p>
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
            <p className="error-message">{error}</p>
            </>}
        </div>
    );
}

export default Trip;