import React, { useState } from 'react'

function Vehicle({ orientation = "horizontal" }) {

    const [invisibility, setInvisibility] = useState(false)

    // Make vehicle invisble on drag
    const handleDragStart = () => {
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