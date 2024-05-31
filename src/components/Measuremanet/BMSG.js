import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'




const BMSG = () => {
    const [item, setItem]= useState([]);
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        try{
            const response = await axios.get("http://localhost:5000/getallSavedItem/")
           
            setItem(response.data)
            console.log(response.data)
        }catch(error){
            console.error('Error fetching data:', error);
        }
        
    }

    


  return (
    <div>
      <div>
        {item.map(item=>(
            <div key = {item._id}> 
            <h2>{item.waist}</h2>
            <h2>{item.neck}</h2>
            <div> {console.log(item.imgurl)}</div>
           

            {/* {item.imgurl && <img src={`http://localhost:5000/${item.imgurl}`} alt={item.name} />} */}
            </div>
           
        ))}
      </div>
    </div>
  )
}

export default BMSG
