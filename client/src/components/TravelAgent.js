import React from "react";
import { useHistory } from "react-router-dom";

function TravelAgent({ travelAgent }) {
    const {available, name, email, id, image} = travelAgent
    const history = useHistory()

    return (
        <div className="card-container">
            <div className="agent-card">
            <img src={image} className="agent-prof-pic"/>
                <div className="agent-details">
                <br/>
                Name: {name}
                <br/>
                Contact: {email}
                <br/>
                Available for Booking? {available ? '✅' : '❌'}
                <br/>
                <button className="button" onClick={() => history.push(`/travelagents/${id}`)}>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default TravelAgent;