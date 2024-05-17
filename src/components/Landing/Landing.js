import React, { useState } from 'react';
// import longData from './Asset Sen long/SenLongData';
// import Akpadalong from '../Akpada/Akpadalong';
import { Link } from 'react-router-dom';


const Landing = () => {
  const [sen, setSen] = useState('');

  function categoriesDisplay (option){
    
    if(option === "senator"){
      setSen("senator")
    }
  }
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className='boxes'>

      {/* <input list="clothsize" />
      <datalist id="clothsize"  >
        <option value="12h X 9m" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist> */}

        
        <select name="Your cloth material" id="Your cloth material" onChange={(option)=>{categoriesDisplay() 
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
          <option value="kids">Kids & Teens</option>
        </select>
        
      </div>

    </div>
  )
}

export default Landing
