import React, { useState } from 'react';
// import longData from './Asset Sen long/SenLongData';
// import Akpadalong from '../Akpada/Akpadalong';
import { Link } from 'react-router-dom';
import Img1 from './Asset/bg men.PNG'
import Img2 from "./Asset/bg picture.PNG"
import Img3 from "./Asset/bg women.PNG"
import Img4 from "./Asset/Frontclothimg.jpeg"
import "./landing.css"


const Landing = () => {
  const [sen, setSen] = useState('');

  function categoriesDisplay (option){
    
   
  }
  return (
    
    <div className='landing-main-frame'>
      <div className='frame-one'>
      <div className='frame-intro-msg'>
        <p>Step into fashion at your ultimat style measurement Destination</p>
        <p>Explore a world of possibility with measurement and style recommendation system</p>
        <div className='btn'>Explore Men</div>
      </div>
      <div className='right-image'>
        <img src={Img2} alt="" />
      </div>
      </div>
      <br></br><br></br> <br></br>
      <div className='down-section'>
        <div className='image-one'>
          <img src={Img1} alt='Men one' />
        </div>
        <div className='image-two'>
          <img src={Img4} alt='Men one' />
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
