import React, { useState } from 'react'

function Vehicle({ orientation = "horizontal", row, col, setSelectedVehicle }) {

    const [invisibility, setInvisibility] = useState(false)

    const handleDragStart = () => {
        setSelectedVehicle({
            row,
            col,
            carDirection: orientation
        })
        // Make vehicle invisble on drag
        setTimeout(() => setInvisibility(true));
    }

    // Make vehicle visible again on release
    const handleDragEnd = () => {
        setInvisibility(false);
    }

    return (
        <div
            className={`vehicle ${orientation} ${invisibility && 'hide'}`}
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}>
            <span className="vehicle-body">
                <span className="vehicle-top"></span>
            </span>
        </div>
    )
}

export default Vehicle