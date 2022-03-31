import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import ProductComp from '../Components/ProductComp'

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

function product() {
  return (
    <div>
      <NavbarComp/>
      <div className='productPageContainer'>
        <h2 style={styles.h2}>List Product</h2>
        <table style={styles.table}>
          <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Photo</th>
              <th style={styles.th}>Product Name</th>
              <th style={styles.th}>Product Desc</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Qty</th>
              <th style={styles.th}>Action</th>
          </tr>
          <ProductComp 
          no='1'
          photo='Mouse.jpg'
          productname='Mouse'
          productdesc='lorem ipsum mouse'
          price='500.000'
          qty='600'/>
          <ProductComp 
          no='2'
          photo='Keyboard.jpg'
          productname='Keyboard'
          productdesc='lorem ipsum keyboard'
          price='700.000'
          qty='600'/>
          <ProductComp 
          no='3'
          photo='Underwear.jpg'
          productname='Underwear'
          productdesc='lorem ipsum underwear'
          price='300.000'
          qty='600'/>
          <ProductComp 
          no='4'
          photo='Pillow.jpg'
          productname='Pillow'
          productdesc='lorem ipsum Pillow'
          price='25.000'
          qty='600'/>
          <ProductComp 
          no='5'
          photo='Doll.jpg'
          productname='Doll'
          productdesc='lorem ipsum Doll'
          price='125.000'
          qty='600'/>
        </table>
      </div>
    </div>
  )
}

export default product