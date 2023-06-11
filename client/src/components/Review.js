import React from "react";

function Review({ review }) {

    const {comment, rating, user} = review

    return (
        <div>
            <div className="text">
                {comment} | Rating: {'⭐'.repeat(rating)} | Posted by: {user.name}
            </div>
        </div>
    );
}

export default Review;