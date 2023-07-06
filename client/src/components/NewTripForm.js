import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserProvider.js";

function NewTripForm() {
    const [hotelId, setHotelId] = useState('')
    const [locationId, setLocationId] = useState('')
    const [image, setImage] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { handleSubmitTrip, currentUser } = useContext(UserContext)
    const { id } = useParams()
    const history = useHistory()

    // need to set up url to be consistent with route and then maybe i can use params in my requests
    // need to fetch locations an dhotels so we can display them here

    function onSubmitTrip(e){
        e.preventDefault()

        const newTrip = {
            booked: false,
            hotel_id: hotelId,
            location_id: locationId,
            image: image
            // or shoul di auto set image to new location photo
        }

        fetch(`/travel_agents/${currentUser.id}/trips`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
              newTrip
            )
          })
          .then(res => {
            if(res.ok){
                res.json().then((newTrip) => {
                    handleSubmitTrip(newTrip)
                    // setNewComment('')
                    // setNewRating()
                    history.push(`/travelagents/${currentUser.id}/trips`)})
            } else {
                res.json().then((message) => {
                    console.log(message)
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    const hotelOptions = hotels.map(h => <option value={h.id} key={h.id}>{h.name}</option>)
    const locationOptions = locations.map(l => <option value={l.id} key={l.id}>{l.city}, {l.country}</option>)

    return (
        <div className="review-form-container">
            <form className="form" onSubmit={onSubmitTrip}>
            <label>Hotel: </label>
                <select className="form-input" type="text" value={hotelId} onChange={e => setHotelId(1*e.target.value)}>
                    <option>Select a Hotel</option>
                    {hotelOptions}
                </select>
                <br/>
            <label>Location: </label>
                <select className="form-input" type="text" value={locationId} onChange={e => setLocationId(1*e.target.value)}>
                    <option>Select a Location</option>
                    {locationOptions}
                </select>
                <br/><br/>
            <label>Image of Destination: </label>
                <input className="form-input" type="text" value={image} onChange={e => setImage(e.target.value)}></input>
            <button>Submit</button>
            <p className="error-message">{errorsList}</p>
            </form>
        </div>
    );
}

// do i need options for creating new locations hotels and activities?

export default NewTripForm;