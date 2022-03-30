import React from 'react'
import CardProduct from '../Components/CardProduct'
import Mouse from '../Assets/Images/Mouse.png'
import Keyboard from '../Assets/Images/Keyboard.png'
import NavbarComp from '../Components/NavbarComp'


function homepage() {
  return (
    <div>
      <NavbarComp />
      <div className="homepagePageContainer">
        <h5>Product</h5>
        <div className="homepageCardContainer">
          <CardProduct img={Mouse} title="Mouse" price="500.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Mouse} title="Mouse" price="500.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Mouse} title="Mouse" price="500.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Mouse} title="Mouse" price="500.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
          <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600"/>
        </div>
      </div>
    </div>
  )
}

export default homepage