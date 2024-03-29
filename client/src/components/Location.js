import React from "react";

function Location({ location }) {

    const { city, country, image } = location

    return (
        <div className="locations">
            <h3>{city}, {country}</h3>
            <img className="city" src={image}/>
        </div>
    );
}

export default Location;