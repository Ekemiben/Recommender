import React, { useState } from 'react';
import axios from 'axios';
import './rating.css'
import { baseURL } from '../../utils/constant';


const FemaleUpload = () => {
  // Star Rating
  const [selected, setSelected] = useState("");
  const [selectedstarcount, setSelectedStarCount] = useState(0);
  const [selectedStarOver, SetSelectedStarOver] = useState(0)
  const [clickcount, setClickCount] = useState(0)

// Input values
const [category, setCategory] =useState("");
const [burst, setBurst] = useState()
const [waist, setWaist] = useState()
const [hips, setHips] = useState()
const [imgurl, setImgurl] = useState(null)
const [inseam, setInseam] = useState()


// Sizes inpute
const [chestSize, setChestSize] = useState()
const [burstSize, setBurstSize] = useState()
const [waistSize, setWaistSize] = useState()
const [sleeveSize, setSleeveSize] = useState()
const [hipsSize, setHipsSize] = useState()


function burstSizeFunc(){
  if(burst >=86.36 && burst < 171.52){
    setBurstSize("S")
  }
  if(burst >=96.52 && burst< 106.68){
    setBurstSize("M")
  }
  if(burst >= 106.68 && burst < 116.84){
    setBurstSize("L")
  }
  if(burst >= 116.84 && burst < 127){
    setBurstSize("XL")
  }
  if(burst >= 127 && burst < 137.16){
    setBurstSize("2XL")
  }
  if(burst >= 137.16 && burst< 152.4){
    setBurstSize("3XL")
  }
  if(burst >= 152.4 && burst < 53.34){
    setBurstSize("4XL")
  }
  if(burst>= 157.48 && burst <= 162.56){
    setBurstSize("5XL")
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

function hipsSizeFunc(){
  if(hips >=81.28 && hips < 83.82){
    setSleeveSize("S")
  }
  if(hips >=83.82 && hips < 86.36){
    setSleeveSize("M")
  }
  if(hips >= 86.36 && hips < 88.9){
    setSleeveSize("L")
  }
  if(hips >= 88.9 && hips < 91.44 ){
    setSleeveSize("XL")
  }
  if(hips >= 91.44 && hips < 93.98){
    setSleeveSize("2XL")
  }
  if(hips >= 93.98 && hips < 96.52){
    setSleeveSize("3XL")
  }
  if(hips >= 96.52 && hips < 97.79){
    setSleeveSize("4XL")
  }
  if(hips >= 97.79 && hips <= 99.06){
    setSleeveSize("5XL")
  } 
}


  //  Form input functions
const handleBurst = (e) => {
  setBurst(e.target.value);
};
const handleWaist = (e) => {
  setWaist(e.target.value);
};
const handleHips = (e) => {
  setHips(e.target.value);
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
  formData.append('burst', burst);
  formData.append('waist', waist);
  formData.append('hips', hips);
  formData.append('inseam', inseam);
  formData.append('imgurl', imgurl); // Correctly append the image URL or data
  formData.append('clickcount', clickcount);
  formData.append('selectedstarcount', selectedstarcount);

  try {
    const response = await axios.post(`${baseURL}/savedWomenItem`, formData, {
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
  burstSizeFunc();
  waistSizeFunc();
  hipsSizeFunc();
};

const handleChange = (event) => {
  setCategory(event.target.value);
};

const handleBlur = () => {
  if (category !== "Agbada" && category !== "Casual" && category !== "Senator") {
    alert("You have to select a category");
    // Optionally, you can reset the category state here
    // setCategory('');
  }
};
 
  return (
    <>
     <form onSubmit={handleFormSummission} className='form-frame'  >

    <div className='selection'><br></br><h1>You Selected {`${category}`}</h1> <br></br>
    <select style={{width:"100%", height:"40px", borderRadius:"5px", fontSize:"18px", justifyContent:"center", justifyItems:"center"}}
      name="Your cloth material"
      id="Your-cloth-material"
      value={category}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      <option value="">Your clothes material</option>
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
        <label >Bust</label>
      <input type="number" value={burst}  min="81.28" max="171.46" placeholder='Your chest measurement is between 81.28cm to 171.46cm' onBlur={(inputB)=>{
        if(Number(inputB.target.value <81.28 || inputB.target.value > 171.46)){
        alert("Your input should not be less than 81.28 and not more than 124.46")
        setBurst(81.36)
      } else{
       setBurst(inputB.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleBurst)} /><sapn className="sizes">{chestSize}</sapn>
      </div>
      <div>
      <label>Waist</label>
      <input type="number" value={waist}  min="67.32" max="145.68"  placeholder='Input your waist measurement between 67.32cm to 145.68cm' onBlur={(inputC)=>{
        if(Number(inputC.target.value <67.32 || inputC.target.value> 145.68)){
       
        alert("Your input should not be less than 67.32 and not more than 145.68")
        setWaist(67.32)
      } else{
       setWaist(inputC.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleWaist)}/>{waistSize}
      </div>

      <div>
      <label>Hips</label>
      <input type="number" value={hips}  min="87.63" max="139.08" placeholder='Your hips  measurement is between 87.63cm to 132.08cm' onBlur={(inputD)=>{
        if(Number(inputD.target.value <77.63 || inputD.target.value> 139.08)){
        alert("Your input should not be less than 87.63 and not more than 139.08")
        setHips(87.63)
      } else{
       setHips(inputD.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleHips)}/>{sleeveSize}
      </div>
      <div>

      <label>Inseam</label>
      <input type="number" value={inseam}  min="58.12" max="90.36" placeholder='Your inseam measurement is between 72.12cm to 86.36cm' onBlur={(inputE)=>{
        if(Number(inputE.target.value <58.1 || inputE.target.value> 90.36)){
       
        
        alert("Your input should not be less than 58.1 and not more than 90.36")
        setInseam(58.1)
      } else{
       setInseam(inputE.target.value)
        
      }}
      } onChange={handleInseam}/>
      </div>
     
      <div className='input-file'>
      <input type="file" accept='image/*' onChange={handleImgChange} ></input>
      </div>
    
        

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

export default FemaleUpload

