

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../../utils/constant';
import './retrieve.css';
import { Link } from 'react-router-dom';

const WomenRetrieveInfo = () => {
  const[catImage, setCatImage] = useState([])
  const [imgDisplay, setImgDisplay] = useState([]);
  const [category, setCategory] =useState("");
  // const [neck, setNeck] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [inseam, setInseam] = useState('');
  const [item, setItem] = useState([]);

  const [info, setInfo] = useState("The clothe that will be shoing below is one of the most rated clothes in this category.As a recommender system I guess this will fit you.")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallWomenItem/`);
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const handleNeck = (e) => {
  //   setNeck(e.target.value.trim());
  // };
  const handleChest = (e) => {
    setBust(e.target.value.trim());
  };
  const handleWaist = (e) => {
    setWaist(e.target.value.trim());
  };
  const handleHips = (e) => {
    setHips(e.target.value.trim());
  };
  const handleInseam = (e) => {
    setInseam(e.target.value.trim());
  };

  const imageDisplay = () => {
    const filteredImages = item.filter((itemData) => {
      return (
        // itemData.neck == neck &&
        itemData.bust == bust &&
        itemData.waist == waist &&
        itemData.hips == hips &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 3
      );
    });
    const imageUrls = filteredImages.map((item) => `${baseURL}/productsImages/${item.imgurl}`);
    setImgDisplay(imageUrls);
    catImageDisplay()
  };
  const catImageDisplay = () => {
    const filteredImages = item.filter((itemData) => {
      return (
        // itemData.neck == neck &&
        itemData.bust == bust &&
        itemData.waist == waist &&
        itemData.hips == hips &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 4 &&
        itemData.category == category
      );
      
    });
    const firstImageUrl = filteredImages.length > 0 ? `${baseURL}/productsImages/${filteredImages[0].imgurl}` : '';
    setCatImage([firstImageUrl]);
    // if(!filteredImages){
    //   alert("Is either you haven't iputed the correct measurement or we don't have a recommendation for your measurement, please meake sure that all the neccessary fields field properly.")
    // }
  };

  return (
    <div className='main-frame'>
      <div className='input-frame-cat-fram'>
      <div className='input-frame'>
     
     <div className='input-box'>

      {/*  */}
      <select name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "Agbada"){
          setCategory(option.target.value)
      } else if (option.target.value === "Casual"){
        setCategory(option.target.value)
      }
       else if (option.target.value === "Senator"){
        setCategory(option.target.value)
      }
       
         
        }}>
        <option > Select your category</option>
          <option value="Agbada">Agbada</option>
          <option value="Casual">Casual</option>
          <option value="Senator">Senator</option>
        </select>
      {/*  */}
      {/* <hr></hr> */}
      <br></br><br></br>
            {/* <label >Neck</label>
            <input type="number" value={neck}  min="35.56" max="57.15"  placeholder='Your chest measurement is between 35.56cm to 57.15cm' onBlur={(inputA)=>{
              if(Number(inputA.target.value < 35.56 || inputA.target.value > 57.15)){
              setNeck(0)
              alert("Your input should not be less than 35.56cm and not more than 57.15cm")
                inputA.target.value =""
                return
            } else{
              setNeck(inputA.target.value.trim())
            }}
            
            }  onChange={handleNeck}/> */}
            </div>
            <div>
              <label >Bust</label>
            <input type="number" value={bust}  min="86.36" max="162.56" placeholder='Your chest measurement is between 86.36cm to 162.56cm' onBlur={(inputB)=>{
              if(Number(inputB.target.value <86.36 || inputB.target.value > 162.56)){
              setBust(0)
              alert("Your input should not be less than 86.36 and not more than 162.56")
              return inputB.target.value =""
            } else{
             setBust(inputB.target.value)
              
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
            <label>Hips</label>
            <input type="number" value={hips}  min="81.28" max="99.79" placeholder='Your hips measurement is between 81.28cm to 99.79cm' onBlur={(inputD)=>{
              if(Number(inputD.target.value <81.28 || inputD.target.value> 99.79)){
              alert("Your input should not be less than 81.28 and not more than 99.79")
              inputD.target.value =""
              setHips(81.28)
            } else{
             setHips(inputD.target.value)
              
            }}
            } onChange={handleHips}/>
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
                  {/* <img src={imageUrl} alt={`Item ${index} ` } /> */}
                  <img src={imageUrl} alt={`Sorry, the system does not have the top rated category ` } />
                </div>
              </div>
            ))}
          </div>
            {/*  */}
      </div>
           


            <div className='rec-heading'>
            <h3>Recommendation Section</h3>
            <button><Link to='/feedback' style={{textDecoration:"none",color:"white"}}> Feedback</Link></button>
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

export default WomenRetrieveInfo;
