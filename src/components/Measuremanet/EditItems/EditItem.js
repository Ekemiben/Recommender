

import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../../../utils/constant';

const YourFormComponent = () => {
  // State variables
  const [category, setCategory] = useState('');
  const [neck, setNeck] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [sleeve, setSleeve] = useState('');
  const [inseam, setInseam] = useState('');
  const [selectedstarcount, setSelectedStarCount] = useState(0);
  const [clickcount, setClickCount] = useState(0);
  const [selectedStarOver, setSelectedStarOver] = useState(0);

  // Input change handler
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  // Blur handler for validation
  const handleBlur = (e) => {
    // You can add validation logic here if needed
  };

  // Generic input change handler
  const handleInputChange = (e, setterFunc) => {
    const value = e.target.value;
    setterFunc(value);
  };

  // File input change handler
  const handleImgChange = (e) => {
    // Handle file upload logic here
  };

  // // Form submission handler
  // const handleFormSubmission = async (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here (e.g., sending data to backend)
  //   // Example:
  //   const formData = {
  //     category,
  //     neck,
  //     chest,
  //     waist,
  //     sleeve,
  //     inseam,
  //     selectedstarcount,
  //     clickcount,
  //     selectedStarOver
  //   };
  //   console.log(formData);
  //   // Make your API call or handle form data as required
  //   if(formData){
  //   try {
  //     const updateItem = await axios.post(`${baseURL}/updateSavedItem`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });

  //     }catch(error){
  //       console.log("The update is was not successful", error)
  //     }
  //   }

  // };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
  
    // Generate a unique ID (UUID)
    // const uniqueId = generateUUID();
  
    // Example of formData including the uniqueId
    const formData = {
      // id: uniqueId,  // Include the unique ID in your formData
      category,
      neck,
      chest,
      waist,
      sleeve,
      inseam,
      selectedstarcount,
      clickcount,
      selectedStarOver
    };
  
    console.log(formData);
  
    // Make your API call or handle form data as required
    try {
      const updateItem = await axios.post(`${baseURL}/updateSavedItem`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Item updated successfully:", updateItem.data);
    } catch (error) {
      console.error("The update was not successful", error);
    }
  };
  
  // Function to generate UUID (v4)
  // function generateUUID() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     var r = Math.random() * 16 | 0,
  //         v = c == 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }
  

  return (
    <form onSubmit={handleFormSubmission} className='form-frame'>
      <div className='selection'>
        <h1>You Selected {category}</h1>
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
        <div>
          <label>Neck</label>
          <input
            type="number"
            value={neck}
            min="35.56"
            max="57.15"
            placeholder='Your chest measurement is between 35.56cm to 57.15cm'
            onBlur={(inputA) => {
              if (Number(inputA.target.value) < 35.56 || Number(inputA.target.value) > 57.15) {
                alert("Your input should be between 35.56cm and 57.15cm");
                setNeck('');
              } else {
                setNeck(inputA.target.value);
              }
            }}
            onChange={(e) => handleInputChange(e, setNeck)}
          />
          {/* Display size information here if needed */}
        </div>
        {/* New iniput */}
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
      } onChange={(e) => handleInputChange(e, setChest)} /><sapn className="sizes"></sapn>
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
      } onChange={(e) => handleInputChange(e, setWaist)}/>
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
      } onChange={(e) => handleInputChange(e, setSleeve)}/>
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
      } onChange={setInseam}/>
      </div>
     
      <div className='input-file'>
      <input type="file" accept='image/*' onChange={handleImgChange} ></input>
      </div>
        

        {/* End of New */}

        {/* Repeat similar structure for other inputs (Chest, Waist, Sleeve, Inseam) */}

        {/* <div className='input-file'>
          <input type="file" accept='image/*' onChange={handleImgChange} />
        </div> */}

        {/* Star rating section */}
        <div className='star-main-frame'>
          <h3>Rating</h3>
          {/* Implement star rating component */}
          {/* Example implementation is already in your code */}
          {/* Make sure to set selected star count and handle click events */}
        </div>

        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default YourFormComponent;

