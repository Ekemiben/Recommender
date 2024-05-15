import React, { useState } from 'react';
// import longData from './Asset Sen long/SenLongData';
import Akpadalong from '../Akpada/Akpadalong';
import { Link } from 'react-router-dom';
import Measurement from '../Measuremanet/Measurement';


const Casualtop = () => {
 
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className='boxes'><h1>Your category is Casual</h1>
{/* Category Selection */}
        <select name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "akpada"){
          return window.location = "/akpadalong"
      } if (option.target.value === "casual"){
        return window.location = "/casualtop"
      }
       if (option.target.value === "senator"){
        return window.location = "/senator"
      } 
        }}>
        <option > Your cloth material</option>
          <option value="senator">Senator</option>
          <option value="akpada">Akpada</option>
          <option value="casual">Casual</option>
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

export default Casualtop
