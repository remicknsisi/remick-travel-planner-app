import React from "react";
import { Link } from "react-router-dom";

function Hotel({ hotel }) {
    const { name, image, website } = hotel

    return (
        <div className="hotels">
            <h3><Link to={{ pathname: `${website}` }} target="_blank">{name}</Link></h3>
            <img className="city" src={image}/>
        </div>
    );
}

export default Hotel;

// render these in a grid