import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TravelAgentDetails() {
    const [travelAgent, setTravelAgent] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`/travel_agents/${id}`)
        .then(res => res.json())
        .then(t => setTravelAgent(t))
    }, [])

    console.log(travelAgent)

    return (
        <div>
            <div className="text">
                <img/>
                Name: {travelAgent.name} | Contact: {travelAgent.email} | Available for Booking? {travelAgent.available ? '✅' : '❌'}
            </div>
        </div>
    );
}

export default TravelAgentDetails;