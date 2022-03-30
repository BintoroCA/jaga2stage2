import React from 'react'
import EditBtn from '../Components/ButtonEditGreen'
import DeleteBtn from '../Components/ButtonDeleteRed'

function CategoryComp(props) {
  return (
    <div>
        <tr>
            <td>{props.no}</td>
            <td>{props.name}</td>
            <td>{EditBtn}{DeleteBtn}</td>
        </tr>
    </div>
  )
}

export default CategoryComp