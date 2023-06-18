import React from "react";
import { useHistory } from "react-router-dom";

function TravelAgent({ travelAgent }) {
    const {available, name, email, id, image} = travelAgent
    const history = useHistory()

    console.log(travelAgent)

    return (
        <div>
            <div className="text">
                <img src={image}/>
                Name: {name} | Contact: {email} | Available for Booking? {available ? '✅' : '❌'}
                <button className="button" onClick={() => history.push(`/travelagents/${id}`)}>Learn More</button>
            </div>
        </div>
    );
}

export default TravelAgent;