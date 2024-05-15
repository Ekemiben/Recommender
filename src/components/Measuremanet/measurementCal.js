import React, { useState } from 'react'
import longData from '../Senator/Asset Sen long/SenLongData'
import "./measurement.css"
// import Recommender from './Recommender';

const MeasurementCal = () => {
    const [imgDisplay, setImgDisplay] = useState("");
    const [imgArray, setImgArray] = useState([]);

    const [imgROneDisplay, setImgROneDisplay] =useState("")
    const [imgRTwoDisplay, setImgRTwoDisplay] =useState("")
    const [imgRThreeDisplay, setImgRThreeDisplay] =useState("")
    const [neck, setNeck] = useState("");
    const [chest, setChest] = useState("");
    

    const [waist, setWaist] = useState("");
    const [sleeve, setSleeve] = useState("");
    const [inseam, setInseam] = useState("");

    function rateSummary(option){
        let sumData = longData
        sumData.map((item) => {
          let sum = 0;
          let sumDiv = 0
          if (Array.isArray(item.rate)) {
              sum = item.rate.reduce((acc, curr) => acc + curr, 0); // Sum up the rates
              sumDiv = ((sum)/(item.numberCount))
          } else {
              sum = item.rate; // If rate is not an array, consider it as a single value
          }
          let conditionMeet = 0
          if (neck === "neckS" && chest === "chestS" && waist === "waistS" && sleeve === "sleeveS" && inseam === "inseamS"   && sumDiv > 4.0) {
            conditionMeet  = 1
          }
          if(conditionMeet && item.size === "S"){
            setImgDisplay(item.img)
          }
          if (neck === "neckM" && chest === "chestM" && waist === "waistM" && sleeve === "sleeveM" && inseam === "inseamM"   && sumDiv > 4.0) {
            conditionMeet  = 1
          }
          if(conditionMeet && item.size === "M"){
            setImgDisplay(item.img)
          }

          if (conditionMeet && sumDiv > 2.0 && item.size === "M") {
            setImgArray(prevImageArray => [...prevImageArray, item.img]);
        };
        console.log(imgArray)
        
      });
    }

    function categoriesTopDisplay (option){
        let data = longData
        data.map((item)=>{
          rateSummary()

          if(rateSummary > 1.4 ){
            // console.log(item.rate)
            //  setImgDisplay(item.img)
          }
          // if(longShoulder === "shortshoulderB"){
          //   setImgDisplay(item.img)
          // }
          // if(item.id === 3){
          //   setImgDisplay(item.img)
          // }
        })
      }
   
  return (
    <div className='measurement-main-frame'>

            <div className='sizes-frame'>
              {/* Top Measurement */}
                <h3 style={{display:"flex", justifyItems:"center", margin:"30px 30%"}}>Top Measurement</h3>
                <div>
                <label  style={{marginRight:"64px"}}>Neck:</label>
                <select name="cars" id="cars" className='select-class'onChange={(option)=>{
                    // option.target.value = option.target.value
                    const neckVal = option.target.value
                    setNeck(neckVal)
                   
                }}>
                  <option>Select Measurement</option><hr></hr>
                <option value="neckS">S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       14-14½"</option>
                <option value="neckM">M  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  15-15½"</option>
                <option value="neckL">L   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16-16½"</option>
                <option value="neckXL">XL   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17-17½"</option>
                <option value="neck2XL">2XL  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  18-18½"</option>
                <option value="neck3XL">3XL  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  19-19½"</option>
                <option value="neck4XL">4XL  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  20½-21"</option>
                <option value="neck5XL">5XL  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  22-22½"</option><br></br>
                </select>
                </div>

                <div>
                <label  style={{marginRight:"60px"}} >Chest:</label>
                <select name="cars" id="cars" className='select-class' onChange={(option)=>{
                  let chestVal = option.target.value;
                  setChest(chestVal)
                }}>
                   <option>Select Measurement</option>
                <option value="chestS">S   	34-36"</option>
                <option value="chestM">M    38-40"</option>
                <option value="chestL">L    42-44"</option>
                <option value="chestXL">XL    46-48"</option>
                <option value="chest2XL">2XL    50-52"</option>
                <option value="chest3XL">3XL    54-56"</option>
                <option value="chest4XL">4XL    58-60"</option>
                <option value="chest5XL">5XL    62-64"</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"60px"}} >Waist:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let waistVal = option.target.value;
                  setWaist(waistVal)
                }}>
                <option>Select Measurement</option>
                <option value="waistS">S    28-30"</option>
                <option value="waistM">M    32-34"</option>
                <option value="waistL">L    36-38"</option>
                <option value="waistXL">XL    40-42"</option>
                <option value="waist2XL">2XL    44-46"</option>
                <option value="waist3XL">3XL    48-50"</option>
                <option value="waist4XL">4XL    53-55"</option>
                <option value="waist5XL">5XL    58-60"</option>
                
                </select>
                </div>

                <div>
                <label style={{marginRight:"53px"}} >Sleeve:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let sleeveVal = option.target.value;
                  setSleeve(sleeveVal)
                }}>
                <option>Select Measurement</option>
                <option value="sleeveS">S    32-33"</option>
                <option value="sleeveM">M    33-34"</option>
                <option value="sleeveL">L    34-35"</option>
                <option value="sleeveXL">XL    35-36"</option>
                <option value="sleeve2XL">2XL    36-37"</option>
                <option value="sleeve3XL">3XL    37-38"</option>
                <option value="sleeve4XL">4XL    38"</option>
                <option value="sleeve5XL">5XL    38½"</option>
                
                </select>
                </div>

                <div>
                <label  style={{marginRight:"49px"}}>Inseam:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let inseamVal = option.target.value;
                  setInseam(inseamVal)
                }}>
                  <option>Select Measurement</option>
                <option value="inseamS">31</option>
                <option value="inseamM">31</option>
                </select>
                </div>

                

               

               

                <div className='btn-frame'><button onClick={()=>rateSummary()}>Recommend</button>
            </div>           
            </div>
            <div className='sizes-frame'>
                <h3>Check your recommendation here</h3>
                <img src={imgROneDisplay} /> <br></br>
                {imgArray?.map((imgUrl, index) => (
    <img key={index} src={imgUrl}  />
))}
            </div>
            
            {/* Image Frame */}
            <div className='img-frame'><img src={imgDisplay} /></div>


            
    </div>
  )
  
}


export default MeasurementCal
