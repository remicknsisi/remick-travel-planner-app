import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import TravelAgent from "./TravelAgent";
import Filter from "./Filter.js";

function DisplayTravelAgents() {
    const [travelAgents, setTravelAgents] = useState([])
    const [isChecked, setIsChecked] = useState(false)
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

    function handleCheck(){
        setIsChecked(!isChecked)
    }

    const sortedAgents = travelAgents.filter(t => t.available == true)
    const agentsToDisplay = isChecked ? sortedAgents : travelAgents

    if (currentUser) {
        return (
        <div>
            <div className="text">
                <h1>Meet our Agents</h1>
                <Filter onCheck={handleCheck} isChecked={isChecked}/>
                {travelAgents.length > 0 ? agentsToDisplay.map(travelAgent => {
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