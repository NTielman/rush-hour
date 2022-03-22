import React from 'react'
import Vehicle from './Vehicle'

function Grid() {
    const verticalCar = "vertical";
    const horizontalCar = "horizontal";

    // Hardcoded overview of board grid
    const gridAreas = [
        [horizontalCar, null, null],
        [null, null, null],
        [null, verticalCar, null]
    ]

    return (
        <section className='play-area'>
            <ul className="grid">
                {gridAreas.map((row, rowIndex) => {
                    // Create a list-item for every row
                    return (
                        <li className={`row${rowIndex}`} key={`row${rowIndex}`}>
                            {row.map((col, colIndex) => {
                                // Create a list-item for every column
                                return (
                                    <li className={`col${rowIndex},${colIndex}`}
                                        key={`col${rowIndex},${colIndex}`}>
                                        {/* Determine if cell contains a vehicle or is empty */}
                                        {col ? <Vehicle orientation={col} /> : `${rowIndex},${colIndex}`}
                                    </li>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Grid