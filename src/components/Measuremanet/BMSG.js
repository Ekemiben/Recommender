import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../../utils/constant';




const BMSG = () => {
    const [item, setItem]= useState([]);
    const [imgBase, setImgBase] = useState(null)
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        try{
            const response = await axios.get(`${baseURL}/getallSavedItem/`)
            setItem(response.data)
            console.log(response.data)
        }catch(error){
            console.error('Error fetching data:', error);
        }
        
    }
    // console.log(item[0].imgurl)

    const base64Img = (e)=>{
      item.map((itemimg)=>{
        const image = itemimg.imgurl
        if(image){
          const reader = new FileReader()
          reader.onload = ()=>{
          setImgBase(reader.reasult)
        }
        reader.readAsDataURL(image)
        }
        console.log(image)
      })
      // const file = e.target.files[0];
      // if (file) {
      //   const reader = new FileReader();
      //   reader.onload = () => {
      //     setImgurl(reader.result);
      //   };
      //   reader.readAsDataURL(file);
      // }
      
    }
    


  return (
    <div>
   
      <div>
        {item.map(item=>(

          
            <div key = {item._id}> 
            <h2>{item.waist}</h2>
            <h2>{item.neck}</h2>
            <img src={`./public/userimages${item.imgurl}`} alt='image' />
            
           

            {/* {item.imgurl && <img src={`http://localhost:5000/${item.imgurl}`} alt={item.name} />} */}
            </div>
           
        ))}
        {/* <button onClick={base64Img()}>Concole</button> */}
      </div>
    </div>
  )
}

export default BMSG
