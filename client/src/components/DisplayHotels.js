import React, { useState, useEffect } from "react";

function DisplayHotels() {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetch('/hotels')
        .then(res => res.json())
        .then(hotelData => setHotels(hotelData))
    }, [])

    return (
        <div>
            this is a DisplayHotels component for users
        </div>
    );
}

export default DisplayHotels;