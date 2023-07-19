import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import { useHistory } from "react-router-dom";

function Review({ review, onDelete }) {
    const [error, setError] = useState('')
    const {comment, rating, user, id} = review
    const { currentUser, handleDeleteReview } = useContext(UserContext)
    const history = useHistory()

    function onDelete(){
        fetch(`/reviews/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}})
          .then(res => {
            
            if (res.ok){
                console.log(res)
                res.json()
                .then(deletedReview => {
                    handleDeleteReview(deletedReview)
                    history.push(`/travelagents`)
                })
            } else {
                res.json()
                .then(message => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
        }})
    }

    if (currentUser){
        return (
            <div>
                <div className="review">
                    {comment} | Rating: {'⭐'.repeat(rating)}
                    <br/>
                    Posted by: {user.name} |  <button onClick={() => onDelete()}>Delete</button>
                    <p className="error-message">{error}</p>
                </div>
            </div>
        )
    } else {
        <h1>Please Log In or Sign Up.</h1>
    }
}

export default Review;