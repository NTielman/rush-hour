import React from 'react'

function Vehicle({ orientation = "horizontal" }) {

    return (
        <div className={`vehicle ${orientation}`}>
            <span className="vehicle-body">
                <span className="vehicle-top">
                </span>
            </span>
        </div>
    )
}

export default Vehicle