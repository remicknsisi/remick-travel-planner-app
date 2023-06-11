import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Review from "./Review";

function TravelAgentDetails() {
    const [travelAgent, setTravelAgent] = useState({
        reviews: []
    })
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/travel_agents/${id}`)
        .then(res => res.json())
        .then(t => setTravelAgent(t))
    }, [])

    const reviews = travelAgent.reviews.map(review => <Review key={review.id} review={review}/>)

    return (
        <div>
            <div className="text">
                <img/>
                Name: {travelAgent.name} | Contact: {travelAgent.email} | Available for Booking? {travelAgent.available ? '✅' : '❌'}
                {reviews}
                <button onClick={() => history.push(`/travelagents/${id}/reviews/new`)}>Booked with me before? Leave a review.</button>
            </div>
        </div>
    );
}

export default TravelAgentDetails;