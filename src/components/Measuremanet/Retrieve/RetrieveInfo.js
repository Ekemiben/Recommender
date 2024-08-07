

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../../utils/constant';
import './retrieve.css';
import { Link } from 'react-router-dom';

const RetrieveInfo = () => {
  const[catImage, setCatImage] = useState([])
  const [imgDisplay, setImgDisplay] = useState([]);
  const [category, setCategory] =useState("");
  const [neck, setNeck] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [sleeve, setSleeve] = useState('');
  const [inseam, setInseam] = useState('');
  const [item, setItem] = useState([]);

  const [info, setInfo] = useState("The garment shown below is highly regarded in its category. As a recommendation system, I think this will suit you perfectly.")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallSavedItem/`);
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNeck = (e) => {
    setNeck(e.target.value.trim());
  };
  const handleChest = (e) => {
    setChest(e.target.value.trim());
  };
  const handleWaist = (e) => {
    setWaist(e.target.value.trim());
  };
  const handleSleeve = (e) => {
    setSleeve(e.target.value.trim());
  };
  const handleInseam = (e) => {
    setInseam(e.target.value.trim());
  };

  const imageDisplay = () => {
    const filteredImages = item.filter((itemData) => {
      return (
        itemData.neck == neck &&
        itemData.chest == chest &&
        itemData.waist == waist &&
        itemData.sleeve == sleeve &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 3
      );
    });
    console.log(filteredImages)
    // const imageUrls = filteredImages.map((item) => `${baseURL}/productsImages/${item.imgurl}`);
    const imageUrls = filteredImages.map((item) => `${item.imgurl}`);
    setImgDisplay(imageUrls);
    catImageDisplay()
    if(filteredImages.length === 0){
      alert("Sorry, recommendation for your measurement is not found, Please contact the admin")
    }
  };
  const catImageDisplay = () => {
    const filteredImages = item.filter((itemData) => {
      return (
        itemData.neck == neck &&
        itemData.chest == chest &&
        itemData.waist == waist &&
        itemData.sleeve == sleeve &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 4 &&
        itemData.category == category
      );
    });
    // const firstImageUrl = filteredImages.length > 0 ? `${baseURL}/productsImages/${filteredImages[0].imgurl}` : '';
    const firstImageUrl = filteredImages.length > 0 ? `${filteredImages[0].imgurl}` : '';
    setCatImage([firstImageUrl]);
  };

  return (
    <div className='main-frame'>
      <div className='input-frame-cat-fram'>
      <div className='input-frame'>
     
     <div className='input-box'>

      {/*  */}
      {/* <div className='select-bg'> */}
      <select className='cat-box' name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "Agbada"){
          setCategory(option.target.value)
      } else if (option.target.value === "Casual"){
        setCategory(option.target.value)
      }
       else if (option.target.value === "Senator"){
        setCategory(option.target.value)
      }
       
         
        }} style={{width:"100%", height:"40px", borderRadius:"5px"}}  >
        <option > Select your category</option>
          <option value="Agbada">Agbada</option>
          <option value="Casual">Casual</option>
          <option value="Senator">Senator</option>
        </select>
        {/* </div> */}
      {/*  */}
      {/* <hr></hr> */}
      <br></br><br></br>
            <label >Neck</label>
            <input type="text" value={neck}   placeholder='Your chest measurement is between 22.86cm to 57.15cm' onBlur={(inputA)=>{
              if(Number(inputA.target.value < 22.86 || inputA.target.value > 57.15)){
              
              alert("Your input should not be less than 35.56cm and not more than 57.15cm")
              setNeck(22.86)
                inputA.target.value =""
                return
            } else{
              setNeck(inputA.target.value.trim())
            }}
            
            }  onChange={handleNeck}/>
            </div>
            <div>
              <label >Chest</label>
            <input type="text" value={chest}  placeholder='Your chest measurement is between 86.36cm to 162.56cm' onBlur={(inputB)=>{
              if(Number(inputB.target.value <86.36 || inputB.target.value > 162.56)){
             
              alert("Your input should not be less than 86.36 and not more than 162.56")
              setChest(86.36)
              return inputB.target.value =""
            } else{
             setChest(inputB.target.value)
              
            }}
            } onChange={handleChest} />
            </div>
            <div>
            <label>Waist</label>
            <input type="text" value={waist}    placeholder='Input your waist measurement between 72.12cm to 152.4cm' onBlur={(inputC)=>{
              if(Number(inputC.target.value <72.12 || inputC.target.value> 152.4)){
             
              
              alert("Your input should not be less than 72.12 and not more than 152.4")
              setWaist(72.12)
              inputC.target.value =""
            } else{
             setWaist(inputC.target.value)
              
            }}
            } onChange={handleWaist}/>
            </div>
      
            <div>
            <label>Sleeve</label>
            <input type="text" value={sleeve}   placeholder='Your sleeve measurement is between 81.28cm to 99.79cm' onBlur={(inputD)=>{
              if(Number(inputD.target.value <13.95 || inputD.target.value> 99.79)){
              
              
              alert("Your input should not be less than 13.95 and not more than 99.79")
              setSleeve(13.95)
              inputD.target.value =""
            } else{
             setSleeve(inputD.target.value)
              
            }}
            } onChange={handleSleeve}/>
            </div>
            <div>
      
            <label>Inseam</label>
            <input type="text" value={inseam}  placeholder='Your inseam measurement is between 63.5cm to 91.44cm' onBlur={(inputE)=>{
              if(Number(inputE.target.value <63.5 || inputE.target.value> 86.36)){
              alert("Your input should not be less than 63.5 and not more than 86.36")
              setInseam(63.5)
              inputE.target.value =""
            } else{
             setInseam(inputE.target.value)
              
            }}
            } onChange={handleInseam}/>
            </div>
            
            <button onClick={imageDisplay}>Recommend</button>
            {/* <button onClick={catImageDisplay} >Category Recommend</button> */}
      </div>
       {/*  */}
            {/* style={{display:"none"}} */}
            <div className='cat-recommendation'>
              <div className='recommender-info'>
                <p>{info}</p>
                
              </div>
             
            {catImage.map((imageUrl, index) => (
              <div key={index} className='cat-items'>
                <div className='img-fluid'>
                  <img src={imageUrl} alt={`Sorry, the system does not have the top rated category of ${category}'s style `} />
                </div>
              </div>
            ))}
          </div>
            {/*  */}
      </div>
           


            <div className='rec-heading'>
            <h3>Recommendation Section</h3>
            <button style={{height:"40px"}}><Link to='/feedback' style={{textDecoration:"none",color:"white", fontSize:"20px"}}> Feedback</Link></button>
            </div>
    
      <div className='recommendations'>
        {imgDisplay.map((imageUrl, index) => (
          <div key={index} className='items'>
            <div className='img-fluid'>
              <img src={imageUrl} alt={`Item ${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetrieveInfo;
