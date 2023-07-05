import React, { useState, useEffect } from "react";
import Activity from "./Activity";

function DisplayActivities() {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('/activities')
        .then(res => res.json())
        .then(activityData => setActivities(activityData))
    }, [])

    return (
        <div>
            {activities.map(a => <Activity key={a.id} activity={a}/>)}
        </div>
    );
}

export default DisplayActivities;