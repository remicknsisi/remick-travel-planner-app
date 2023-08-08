import React, { useState, useEffect } from "react";
import Hotel from "./Hotel";

function DisplayHotels() {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetch('/hotels')
        .then(res => res.json())
        .then(hotelData => setHotels(hotelData))
    }, [])

    return (
        <div className="hotels-container">
            {hotels.map(h => <Hotel key={h.id} hotel={h}/>)}
        </div>
    );
}

export default DisplayHotels;