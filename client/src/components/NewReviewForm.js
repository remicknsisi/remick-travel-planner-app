import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserProvider.js";

function NewReviewForm () {
    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState()
    const [errorsList, setErrorsList] = useState([])
    const { handleSubmitReview } = useContext(UserContext)
    const { id } = useParams()
    const history = useHistory()

    function onSubmitReview(e){
        e.preventDefault()

        const newReview = {
            travel_agent_id: id,
            rating: newRating,
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
                    setNewRating()
                    history.push(`/travelagents/${id}`)})
            } else {
                res.json().then((message) => {
                    console.log(message)
                    // const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    // setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className="review-container">
            <label>Leave a review for NAME: </label>
            <form className="review-form" onSubmit={onSubmitReview}>
            Leave a Comment: <input className="review-input" type="text" placeholder="E.g. This agent is the best!" value={newComment} onChange={e => setNewComment(e.target.value)}>
                </input>
                <br/>
            Choose a Rating: <input className="review-input" type="number" placeholder="Rate 1-5 Stars" value={newRating} onChange={e => setNewRating(e.target.value)}>
                </input>
                <br/>
                <button>Submit</button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default NewReviewForm;