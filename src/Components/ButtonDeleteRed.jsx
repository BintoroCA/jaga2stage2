import React from 'react'

const styles = {
    btnRed: {
    width: '135px',
    height: '40px',
    background: '#F74D4D',
    borderRadius: '5px',
    color: 'white',
    border: 'none',
    fontWeight: '800'
    }
}

function ButtonDeleteRed() {
  return (
    <button style={styles.btnRed}>Delete</button>
  )
}

export default ButtonDeleteRed