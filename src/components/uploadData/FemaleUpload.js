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
const [bust, setBust] = useState()
const [waist, setWaist] = useState()
const [hips, setHips] = useState()
const [imgurl, setImgurl] = useState(null)
const [inseam, setInseam] = useState()


// Sizes inpute
const [chestSize, setChestSize] = useState()
const [bustSize, setBustSize] = useState()
const [waistSize, setWaistSize] = useState()
const [sleeveSize, setSleeveSize] = useState()
const [hipsSize, setHipsSize] = useState()


function bustSizeFunc(){
  if(bust >=86.36 && bust < 96.52){
    setBustSize("S")
  }
  if(bust >=96.52 && bust< 106.68){
    setBustSize("M")
  }
  if(bust >= 106.68 && bust < 116.84){
    setBustSize("L")
  }
  if(bust >= 116.84 && bust < 127){
    setBustSize("XL")
  }
  if(bust >= 127 && bust < 137.16){
    setBustSize("2XL")
  }
  if(bust >= 137.16 && bust< 152.4){
    setBustSize("3XL")
  }
  if(bust >= 152.4 && bust < 53.34){
    setBustSize("4XL")
  }
  if(bust>= 157.48 && bust <= 162.56){
    setBustSize("5XL")
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
const handleBust = (e) => {
  setBust(e.target.value);
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
  formData.append('bust', bust);
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
  bustSizeFunc();
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
    <select
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
      <input type="number" value={bust}  min="86.36" max="162.56" placeholder='Your chest measurement is between 86.36cm to 162.56cm' onBlur={(inputB)=>{
        if(Number(inputB.target.value <86.36 || inputB.target.value > 162.56)){
        alert("Your input should not be less than 86.36 and not more than 162.56")
        setBust(86.36)
        return inputB.target.value =""
      } else{
       setBust(inputB.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleBust)} /><sapn className="sizes">{chestSize}</sapn>
      </div>
      <div>
      <label>Waist</label>
      <input type="number" value={waist}  min="72.12" max="152.4"  placeholder='Input your waist measurement between 72.12cm to 152.4cm' onBlur={(inputC)=>{
        if(Number(inputC.target.value <72.12 || inputC.target.value> 152.4)){
        setWaist(72.12)
        alert("Your input should not be less than 72.12 and not more than 152.4")
        return inputC.target.value =""
      } else{
       setWaist(inputC.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleWaist)}/>{waistSize}
      </div>

      <div>
      <label>Hips</label>
      <input type="number" value={hips}  min="81.28" max="99.79" placeholder='Your hips  measurement is between 81.28cm to 99.79cm' onBlur={(inputD)=>{
        if(Number(inputD.target.value <81.28 || inputD.target.value> 99.79)){
        setHips(81.28)
        
        alert("Your input should not be less than 81.28 and not more than 99.79")
        return inputD.target.value =""
      } else{
       setHips(inputD.target.value)
        
      }}
      } onChange={(e) => handleInputChange(e, handleHips)}/>{sleeveSize}
      </div>
      <div>

      <label>Inseam</label>
      <input type="number" value={inseam}  min="72.12" max="86.36" placeholder='Your inseam measurement is between 72.12cm to 86.36cm' onBlur={(inputE)=>{
        if(Number(inputE.target.value <72.1 || inputE.target.value> 86.36)){
        setInseam(72.1)
        
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

