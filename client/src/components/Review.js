import React, { useState } from "react";

function Review({ review }) {
    const [error, setError] = useState('')
    const {comment, rating, user, id} = review


    function onDelete(){
        fetch(`/reviews/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}})
          .then(res => {
            if (res.ok){
                res.json()
                .then(deletedReview => {
                    console.log(deletedReview)})
            } else {
                res.json()
                .then(message => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
        }})
    }

    return (
        <div>
            <div className="review">
                {comment} | Rating: {'⭐'.repeat(rating)}
                <br/>
                Posted by: {user.name}
                <button onClick={() => onDelete()}>Delete</button>
                {error}
            </div>
        </div>
    );
}

export default Review;