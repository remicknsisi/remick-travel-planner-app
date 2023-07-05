import React from "react";

function Filter({ onCheck, isChecked }) {
    return (
        <div className="filter">
            <p>Only View Agents Available for Booking: 
                <input type="checkbox" value={isChecked} onChange={() => onCheck()}/>
            </p>
        </div>
      );
}

export default Filter;