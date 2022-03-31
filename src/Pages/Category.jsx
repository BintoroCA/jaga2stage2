import React from 'react'
import CategoryComp from '../Components/CategoryComp'
import NavbarComp from '../Components/NavbarComp'
import { useState } from 'react'
import Modal from '../Components/Modal'

const styles = {
  h2: {
    fontSize: '24px',
    color: 'white',
    marginBottom: '15px',
  },
  table: {
    width : '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
  },
  th: {
    height: '73px',
    fontSize: '20px',
    color: 'white',
  },

}

function Category() {

  return (
    <div>
      <NavbarComp/>
      <div className='categoryPageContainer'>
        <h2 style={styles.h2}>List Category</h2>
        <table style={styles.table}>
          <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Category Name</th>
              <th style={styles.th}>Action</th>
          </tr>
          <CategoryComp 
          no='1'
          name='Mouse'

          // onClick={onclk(true)}
          // onclk={handleClick(true)}
          />
          <CategoryComp 
          no='2'
          name='Keyboard'/>
          <CategoryComp 
          no='3'
          name='Underwear'/>
          <CategoryComp 
          no='4'
          name='Bag'/>
          <CategoryComp 
          no='4'
          name='T-Shirt'/>
          <CategoryComp 
          no='5'
          name='Handgun'/>
        </table>
      </div>
    </div>
  )
}

export default Category