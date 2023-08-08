import React, { useState, useEffect } from "react";
import Location from "./Location";

function DisplayLocations() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('/locations')
        .then(res => res.json())
        .then(locationData => setLocations(locationData))
    }, [])

    return (
        <div className="locations-container">
            {locations.map(l => <Location key={l.id} location={l}/>)}
        </div>
    );
}

export default DisplayLocations;