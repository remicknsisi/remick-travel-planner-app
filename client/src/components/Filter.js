import React from "react";

function Filter({ onCheck, isChecked }) {
    return (
        <div className="filter">
            <p>Sort Agents by Availability: 
                <input type="checkbox" value={isChecked} onChange={() => onCheck()}/>
            </p>
        </div>
      );
}

export default Filter;