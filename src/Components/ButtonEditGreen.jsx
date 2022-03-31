import React from 'react'

const styles = {
    btnGreen: {
    width: '135px',
    height: '40px',
    background: '#56C05A',
    borderRadius: '5px',
    color: 'white',
    marginRight: '15px',
    border: 'none',
    fontWeight: '800'
    }
}

function ButtonEditGreen() {
  return (
    <button style={styles.btnGreen}>Edit</button>
  )
}

export default ButtonEditGreen