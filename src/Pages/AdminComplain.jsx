import React from 'react'
import ico1 from '../Assets/Images/user1icon.png'
import ico2 from '../Assets/Images/user2icon.png'
import NavbarComp from '../Components/NavbarComp'

function AdminComplain() {
  return (
    <div>
      <NavbarComp/>
      <div className="ComplainPageContainer">
        <div className="auCompLeft">
          <div className='flxRow mb20'>
            <img className='mr20' src={ico1} alt='icon'/>
            <div className='flxCol'>
              <p>egi_lol</p>
              <p>Hello Admin, I need Your Help</p>
            </div>
          </div>
          <div className='flxRow'>
            <img className='mr20' src={ico2} alt='icon'/>
            <div className='flxCol'>
              <p>beach_lover</p>
              <p>Hello Admin, This Problem Product to Me</p>
            </div>
          </div>
        </div>
        <div className="auCompRight">
          <div className='flxRow ml20'>
            <img className='mr20' src={ico1} alt='icon'/>
            <div className='bubbleLeft'>
              Hello Admin, I need Your Help
            </div>
          </div>
          <input className='mt20 ml20' type='text' value='Send Message'></input>
        </div>
      </div>
    </div>
  )
}

export default AdminComplain