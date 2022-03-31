// import React, { useState } from 'react'

function Modal(props) {
    if (!props.show) {
        return null
    }
  return (
    <div className="modalContainer">
        <div className="modalTitle">
            <p>Confirmation</p>
        </div>
        <div className="modalStatement">
            <p>Are you sure?</p>
        </div>
        <div className="modalButtonContainer">
            <button>Yes</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default Modal