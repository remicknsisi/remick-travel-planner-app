import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import TravelAgent from "./TravelAgent";

function DisplayTravelAgents() {
    const [travelAgents, setTravelAgents] = useState([])
    const { currentUser } = useContext(UserContext)

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

    if (currentUser) {
        return (
        <div>
            <div className="text">
                <h3>Meet our Agents</h3>
                {travelAgents.length > 0 ? travelAgents.map(travelAgent => {
                    return (
                        <TravelAgent key={travelAgent.id} travelAgent={travelAgent}/>
                    )
                }) : <p>Loading agents...</p>}
            </div>
        </div>
    );
} else {
    return (
        <p>Please login or signup to view this page.</p>
    )
}}

export default DisplayTravelAgents;