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

    </div>
  )
}

export default Landing
