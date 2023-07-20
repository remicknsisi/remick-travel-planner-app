import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Review from "./Review";
import Trip from "./Trip";

function TravelAgentDetails() {
    const [travelAgent, setTravelAgent] = useState({
        reviews: [],
        trips: []
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
                    {travelAgent.id ? travelAgent.trips.map(trip => <Trip key={trip.id} isDisplayTrips={false} trip={trip}/>) : null}
                    {travelAgent.trips.length == 0 ? "No trips are currently available by the agent" : null}
            </div>
            <br/>
            <div className="container">
            <h3>Reviews</h3>
            {travelAgent.id ? travelAgent.reviews.map(review => <Review key={review.id} review={review} onDeleteReview={handleDeleteReview}/>) : null}
            {travelAgent.reviews.length == 0 ? "No reviews have been written for this agent" : null}
            </div>
            <br/>
            <button onClick={() => history.push(`/travelagents/${id}/reviews/new`)}>Booked with me before? Leave a review.</button>
        </div>
    );
}

export default TravelAgentDetails;