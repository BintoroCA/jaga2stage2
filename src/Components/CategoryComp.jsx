import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

function CategoryComp(props) {
  const [show, setShow] = useState(false);

  // const handleClick = () => {setShow(true)}
  
  

  return (
        <div>
          <tr>
            <td>{props.no}</td>
            <td>{props.name}</td>
            <td><button onClick={() => setShow(true)} className='btnGreen'>Edit</button>
            <button className='btnRed'>Detele</button>
            </td>
          </tr>
          <Modal show={show}/>
        </div>
  )
}

export default CategoryComp