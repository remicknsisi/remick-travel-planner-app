import React from "react";

function Activity({ activity }) {

    return (
        <div>
            <li>{activity.name} | Age Minimum: {activity.age_minimum == 0 ? "N/A" : activity.age_minimum}</li>
        </div>
    );
}

export default Activity;