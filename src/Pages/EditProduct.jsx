import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import WideSaveBotton from '../Components/WideSaveBotton'

const styles = {
    h2: {
      fontSize: '24px',
      color: 'white',
      marginBottom: '50px',
    },
    input: {
        width: '100%',
        height: '50px',
        fontSize: '18px',
        color: 'white',
        marginBottom: '20px',
        background: 'rgba(210, 210, 210, 0.25)',
        border: '2px solid #BCBCBC',
        borderRadius: '5px',
        paddingLeft: '10px'
    },
    inputDesc: {
        width: '100%',
        height: '143px',
        fontSize: '18px',
        color: 'white',
        marginBottom: '20px',
        background: 'rgba(210, 210, 210, 0.25)',
        border: '2px solid #BCBCBC',
        borderRadius: '5px',
        rows: '5',
        padding: '5px 10px'
        // col: '50',
    },
    lastinput: {
        width: '100%',
        height: '50px',
        fontSize: '18px',
        color: 'white',
        marginBottom: '10vh',
        background: 'rgba(210, 210, 210, 0.25)',
        border: '2px solid #BCBCBC',
        borderRadius: '5px',
        paddingLeft: '10px'
    },
    btn: {
        fontSize: '18px',
        color: 'white',
        background: '#F74D4D',
        border: '2px solid #F74D4D',
        boxSizing: 'border-box',
        borderRadius: '5px',
        width: '143px',
        height: '50px',
    },
    flex: {
        display: 'flex',
        alignItem: 'center',
        marginBottom: '20px',
    },
    p: {
        marginTop: '14px',
        marginLeft: '10px',
        alignItem: 'center',
    }
  }

function EditProduct() {
  return (
    <div>
        <NavbarComp/>
        <div className="editCategoryPageContainer">
            <h2 style={styles.h2}>Edit Product</h2>
            <div style={styles.flex}>
                <button style={styles.btn}>Upload Image</button>
                <p style={styles.p}>Mouse.jpg</p>
            </div>
            <input type='text' style={styles.input} value='Mouse'></input>
            <textarea style={styles.inputDesc} value='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'></textarea>
            <input type='number' style={styles.input} value='500.000'></input>
            <input type='number' style={styles.lastinput} value='600'></input>
            <WideSaveBotton />
        </div>
    </div>
  )
}

export default EditProduct