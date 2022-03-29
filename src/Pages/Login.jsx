import React from 'react'
import merchIcon from '../Assets/Images/Frame.png';

function Login() {
  return (
    <div className="loginPageContainer">
      <div className="loginContentContainer">
        <div className="loginLeftContent">
          <div className="bigMerchIcon">
            <img src={merchIcon} alt='logo' />
          </div>
          <h1>Easy, Fast and Reliable</h1>
          <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <b>Indonesia</b></p>
          <div className="loginButtonContainer">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        
        <div className="loginRightContent">
          <div className="loginCard">
            <div className="loginCardTop">
              <h3>Login</h3>
            </div>
            <div className="loginCardBottom">
              <input placeholder='Email'></input>
              <input placeholder='Password'></input>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login