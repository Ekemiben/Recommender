import React, { useState } from 'react';
// import longData from './Asset Sen long/SenLongData';
// import Akpadalong from '../Akpada/Akpadalong';
import { Link } from 'react-router-dom';
import Img1 from './Asset/bg men.PNG'
import Img2 from "./Asset/bg picture.PNG"
import Img3 from "./Asset/bg women.PNG"
import Img4 from "./Asset/Frontclothimg.jpeg"
import Img5 from "./Asset/Couple takeout.jpeg"
import Img6 from "./Asset/Inspired Couples.jpeg"
import "./landing.css"


const Landing = () => {
 
  return (
    
    <div className='landing-main-frame'>
      <div className='frame-one'>
      <div className='frame-intro-msg'>
        
        <p>Step into fashion at your ultimat style measurement destination.</p>
        <p>Explore a world of possibility with measurement and style recommendation system</p>
        <div className='btn'><p><Link to='/men' style={{textDecoration:"none", color:"#fff"}}>Explore More</Link> </p></div>
      </div>
      <div className='right-image'>
        <img src={Img4} alt="" />
      </div>
      </div>
      <br></br><br></br> <br></br>
      <div className='down-section'>
        <div className='image-one'>
          <img src={Img1} alt='Men one' />
        </div>
        <div className='image-two'>
          {/* <img src={Img4} alt='Men one' /> */}
        </div>
        <div className='image-three'>
          <img src={Img3} alt='Men two' />
        </div>
        <div className='image-three'>
          <img src={Img3} alt='Men two' />
        </div>
        <div className='image-three'>
          <img src={Img3} alt='Men two' />
        </div>
        <div className='image-three'>
          <img src={Img3} alt='Men two' />
        </div>
      </div>

    </div>
  )
}

export default Landing
