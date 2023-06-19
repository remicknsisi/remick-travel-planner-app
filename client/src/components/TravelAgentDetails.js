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

    function handleDeleteReview(deletedReview){
        const updatedReviews = travelAgent.reviews.filter(review => review.id !== deletedReview.id)
        const agentWithUpdatedReviews = {...travelAgent, reviews: updatedReviews}
        setTravelAgent(agentWithUpdatedReviews)
    }

    const reviews = travelAgent.reviews.map(review => <Review key={review.id} review={review} onDelete={handleDeleteReview}/>)

    return (
        <div>
            <h2>{travelAgent.name}</h2>
            <div className="agent-card">
                <img src={travelAgent.image}/>
                <br/>
                Overall Rating: {'⭐'.repeat(travelAgent.rating)}
                <br/>
                Contact: {travelAgent.email}
                <br/>
                Available for Booking? {travelAgent.available ? '✅' : '❌'}
                <br/>
            </div>
            <br/><br/>
            <div className="container">
                <h3>My Packages</h3>
            </div>
            <br/>
            <div className="container">
            <h3>Reviews</h3>
            {reviews}
            </div>
            <br/>
            <button onClick={() => history.push(`/travelagents/${id}/reviews/new`)}>Booked with me before? Leave a review.</button>
        </div>
    );
}

export default TravelAgentDetails;