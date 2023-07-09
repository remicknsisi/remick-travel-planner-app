import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Activity from "./Activity";

function TripDetails() {
    const { id } = useParams()
    const [trip, setTrip] = useState({
        hotel: '',
        location: '',
        activities: [],
        bookings: []
    })

    useEffect(() => {
        fetch(`/trips/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(trip => {
                    setTrip(trip)
                })
            }
        })
    }, [])
    //add conditional error handling here
    //do i want to remove the booked attr of the trips object or will i use so a user cant book the same trip twice?

    if(trip.id)
        {return (
        <div>
            <h2>Your Visit to {trip.location.country}</h2>
            <img className="city" src={trip.location.image}/>
            <p>Location: {trip.location.city}, {trip.location.country}</p>
            <p>Hotel: {trip.hotel.name} | Website: {trip.hotel.website}</p>
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