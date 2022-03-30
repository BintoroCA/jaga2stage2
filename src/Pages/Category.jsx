import React from 'react'
import TrTd from '../Components/CategoryComp'

function Category() {
  return (
    <div>
      <h2>HTML Table</h2>
      <table>
        <tr>
            <th>No</th>
            <th>Category Name</th>
            <th>Action</th>
        </tr>
        <TrTd 
        no='1'
        name='Mouse'/>
      </table>
    </div>
  )
}

export default Category