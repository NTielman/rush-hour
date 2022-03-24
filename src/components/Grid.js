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

    // Resets the grid to it's startposition
    const resetGrid = () => {
        setGridOverview(startGrid);
    }

    useEffect(() => {
        resetGrid()
    }, []);

    // Drag listeners
    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
    }

    const handleDrop = (newRow, newCol) => {
        if (selectedVehicle) {
            // Get selected vehicle info
            const { row: prevRow, col: prevCol, carDirection } = selectedVehicle;

            if (carDirection === horizontalCar) {
                // Ensure vehicle only moves on it's x-axis
                if (newRow !== prevRow) return;

                // Ensure vehicle has moved
                if (newCol === prevCol) return;

                // Ensure there are no vehicles between start position and end
                if (newCol > prevCol) { // Vehicle moved forward
                    for (let i = prevCol + 1; i <= newCol; i++) {
                        const cellHasVehicle = gridOverview[newRow][i];
                        if (cellHasVehicle) return;
                    }
                } else { // Vehicle moved backward
                    for (let i = prevCol - 1; i >= newCol; i--) {
                        const cellHasVehicle = gridOverview[newRow][i];
                        if (cellHasVehicle) return;
                    }
                }
            }

            if (carDirection === verticalCar) {
                // Ensure vehicle only moves on it's y-axis
                if (newCol !== prevCol) return;

                // Ensure vehicle has moved
                if (newRow === prevRow) return;

                // Ensure there are no vehicles between start position and end
                if (newRow > prevRow) { // Vehicle moved downward
                    for (let i = prevRow + 1; i <= newRow; i++) {
                        const cellHasVehicle = gridOverview[i][newCol];
                        if (cellHasVehicle) return;
                    }
                } else { // Vehicle moved upward
                    for (let i = prevRow - 1; i >= newRow; i--) {
                        const cellHasVehicle = gridOverview[i][newCol];
                        if (cellHasVehicle) return;
                    }
                }
            }

            // Update vehicle position
            setGridOverview(prevGrid => {
                let newGrid = prevGrid.map(elem => elem);
                // Remove vehicle from prev position
                newGrid[prevRow][prevCol] = null;

                // Add vehicle to new position
                newGrid[newRow][newCol] = carDirection;
                return newGrid;
            })
        }
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
            <button className="reset-btn" onClick={resetGrid}>Reset</button>
        </section>
    )
}

export default Grid