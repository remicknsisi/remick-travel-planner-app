import React, { useState, useEffect } from "react";

function DisplayActivities() {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('/activities')
        .then(res => res.json())
        .then(activityData => setActivities(activityData))
    }, [])

    return (
        <div>
            this is a DisplayActivities component for users
        </div>
    );
}

export default DisplayActivities;