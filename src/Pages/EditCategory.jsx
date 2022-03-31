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
        marginBottom: '70px',
        background: 'rgba(210, 210, 210, 0.25)',
        border: '2px solid #BCBCBC',
        borderRadius: '5px',
    }
  }

function EditCategory() {
  return (
    <div>
        <NavbarComp/>
        <div className="editCategoryPageContainer">
            <h2 style={styles.h2}>Edit Category</h2>
            <input style={styles.input} value=""></input>
            <WideSaveBotton/>
        </div>
    </div>
  )
}

export default EditCategory