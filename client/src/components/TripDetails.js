import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Activity from "./Activity";

function TripDetails() {
    const { id } = useParams()
    const [trip, setTrip] = useState({
        hotel: '',
        location: '',
        activities: []
    })
    const [hotel, setHotel] = useState('')
    const history = useHistory()

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

    console.log(trip)

    //add conditional error handling here
    //do i want to remove the booked attr of the trips object or will i use so a user cant book the same trip twice?

    // useEffect(() => {
    //     fetch(`/hotels/${trip.hotel_id}`)
    //     .then(res => {
    //         if (res.ok) {
    //           res.json()
    //           .then(hotelData => {
    //             setHotel(hotelData)})
    //         }})
    // }, [])

    // console.log(trip, hotel)


    if(trip.id)
        {return (
        <div>
            <h2>Your Visit to {trip.location.country}</h2>
            <img className="city" src={trip.location.image}/>
            <p>Location: {trip.location.city}, {trip.location.country}</p>
            <p>Hotel: {hotel.name} | Website: {hotel.website}</p>
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