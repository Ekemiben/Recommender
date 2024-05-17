import React, { useState } from 'react';
import longData from '../Senator/Senatorlong';
import Measurement from '../Measuremanet/Measurement';



const Women = () => {
  const [sen, setSen] = useState('');

  function categoriesDisplay (option){
    
    if(option === "senator"){
      setSen("senator")


    }
  }
  return (
    <div  className='main-frame'>
      <div className='selection'><br></br><h1>You're on the women category</h1> <br></br>

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
      <br></br><hr></hr>

{/*  */}
    <div className='measurement-cat'>
        <div className='cat-2'>
          <Measurement />
        </div>
      </div>
      
    </div>
  )
}

export default Women
