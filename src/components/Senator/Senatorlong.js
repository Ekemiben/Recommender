import React, { useState } from 'react';
import longData from './Asset Sen long/SenLongData';
// import Akpadalong from '../Akpada/Women';
import { Link } from 'react-router-dom';
import "./senatorlong.css"
// import Measurement from '../Measuremanet/Measurement';
import MeasurementCal from '../Measuremanet/measurementCal';


const Senator = () => {
 
  return (
    <div  className='main-frame'>
      <div className='selection'><br></br><h1>Your category is Senator</h1> <br></br>
        <select name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "women"){
          return window.location = "/women"
      } if (option.target.value === "kids"){
        return window.location = "/kids"
      }
       if (option.target.value === "men"){
        return window.location = "/men"
      } 
        }}>
        <option > Your cloth material</option>
          <option value="men">Men’s Wears</option>
          <option value="women">Akpada</option>
          <option value="kids">Casual</option>
        </select>
        
      </div>
      <br></br><hr></hr>

      <div className='measurement-cat'>
        <div className='cat-2'>
          <MeasurementCal />
        </div>
      </div>
     
      
    </div>
  )
}

export default Senator
