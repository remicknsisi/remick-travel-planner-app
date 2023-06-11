import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

function TravelAgentDetails() {
    const [travelAgent, setTravelAgent] = useState({
        reviews: []
    })
    const { id } = useParams()

    useEffect(() => {
        fetch(`/travel_agents/${id}`)
        .then(res => res.json())
        .then(t => setTravelAgent(t))
    }, [])

    const reviews = travelAgent.reviews.map(review => <Review key={review.id} review={review}/>)

    console.log(travelAgent)

    return (
        <div>
            <div className="text">
                <img/>
                Name: {travelAgent.name} | Contact: {travelAgent.email} | Available for Booking? {travelAgent.available ? '✅' : '❌'}
                {reviews}
            </div>
        </div>
    );
}

export default TravelAgentDetails;