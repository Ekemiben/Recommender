import React, { useState } from 'react';
import axios from 'axios';
import './rating.css'
import { baseURL } from '../../utils/constant';


const MyRating = () => {
  // Star Rating
  const [selected, setSelected] = useState("");
  const [selectedstarcount, setSelectedStarCount] = useState(0);
  const [selectedStarOver, SetSelectedStarOver] = useState(0)
  const [clickcount, setClickCount] = useState(0)

// Input values
const [category, setCategory] =useState("");
const [neck, setNeck] = useState()
const [chest, setChest] = useState()
const [waist, setWaist] = useState()
const [sleeve, setSleeve] = useState()
const [imgurl, setImgurl] = useState(null)
const [inseam, setInseam] = useState()


// Sizes inpute
const [neckSize, setNeckSize] = useState()
const [chestSize, setChestSize] = useState()
const [waistSize, setWaistSize] = useState()
const [sleeveSize, setSleeveSize] = useState()


function neckSizeFunc(){
  
  if(neck >=35.56 && neck < 38.1){
    setNeckSize("S") 
  }
  if(neck >=38.1 && neck < 40.64){
    setNeckSize("M")
  }
  if(neck >= 40.64 && neck < 43.18){
    setNeckSize("L")
  }
  if(neck >= 43.18 && neck < 45.72){
    setNeckSize("XL")
  }
  if(neck >= 45.72 && neck < 48.26){
    setNeckSize("2XL")
  }
  if(neck >= 48.26 && neck <50.8){
    setNeckSize("3XL")
  }
  if(neck >= 50.8 && neck < 53.34){
    setNeckSize("4XL")
  }
  if(neck >= 53.34 && neck <= 57.15){
    setNeckSize("5XL")
  }
 
}
function chestSizeFunc(){
  if(chest >=86.36 && chest < 96.52){
    setChestSize("S")
  }
  if(chest >=96.52 && chest < 106.68){
    setChestSize("M")
  }
  if(chest >= 106.68 && chest < 116.84){
    setChestSize("L")
  }
  if(chest >= 116.84 && chest < 127){
    setChestSize("XL")
  }
  if(chest >= 127 && chest < 137.16){
    setChestSize("2XL")
  }
  if(chest >= 137.16 && chest < 152.4){
    setChestSize("3XL")
  }
  if(chest >= 152.4 && chest < 53.34){
    setChestSize("4XL")
  }
  if(chest >= 157.48 && chest <= 162.56){
    setChestSize("5XL")
  }

 
}

function waistSizeFunc(){
  if(waist >=71.12 && waist < 81.28){
    setWaistSize("S")
  }
  if(waist >=81.28 && waist < 91.44){
    setWaistSize("M")
  }
  if(waist >= 91.44 && waist < 101.6){
    setWaistSize("L")
  }
  if(waist >= 101.6 && waist < 111.76){
    setWaistSize("XL")
  }
  if(waist >= 111.76 && waist < 121.92){
    setWaistSize("2XL")
  }
  if(waist >= 121.92 && waist < 134.62){
    setWaistSize("3XL")
  }
  if(waist >= 134.62 && waist < 147.32){
    setWaistSize("4XL")
  }
  if(waist >= 147.32 && waist <= 152.4){
    setWaistSize("5XL")
  } 
}
function waistSizeFunc(){
  if(waist >=71.12 && waist < 81.28){
    setWaistSize("S")
  }
  if(waist >=81.28 && waist < 91.44){
    setWaistSize("M")
  }
  if(waist >= 91.44 && waist < 101.6){
    setWaistSize("L")
  }
  if(waist >= 101.6 && waist < 111.76){
    setWaistSize("XL")
  }
  if(waist >= 111.76 && waist < 121.92){
    setWaistSize("2XL")
  }
  if(waist >= 121.92 && waist < 134.62){
    setWaistSize("3XL")
  }
  if(waist >= 134.62 && waist < 147.32){
    setWaistSize("4XL")
  }
  if(waist >= 147.32 && waist <= 152.4){
    setWaistSize("5XL")
  } 
}
function sleeveSizeFunc(){
  if(sleeve >=81.28 && sleeve < 83.82){
    setSleeveSize("S")
  }
  if(sleeve >=83.82 && sleeve < 86.36){
    setSleeveSize("M")
  }
  if(sleeve >= 86.36 && sleeve < 88.9){
    setSleeveSize("L")
  }
  if(sleeve >= 88.9 && sleeve < 91.44 ){
    setSleeveSize("XL")
  }
  if(sleeve >= 91.44 && sleeve < 93.98){
    setSleeveSize("2XL")
  }
  if(sleeve >= 93.98 && sleeve < 96.52){
    setSleeveSize("3XL")
  }
  if(sleeve >= 96.52 && sleeve < 97.79){
    setSleeveSize("4XL")
  }
  if(sleeve >= 97.79 && sleeve <= 99.06){
    setSleeveSize("5XL")
  } 
}


  //  Form input functions
const handleNeck = (e) => {
  setNeck(e.target.value);
};
const handleChest = (e) => {
  setChest(e.target.value);
};
const handleWaist = (e) => {
  setWaist(e.target.value);
};
const handleSleeve = (e) => {
  setSleeve(e.target.value);
};
const handleInseam = (e) => {
  setInseam(e.target.value);
};
const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setImgurl(reader.result);
    };
    reader.readAsDataURL(file);
  }
};
const handleImgChange = (event) =>{
  console.log(event.target.files[0]);
  setImgurl(event.target.files[0])
}

const handleFormSummission = async(e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append('category', category);
  formData.append('neck', neck);
  formData.append('chest', chest);
  formData.append('waist', waist);
  formData.append('sleeve', sleeve);
  formData.append('inseam', inseam);
  formData.append('imgurl', imgurl); // Correctly append the image URL or data
  formData.append('clickcount', clickcount);
  formData.append('selectedstarcount', selectedstarcount);

  try {
    const response = await axios.post(`${baseURL}/savedItem`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    // console.log('Item added:', response.data);
    alert("Your data was added successfully!")
  } catch (error) {
    alert("Ensure you input the data correctlly")
  }
  console.log([...formData.entries()]);
}

const handleInputChange = (e, handlerFunc) => {
  handlerFunc(e);
  neckSizeFunc();
  chestSizeFunc();
  waistSizeFunc();
  sleeveSizeFunc();
};

 
  return (
    <>
     <form onSubmit={handleFormSummission} className='form-frame'  >

    <div className='selection'><br></br><h1>You Selected {`${category}`}</h1> <br></br>
        <select name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "Agbada"){
          setCategory(option.target.value)
      } 
       if (option.target.value === "Casual"){
        setCategory(option.target.value)
      } 
       if (option.target.value === "Senator"){
        setCategory(option.target.value)
      } 
        }} onBlur={(option)=>{ 
          if(category !== "Agbada" || category !== "Casual" || category !== "Senator"){
            alert("You have to select a category")
            }}}>
        <option > Your clothes material</option>
          <option value="Agbada">Agbada</option>
          <option value="Casual">Casual</option>
          <option value="Senator">Senator</option>
          
        </select>
        </div>
   

      <div className='form-input-frame'>
        <br></br>
        <br></br>
        <br></br>
      <div>
      
        <label >Neck</label>
      <input type="number" value={neck}  min="35.56" max="57.15"  placeholder='Your chest measurement is between 35.56cm to 57.15cm' onBlur={(inputA)=>{
        if(Number(inputA.target.value < 35.56 || inputA.target.value > 57.15)){
        alert("Your input should not be less than 35.56cm and not more than 57.15cm")
        setNeck(0)
          return  inputA.target.value =""
      } else{
        setNeck(inputA.target.value)
        
      }}
      
      }  onChange={(e) => handleInputChange(e, handleNeck)} />{neckSize}
      </div>
      
      <div>
        <label >Chest</label>
      <input type="number" value={chest}  min="86.36" max="162.56" placeholder='Your chest measurement is between 86.36cm to 162.56cm' onBlur={(inputB)=>{
        if(Number(inputB.target.value <86.36 || inputB.target.value > 162.56)){
        alert("Your input should not be less than 86.36 and not more than 162.56")
        setChest(0)
        return inputB.target.value =""
      } else{
       setChest(inputB.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleChest)} /><sapn className="sizes">{chestSize}</sapn>
      </div>
      <div>
      <label>Waist</label>
      <input type="number" value={waist}  min="72.12" max="152.4"  placeholder='Input your waist measurement between 72.12cm to 152.4cm' onBlur={(inputC)=>{
        if(Number(inputC.target.value <72.12 || inputC.target.value> 152.4)){
        setWaist(0)
        
        alert("Your input should not be less than 72.12 and not more than 152.4")
        return inputC.target.value =""
      } else{
       setWaist(inputC.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleWaist)}/>{waistSize}
      </div>

      <div>
      <label>Sleeve</label>
      <input type="number" value={sleeve}  min="81.28" max="99.79" placeholder='Your sleeve measurement is between 81.28cm to 99.79cm' onBlur={(inputD)=>{
        if(Number(inputD.target.value <81.28 || inputD.target.value> 99.79)){
        setSleeve(0)
        
        alert("Your input should not be less than 81.28 and not more than 99.79")
        return inputD.target.value =""
      } else{
       setSleeve(inputD.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleSleeve)}/>{sleeveSize}
      </div>
      <div>

      <label>Inseam</label>
      <input type="number" value={inseam}  min="72.12" max="86.36" placeholder='Your inseam measurement is between 72.12cm to 86.36cm' onBlur={(inputE)=>{
        if(Number(inputE.target.value <72.1 || inputE.target.value> 86.36)){
        setInseam(0)
        
        alert("Your input should not be less than 72.1 and not more than 86.36")
        return inputE.target.value =""
      } else{
       setInseam(inputE.target.value)
        
      }}
      } onChange={handleInseam}/>
      </div>
     
      <div className='input-file'>
      <input type="file" accept='image/*' onChange={handleImgChange} ></input>
      </div>
    
        {/* <button onClick={(e)=>{
          e.preventDefault()
          neckSizeFunc()
          chestSizeFunc()
          waistSizeFunc()
          sleeveSizeFunc()
          }} style={{height:"40px", backgroundColor:"black", color:"white", fontSize:"20px",margin:"30px 20px"}}>Check Sizes</button> */}

          {/* Star Rating Section */}
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
   


      
    </form>
    
    
      
    </>
  )
}

export default MyRating
