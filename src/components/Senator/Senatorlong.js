import React, { useState } from 'react';
import longData from './Asset Sen long/SenLongData';
import Akpadalong from '../Akpada/Akpadalong';
import { Link } from 'react-router-dom';
import "./senatorlong.css"
import Measurement from '../Measuremanet/Measurement';
import MeasurementCal from '../Measuremanet/measurementCal';


const Senator = () => {
 
  return (
    <div  className='main-frame'>
      <div className='selection'><br></br><h1>Your category is Senator</h1> <br></br>
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
