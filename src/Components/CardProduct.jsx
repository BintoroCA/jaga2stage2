import React from 'react'

function CardProduct(props) {
  return (
    <div className="cardProductContainer">
        <img src={props.img} alt=''/>
        <title>{props.title}</title>
        <p>Rp.{props.price}</p>
        <p>Stock : {props.stock}</p>
    </div>
  )
}

export default CardProduct