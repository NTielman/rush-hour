import React from 'react'

function Grid() {
    const gridAreas = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    return (
        <section className='play-area'>
            <ul className="grid">
                {gridAreas.map((row, rowIndex) => {
                    return (<li className={"row" + rowIndex} key={"row" + rowIndex}>
                        {row.map((col, colIndex) => {
                            return (<li className={"col" + colIndex} key={"col" + colIndex}>{ rowIndex },{colIndex}</li>)
                        })}
                    </li>)
                })}
            </ul>
        </section>
    )
}

export default Grid