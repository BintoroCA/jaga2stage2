import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import admicon from '../Assets/Images/adminicon.png'

function UserComplain() {
  return (
    <div>
      <NavbarComp/>
      <div className="ComplainPageContainer">
        <div className="auCompLeft">
          <div className='flxRow mb20'>
            <img className='mr20' src={admicon} alt='icon'/>
            <div className='flxCol'>
              <p>Admin</p>
              <p>Yes, Is there anything I can help</p>
            </div>
          </div>
        </div>
        <div className="auCompRight">
          <div className='flxRow mlauto mb20'>
            <div className="bubbleRight">
              Hello Admin, I Need Your Help
            </div>
          </div>
          <div className='flxRow ml20'>
            <img className='mr20' src={admicon} alt='icon'/>
            <div className="bubbleLeft">
              Yes, Is there anything I can help
            </div>
            {/* <div>
              <p>Yes, Is there anything I can help</p>
            </div> */}
          </div>
          <input className='mt20 ml20' type='text' value='Send Message'></input>
        </div>
      </div>
    </div>
  )
}

export default UserComplain