

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

  const [info, setInfo] = useState("The garment shown below is highly regarded in its category. As a recommendation system, I think this will suit you perfectly.")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallWomenItem/`);

      setItem(response.data);
      // console.log(response.data)
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



  // const imageDisplay = () => {
  //   const result = item.map(items => items.imgurl)
  //   console.log(result)
  // }


  const imageDisplay = () => {
    const filteredImages = item.filter((itemData) => {
      return (
        itemData.burst == bust &&
        itemData.waist == waist &&
        itemData.hips == hips &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 3
      );
    
    });
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
        // itemData.neck == neck &&
        itemData.burst == bust &&
        itemData.waist == waist &&
        itemData.hips == hips &&
        itemData.inseam == inseam &&
        itemData.selectedstarcount > 4 &&
        itemData.category == category
      );
      
    });
    console.log(filteredImages)
    // const firstImageUrl = filteredImages.length > 0 ? `${baseURL}/productsImages/${filteredImages[0].imgurl}` : '';
    const firstImageUrl = filteredImages.length > 0 ? `${filteredImages[0].imgurl}` : '';
    setCatImage([firstImageUrl]);
    // setCatImage([firstImageUrl]);
   
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
       
         
        }} style={{width:"100%", height:"40px", borderRadius:"5px"}}>
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
            <input type="text" value={bust}   placeholder='Your chest measurement is between 81.28cm to 171.46cm' onBlur={(inputB)=>{
              if(Number(inputB.target.value <81.28 || inputB.target.value > 171.46)){
              
              alert("Your input should not be less than 86.36 and not more than 171.46")
              setBust(86.36)
              // return inputB.target.value =""
            } else{
             setBust(inputB.target.value)
              
            }}
            } onChange={handleChest} />
            </div>
            <div>
            <label>Waist</label>
            <input type="text" value={waist}    placeholder='Input your waist measurement between 67.32cm to 145.68cm' onBlur={(inputC)=>{
              if(Number(inputC.target.value <67.32 || inputC.target.value> 145.68)){
              
              
              alert("Your input should not be less than 67.32 and not more than 145.68")
              setWaist(67.32)
              // inputC.target.value =""
            } else{
             setWaist(inputC.target.value)
              
            }}
            } onChange={handleWaist}/>
            </div>
      
            <div>
            <label>Hips</label>
            <input type="text" value={hips}   placeholder='Your hips  measurement is between 87.63cm to 139.08cm' onBlur={(inputD)=>{
              if(Number(inputD.target.value <87.63 || inputD.target.value> 132.08)){
              alert("Your input should not be less than 81.28 and not more than 99.79")
              inputD.target.value =""
              setHips(87.63)
            } else{
             setHips(inputD.target.value)
              
            }}
            } onChange={handleHips}/>
            </div>
            <div>
      
            <label>Inseam</label>
            <input type="text" value={inseam}  placeholder='Your inseam measurement is between 58.12cm to 90.36cm' onBlur={(inputE)=>{
              if(Number(inputE.target.value <58.12 || inputE.target.value> 150.36)){
              
              
              alert("Your input should not be less than 58.12 and not more than 90.36")
             
              setInseam(58.12)
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
                  <img src={imageUrl} alt={`Sorry, the measurement you enterd,does not have the top rated category of ${category}'s style` } />
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

export default WomenRetrieveInfo;
