import React from 'react'

function GameOverModal() {
  return (
    <div className="backdrop hide">
      <div className="modal">
        <h2 className="modal-title">Congratulations</h2>
        <p className="modal-description">You won!</p>
      </div>
    </div>
  )
}

export default GameOverModal