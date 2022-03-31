import React from 'react'

const btnStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '15px',
    width : '100%',
    height: '50px',
    color: 'white',
    backgroundColor: '#56C05A',
    border: 'none',
    borderRadius: '5px',
  }

function WideSaveBotton() {
  return (
    <button style={btnStyle}>Save</button>
  )
}

export default WideSaveBotton