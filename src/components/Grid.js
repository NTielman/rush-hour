import React, { useState, useEffect } from 'react'
import Vehicle from './Vehicle'

function Grid() {
    const verticalCar = "vertical";
    const horizontalCar = "horizontal";

    const [gridOverview, setGridOverview] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState({});

    // Start position of elements on grid
    const startGrid = [
        [horizontalCar, null, null],
        [null, null, null],
        [null, verticalCar, null]
    ]

    useEffect(() => {
        setGridOverview(startGrid);
    }, []);

    // Drag listeners
    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
    }

    const handleDrop = (newRow, newCol) => {
        setGridOverview(prevGrid => {
            let newGrid = prevGrid.map(elem => elem);
            if (selectedVehicle) {
                const { row: prevRow, col: prevCol, carDirection } = selectedVehicle;
                // remove vehicle from prev position
                newGrid[prevRow][prevCol] = null;

                // add vehicle to new position
                newGrid[newRow][newCol] = carDirection;
            }
            return newGrid;
        })
    }

    return (
        <section className='play-area'>
            <ul className="grid">
                {gridOverview && gridOverview.map((row, rowIndex) => {
                    // Create a list-item for every row
                    return (
                        <li className={`row${rowIndex}`} key={`row${rowIndex}`}>
                            <ul className='sub-list'>
                                {row.map((col, colIndex) => {
                                    // Create a list-item for every column
                                    return (
                                        <li
                                            className={`col${rowIndex},${colIndex}`}
                                            key={`col${rowIndex},${colIndex}`}
                                            onDragOver={handleDragOver}
                                            onDragEnter={handleDragEnter}
                                            onDrop={() => handleDrop(rowIndex, colIndex)}>
                                            {/* Determine if cell contains a vehicle or is empty */}
                                            {col ? <Vehicle orientation={col} setSelectedVehicle={setSelectedVehicle} row={rowIndex} col={colIndex} /> : `${rowIndex},${colIndex}`}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Grid