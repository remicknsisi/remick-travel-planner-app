import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Activity from "./Activity";

function TripDetails() {
    const { id } = useParams()
    const [error, setError] = useState('')
    const [trip, setTrip] = useState({
        hotel: '',
        location: '',
        activities: [],
        bookings: []
    })

    const booking = trip.bookings.map(b => b.start_date + " ➡️ " + b.end_date)

    useEffect(() => {
        fetch(`/trips/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(trip => {
                    setTrip(trip)
                })
            } else {
                res.json()
                .then(message => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
            }
        })
    }, [])

    if(trip.id)
        {return (
        <div>
            <h2>Your Visit to {trip.location.country}</h2>
            <h3>{booking}</h3>
            <p className="error-message">{error}</p>
            <img className="city" src={trip.location.image}/>
            <p>Location: {trip.location.city}, {trip.location.country}</p>
            <p>Hotel: {trip.hotel.name} | <Link to={{ pathname: `${trip.hotel.website}` }} target="_blank">Website</Link></p>
            <p>Itinerary: </p>
                {trip.activities.map(a => <Activity key={a.id} activity={a}/>)}
            <br/>
            Booked with Agent <Link to={`/travelagents/${trip.travel_agent.id}`}>{trip.travel_agent.name}</Link>
            <br/>
            **POPULAR: Booked by {trip.bookings.length} users so far!**
        </div>
        )} 
    else {
        return (
            <p>Loading trip details...</p>
        )
    }
}

export default TripDetails;