

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../utils/constant';
import './bmsg.css';

const BMSG = () => {
  const [imgDisplay, setImgDisplay] = useState([]);
  const [category, setCategory] =useEffect("");
  const [neck, setNeck] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [sleeve, setSleeve] = useState('');
  const [inseam, setInseam] = useState('');
  const [item, setItem] = useState([]);

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
    const imageUrls = filteredImages.map((item) => `${baseURL}/productsImages/${item.imgurl}`);
    setImgDisplay(imageUrls);
  };
  const catImageDisplay = () => {
    const filteredImages = item.filter((itemData) => {
      return (
        itemData.neck == neck &&
        itemData.chest == chest &&
        itemData.waist == waist &&
        itemData.sleeve == sleeve &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 3 &&
        itemData.category == category
      );
    });
    const imageUrls = filteredImages.map((item) => `${baseURL}/productsImages/${item.imgurl}`);
    setImgDisplay(imageUrls);
  };

  return (
    <div className='main-frame'>
      <div className='input-frame'>
     
     <div className='input-box'>
      
            <label >Neck</label>
            <input type="number" value={neck}  min="35.56" max="57.15"  placeholder='Your chest measurement is between 35.56cm to 57.15cm' onBlur={(inputA)=>{
              if(Number(inputA.target.value < 35.56 || inputA.target.value > 57.15)){
              setNeck(0)
              alert("Your input should not be less than 35.56cm and not more than 57.15cm")
                inputA.target.value =""
                return
            } else{
              setNeck(inputA.target.value.trim())
            }}
            
            }  onChange={handleNeck}/>
            </div>
            <div>
              <label >Chest</label>
            <input type="number" value={chest}  min="86.36" max="162.56" placeholder='Your chest measurement is between 86.36cm to 162.56cm' onBlur={(inputB)=>{
              if(Number(inputB.target.value <86.36 || inputB.target.value > 162.56)){
              setChest(0)
              alert("Your input should not be less than 86.36 and not more than 162.56")
              return inputB.target.value =""
            } else{
             setChest(inputB.target.value)
              
            }}
            } onChange={handleChest} />
            </div>
            <div>
            <label>Waist</label>
            <input type="number" value={waist}  min="72.12" max="152.4"  placeholder='Input your waist measurement between 72.12cm to 152.4cm' onBlur={(inputC)=>{
              if(Number(inputC.target.value <72.12 || inputC.target.value> 152.4)){
              setWaist(0)
              
              alert("Your input should not be less than 72.12 and not more than 152.4")
              inputC.target.value =""
            } else{
             setWaist(inputC.target.value)
              
            }}
            } onChange={handleWaist}/>
            </div>
      
            <div>
            <label>Sleeve</label>
            <input type="number" value={sleeve}  min="81.28" max="99.79" placeholder='Your sleeve measurement is between 81.28cm to 99.79cm' onBlur={(inputD)=>{
              if(Number(inputD.target.value <81.28 || inputD.target.value> 99.79)){
              setSleeve(0)
              
              alert("Your input should not be less than 81.28 and not more than 99.79")
              inputD.target.value =""
            } else{
             setSleeve(inputD.target.value)
              
            }}
            } onChange={handleSleeve}/>
            </div>
            <div>
      
            <label>Inseam</label>
            <input type="number" value={inseam}  min="72.12" max="86.36" placeholder='Your inseam measurement is between 72.12cm to 86.36cm' onBlur={(inputE)=>{
              if(Number(inputE.target.value <72.1 || inputE.target.value> 86.36)){
              setInseam(0)
              
              alert("Your input should not be less than 72.1 and not more than 86.36")
              inputE.target.value =""
            } else{
             setInseam(inputE.target.value)
              
            }}
            } onChange={handleInseam}/>
            </div>
            <button onClick={imageDisplay}>Recommend</button>
            <button onClick={catImageDisplay} style={{display:"none"}}>Category Recommend</button>
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

export default BMSG;
