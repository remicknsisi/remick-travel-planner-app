import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserProvider.js";
import Rating from "./Rating.js";

function NewReviewForm () {
    const [newComment, setNewComment] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const [travelAgents, setTravelAgents] = useState([])
    const [rating, setRating] = useState(0);
    const { handleSubmitReview } = useContext(UserContext)
    const { id } = useParams()
    const history = useHistory()

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
    
    const reviewed_agent = travelAgents.find(t => t.id = id)

    function onSubmitReview(e){
        e.preventDefault()

        const newReview = {
            travel_agent_id: id,
            rating: rating,
            comment: newComment
        }

        fetch(`/travel_agents/${id}/reviews`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
              newReview
            )
          })
          .then(res => {
            if(res.ok){
                res.json().then((newReview) => {
                    handleSubmitReview(newReview)
                    setNewComment('')
                    setRating()
                    history.push(`/travelagents/${id}`)})
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className="review-form-container">
            {reviewed_agent ? <h2>Leave a review for {reviewed_agent.name}: </h2> : null}
            <form className="form" onSubmit={onSubmitReview}>
            Leave a Comment: <input className="form-input" type="text" placeholder="E.g. This agent is the best!" value={newComment} onChange={e => setNewComment(e.target.value)}>
                </input>
            <br/>
            <br/>
            Choose a Rating: 
            <br/><br/>
                <Rating rating={rating} setRating={setRating}/>
                <br/><br/>
                <button>Submit</button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default NewReviewForm;