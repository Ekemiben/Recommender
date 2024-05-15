import React, { useState } from 'react'
import longData from '../Senator/Asset Sen long/SenLongData'
import "./measurement.css"

const Measurement = () => {
    const [imgDisplay, setImgDisplay] = useState("");
    const [shortShoulder, setShortShoulder] = useState("");
    const [longShoulder, setLongShoulder] = useState("");
    

    const [chest, setChest] = useState("");
    const [cuff, setCuff] = useState("");
    const [shoulderWaist, setShoulderWaist] = useState("");
    const [shoulderLap, setShoulderLap] = useState("");
    const [shoulderKnee, setShoulderKnee] = useState("");
    const [shoulderCuff, setShoulderCuff] = useState("");

    const [mrsSix, setMrsSix] = useState("");
    const [mrsSeven, setMrsSeven] = useState("");
    const [mrsEight, setMrsEight] = useState("");

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
          if (shortShoulder === "smallSA" && longShoulder === "longSA" && chest === "chestA" && cuff === "cuffA" && shoulderWaist === "hWaistA" && shoulderLap === "hLapA" && shoulderKnee === "hKneeA" && shoulderCuff === "hCuffA"  && sumDiv > 4.0) {
            conditionMeet  = 1
            setImgDisplay(item.img)
          }
          if(conditionMeet){
            // Recommener system goes here
            console.log("Hello")
          }
          if (shortShoulder === "smallSA" && longShoulder === "longSA" && chest === "chestA" && cuff === "cuffA" && shoulderWaist === "hWaistA" && shoulderLap === "hLapA" && shoulderKnee === "hKneeA" && shoulderCuff === "hCuffA"  && sumDiv > 4.0) {
            conditionMeet  = 1
            setImgDisplay(item.img)
          }
          if(! shortShoulder || longShoulder || chest ){
            alert("Please select")
          }
          
          
          
      });
    }

    function categoriesTopDisplay (option){
        let data = longData
        data.map((item)=>{
          rateSummary()

          if(rateSummary > 1.4 ){
            console.log(item.rate)
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
    function categoriesTrouserDisplay (option){
        let data = longData
        data.map((item)=>{
          if(longShoulder === "saab" ){
             setImgDisplay(item.img)
          }
          // if(longShoulder === "volvo"){
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
                <label  style={{marginRight:"31px"}}>Short Shoulder:</label>
                <select name="cars" id="cars" className='select-class'onChange={(option)=>{
                    // option.target.value = option.target.value
                    const shoulderVal = option.target.value
                    setShortShoulder(shoulderVal)
                    // console.log(longShoulder)
                }}>
                  <option>Select Measurement</option>
                <option value="smallSA">S 19 - 22</option>
                <option value="smallSB">22 (14-14½")inches - 25</option>
                <option value="smallSC">25 (1 1/2)inches - 27</option>
                </select>
                </div>

                <div>
                <label  style={{marginRight:"31px"}} >Long Shoulder:</label>
                <select name="cars" id="cars" className='select-class' onChange={(option)=>{
                  let longShoulderVal = option.target.value;
                  setLongShoulder(longShoulderVal)
                }}>
                   <option>Select Measurement</option>
                <option value="longSA">6 - 7(1 1/2)inches</option>
                <option value="longSB">8 -10</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"93px"}} >Chest:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let chestVal = option.target.value;
                  setChest(chestVal)
                }}>
                <option>Select Measurement</option>
                <option value="chestA">12 X 3</option>
                <option value="chestB">5 X 10</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"100px"}} >Cuff:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let cuffVal = option.target.value;
                  setCuff(cuffVal)
                }}>
                <option>Select Measurement</option>
                <option value="cuffA">12 X 3</option>
                <option value="cuffB">5 X 10</option>
                </select>
                </div>

                <div>
                <label >Shoulder to Waist:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let waistVal = option.target.value;
                  setShoulderWaist(waistVal)
                }}>
                  <option>Select Measurement</option>
                <option value="hWaistA">12 X 3</option>
                <option value="hWaistA">5 X 10</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"26px"}}>Shoulder to lap:</label>
                
                <select name="cars" id="cars" onChange={(option)=>{
                  let lapVal = option.target.value;
                  setShoulderLap(lapVal)
                }}>
                  <option>Select Measurement</option>
                <option value="hLapA">12 X 3</option>
                <option value="hLapB">5 X 10</option>
                </select>
                </div>

                <div>
                <label >Shoulder to Knee:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let kneeVal = option.target.value;
                  setShoulderKnee(kneeVal)
                }}>
                  <option>Select Measurement</option>
                <option value="hKneeA">12 X 3</option>
                <option value="hKneeB">5 X 10</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"15px"}}>Shoulder to Cuff:</label>
                <select name="cars" id="cars" onChange={(option)=>{
                  let heightCuffVal = option.target.value;
                  setShoulderCuff(heightCuffVal)
                }}>
                    <option>Select Measurement</option>
                    <option value="hCuffA">12 X 3</option>
                    <option value="hCuffB">5 X 10</option>
                </select>
                </div> 

                <div className='btn-frame'><button onClick={()=>rateSummary()}>Recommend</button>
            </div>           
            </div>
            <div className='sizes-frame'>




              {/* Trouser Measurement */}
                <h3 style={{display:"flex", justifyItems:"center", margin:"30px 26%"}}>Trouser Measurement</h3>
                <div>
                <label  style={{marginRight:"80px"}}>Waist:</label>
                <select name="cars" id="cars" className='select-class'onChange={(option)=>{
                    // option.target.value = option.target.value
                    const shoulderVal = option.target.value
                    setLongShoulder(shoulderVal)
                    console.log(longShoulder)
                }}>
                <option value="shorshoulderA">12 X 3</option>
                <option value="saab">5 X 10</option>
                </select>
                </div>
                <div>
                <label  style={{marginRight:"47px"}}>Lap/Thigh:</label>
                <select name="cars" id="cars" className='select-class'>
                <option value="volvo">12 X 3</option>
                <option value="saab">5 X 10</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"70px"}} >Length:</label>
                <select name="cars" id="cars">
                <option value="volvo">12 X 3</option>
                <option value="saab">5 X 10</option>
                </select>
                </div>

                <div>
                <label style={{marginRight:"87px"}}>Cuff:</label>
                <select name="cars" id="cars">
                <option value="volvo">12 X 3</option>
                <option value="saab">5 X 10</option>
                </select>
                </div>

                <div className='btn-frame' style={{marginTop:"157px"}}><button onClick={()=>categoriesTrouserDisplay()}>Recommend</button >
            </div>           
            </div>
            
            {/* Image Frame */}
            <div className='img-frame'><img src={imgDisplay} /></div>
    </div>
  )
}

export default Measurement
