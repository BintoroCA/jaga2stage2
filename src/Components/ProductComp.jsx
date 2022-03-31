import React from 'react'
import EditBtn from '../Components/ButtonEditGreen'
import DeleteBtn from '../Components/ButtonDeleteRed'

function ProductComp(props) {
  return (
    <tr>
            <td>{props.no}</td>
            <td>{props.photo}</td>
            <td>{props.productname}</td>
            <td>{props.productdesc}</td>
            <td>{props.price}</td>
            <td>{props.qty}</td>
            <td><EditBtn/><DeleteBtn/></td>
        </tr>
  )
}

export default ProductComp
