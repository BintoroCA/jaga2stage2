import React from 'react'
import merchIcon from '../Assets/Images/Frame.png';

function register() {
  return (
    <div className="registerPageContainer">
      <div className="registerContentContainer">
        <div className="registerLeftContent">
          <div className="bigMerchIcon">
            <img src={merchIcon} alt='logo' />
          </div>
          <h1>Easy, Fast and Reliable</h1>
          <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <b>Indonesia</b></p>
          <div className="registerButtonContainer">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        
        <div className="registerRightContent">
          <div className="registerCard">
            <div className="registerCardTop">
              <h3>Register</h3>
            </div>
            <div className="registerCardBottom">
              <input type='text' placeholder='Name'></input>
              <input type='email' placeholder='Email'></input>
              <input type='password' placeholder='Password'></input>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register