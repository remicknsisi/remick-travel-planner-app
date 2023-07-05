import React from "react";

function Hotel({ hotel }) {

    const { name, image, website } = hotel

    return (
        <div>
            <h3>{name}</h3>
            <img className="city" src={image}/>
            <p>{website}</p>
        </div>
    );
}

export default Hotel;