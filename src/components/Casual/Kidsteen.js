import React, { useState } from 'react';
// import longData from './Asset Sen long/SenLongData';
// import Akpadalong from '../Akpada/Akpadalong';
import { Link } from 'react-router-dom';
import Measurement from '../Measuremanet/Measurement';


const Kidsteen = () => {
 
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className='boxes'><h1>You're on the Kids/Teens category</h1>
{/* Category Selection */}
        <select name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "men"){
          return window.location = "/men"
      } if (option.target.value === "women"){
        return window.location = "/women"
      }
       if (option.target.value === "kids"){
        return window.location = "/kids"
      } 
        }}>
        <option > Your cloth material</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids/Teens</option>
        </select>
        
      </div>
      <br></br>
      {/* Data Rendering */}

      <div className='measurement-cat'>
      <br></br>
      <hr></hr>
        <div className='cat-2'>
          <div className='size' style={{width:"80%", border:"2px solid gray"}}>
            {/* <Measurement /> */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Kidsteen
