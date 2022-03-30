import React from 'react'

const styles = {
    btnRed: {
    width: '135px',
    height: '40px',
    background: '#F74D4D',
    borderRadius: '5px',
    color: 'white',
    }
}

function ButtonDeleteRed() {
  return (
    <button style={styles.btnRed}>Edit</button>
  )
}

export default ButtonDeleteRed