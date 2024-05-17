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
      <div className='selection'><br></br><h1>Your category is Akpada</h1> <br></br>

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
