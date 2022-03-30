import React from 'react'
import MyProfile from '../Components/MyProfile'
import Pic from '../Assets/Images/TattooDude.png'
import Pic2 from '../Assets/Images/Mouse.png'
import NavbarComp from '../Components/NavbarComp'

function profile() {
  return (
    <div>
      <NavbarComp />
      <div className="profilePageContainer">
        <MyProfile 
        img1={Pic}
        name='Yosep'
        email='yosepgans@gmail.com'
        phone='083896833122'
        gender='male'
        adress='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
        img2={Pic2}
        title='Mouse'
        date='Saturday, 14 Juli 2021'
        price='500.000'
        subtotal='500.000'/>
      </div>
    </div>
  )
}

export default profile