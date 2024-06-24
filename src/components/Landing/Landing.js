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
    
    <div className='main-frame'>
      <div className=''>

      </div>
      <div className=''>

      </div>

    </div>
  )
}

export default Landing
