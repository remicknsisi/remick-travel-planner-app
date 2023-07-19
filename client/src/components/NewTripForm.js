// import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import { UserContext } from "../context/UserProvider.js";

// function NewTripForm() {
//     const [hotelId, setHotelId] = useState('')
//     const [locationId, setLocationId] = useState()
//     const [locationImage, setImage] = useState('')
//     const [errorsList, setErrorsList] = useState([])
//     const { handleSubmitTrip, currentUser } = useContext(UserContext)
//     const history = useHistory()

//     const [locations, setLocations] = useState([])

//     useEffect(() => {
//         fetch('/locations')
//         .then(res => res.json())
//         .then(locationData => setLocations(locationData))
//     }, [])

//     const [hotels, setHotels] = useState([])

//     useEffect(() => {
//         fetch('/hotels')
//         .then(res => res.json())
//         .then(hotelData => setHotels(hotelData))
//     }, [])

//     function onSubmitTrip(e){
//         e.preventDefault()

//         const newTrip = {
//             booked: false,
//             hotel_id: hotelId,
//             location_id: locationId,
//             image: locationImage
//         }

//         console.log(newTrip)

//         fetch(`/travelagents/${currentUser.id}/trips`, {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(
//               newTrip
//             )
//           })
//           .then(res => {
//             if(res.ok){
//                 res.json().then((newTrip) => {
//                     handleSubmitTrip(newTrip)
//                     history.push(`/trips`)})
//             } else {
//                 res.json().then((message) => {
//                     console.log(message)
//                     const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
//                     setErrorsList(errorLis)
//                 })
//             }
//         })
//     }

//     const hotelOptions = hotels.map(h => <option value={h.id} key={h.id}>{h.name}</option>)
//     const locationOptions = locations.map(l => <option value={l.id} key={l.id}>{l.city}, {l.country}</option>)
//     const imageOptions = locations.map(l => <option value={l.image} key={l.id}>{l.city}, {l.country}</option>)

//     return (
//         <div className="review-form-container">
//             <form className="form" onSubmit={onSubmitTrip}>
//             <h2>Plan a New Trip: </h2>
//             <label>Hotel: </label>
//                 <select className="form-input" type="text" value={hotelId} onChange={e => setHotelId(1*e.target.value)}>
//                     <option>Select a Hotel</option>
//                     {hotelOptions}
//                 </select>
//                 <br/>
//             <label>Location: </label>
//                 <select className="form-input" type="text" value={locationId} onChange={e => setLocationId(1*e.target.value)}>
//                     <option>Select a Location</option>
//                     {locationOptions}
//                 </select>
//                 <br/><br/>
//             <label>Image of Destination: </label>
//                 <select className="form-input" type="text" value={locationImage} onChange={e => setImage(e.target.value)}>
//                 <option>Select a Location Image</option>
//                     {imageOptions}
//                 </select>
//             <br/><br/>
//             <button>Submit</button>
//             <p className="error-message">{errorsList}</p>
//             </form>
//         </div>
//     );
// }

// export default NewTripForm;