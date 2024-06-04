import React from 'react'
import longData from '../Senator/Asset Sen long/SenLongData'

const OldCodes = () => {
    function quickSelect(id, value) {

        // if (value !== "") {
        //     $("#" + id + " option[value='" + value + "']").prop("selected", true);
        // }
        }

    // const [imgDisplay, setImgDisplay] = useState("");
 
 
//   function categoriesDisplay (option){
//     let data = longData
//     data.map((item)=>{
//       if(item.id === 1){
//          setImgDisplay(item.img)
//       }
      // if(item.id === 2){
      //   setImgDisplay(item.img)
      // }
      // if(item.id === 3){
      //   setImgDisplay(item.img)
      // }
//     })
//   }
  return (
    <div>
       {/* {longData.map((item, index)=>{

        if(item.id === 1){
        return <img src={item.img} />
        }

        })} */}


<div className='measurement-cat'>
        <div className='cat-1'>
          <select name="measurement" id="mearsurementid" onChange={(option)=>{
            if(option.target.value ==="20"){
            //   setMrsOne({
                
            //   })
            }
          }}>
          <option > Your cloth material</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              
          </select>
      </div>


    </div>
    {/* Image Frame */}
    {/* <div className='img-frame' style={{width:"50%", height:"30%", border:"2px solid #000", marginTop:"10rem"}}>
        <h4>Images Section</h4>
        <button onClick={()=>categoriesDisplay()}>Click</button>
        <div className='img-section' style={{width:"50%", height:"40%", border:"2px solid gray"}}>
        <img src={imgDisplay} />
        </div>
        
      </div> */}





      
    </div>
  )
}

export default OldCodes
