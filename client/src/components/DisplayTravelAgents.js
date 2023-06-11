import React, { useState, useEffect } from "react";
import TravelAgent from "./TravelAgent";

function DisplayTravelAgents() {
    const [travelAgents, setTravelAgents] = useState([])

    useEffect(() => {
        fetch('/travel_agents')
        .then(res => {
            if (res.ok) {
              res.json()
              .then(travelAgentData => {
                setTravelAgents(travelAgentData)})
            }}
            ) 
        }, [])

    return (
        <div>
            <div className="text">
                Meet our Agents
                {travelAgents.length > 0 ? travelAgents.map(travelAgent => {
                    return (
                        <TravelAgent key={travelAgent.id} travelAgent={travelAgent}/>
                    )
                }) : null}
            </div>
        </div>
    );
}

export default DisplayTravelAgents;