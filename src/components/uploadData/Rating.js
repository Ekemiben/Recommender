import React, { useState } from 'react'
import '/rating.css'

const Rating = () => {
    const [selected, setSelected] = useState("");
    const [selectedstarcount, setSelectedStarCount] = useState(0);
    const [selectedStarOver, SetSelectedStarOver] = useState(0)
    const [clickcount, setClickCount] = useState(0)


  return (
    <div>
       <div className='star-main-frame'>
      <h3>Rating</h3>
      <div className='stars'>
        {
          [...Array(5)].map((item, index)=>{
            return  <span key={index} 
            className={`${index +1 <= selectedstarcount ? "star-selected" : ""} ${index +1 <= selectedStarOver ? "star-selected" : ""}`}
            onClick={()=>{
              setSelectedStarCount(index+1)
              setClickCount(1)
            }}
            onMouseOver = {()=>{
              SetSelectedStarOver(index+1)
            }}
            onMouseLeave={()=>{
              SetSelectedStarOver(0)
            }}
            >&#9733;</span>
          })
        }
      </div>
      <div style={{display:"none"}} >Rating Count: {selectedstarcount}</div>
      <div style={{display:"none"}}>Click Count: {clickcount}</div>
      <div>Click Count Over: {selectedStarOver}</div>
      <button type="submit">Save Item</button>
      
    </div>

      </div>
    
  )
}

export default Rating
