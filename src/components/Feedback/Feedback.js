// import axios from 'axios';
// import React, { useState } from 'react'
// import { Form } from 'react-router-dom'
// import { baseURL } from '../../utils/constant';

// export default function Feedback() {
//   const [selectedstarcount, setSelectedStarCount] = useState(0);
//   // const [selectedstarcount, setSelectedStarCount] = useState(0);
//   const [selectedStarOver, SetSelectedStarOver] = useState(0)
//   const [clickcount, setClickCount] = useState(0)

//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [description, setDescription] = useState("");


  


//   const feedBackForm = async(e)=>{
//       e.preventDefault();
//       const formData = new FormData();
    
//       formData.append('name', name);
//       formData.append('location', location);
//       formData.append('email', email);
//       formData.append('phone', phone);
//       formData.append('description', description);
//       formData.append('selectedstarcount', selectedstarcount )
    
//       try {
//         const response = await axios.post(`${baseURL}/savedFeedBack`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         // console.log('Item added:', response.data);
//         alert("Your feedback was sent successfully!")
//       } catch (error) {
//         alert("Ensure you input the data correctlly")
//       }
//       console.log([...formData.entries()]);
//   }
//   const customerName = (e)=>{
//    setName( e.target.value)
//   }
//   const customerlocation = (e)=>{
//    setLocation( e.target.value)
//   }
//   const customerEmail = (e)=>{
//    setEmail( e.target.value)
//   }
//   const customerPhone = (e)=>{
//    setPhone( e.target.value)
//   }
//   const customerDescription = (e)=>{
//    setDescription( e.target.value)
//   }
//   return (
//     <div>
//       <h1>FeedBack Form</h1>
//       <form onSubmit={feedBackForm}>
//       <div className='input-frame'>
//       <input type='text' value={name} placeholder='Name'
//       onChange={customerName } />

//       <input type='text' value={location} placeholder='Your location'
//       onChange={customerlocation} />

//       <input type='email' value={email} placeholder='Email' 
//       onChange={customerEmail}/>

//       <input type='number' value={phone} placeholder='Phone number'
//       onChange={customerPhone} />

//       <input type='textarea' value={description} placeholder='Description' 
//       onChange={customerDescription}/>
//       </div>
//       <div className='star-frame'>
//         <div><h1>How satisfiy are you using our recommender system</h1></div>
//         {/*  */}
//         <div className='stars'>
//         {
//           [...Array(10)].map((item, index)=>{
//             return  <span key={index} 
//             className={`${index +1 <= selectedstarcount ? "star-selected" : ""} ${index +1 <= selectedStarOver ? "star-selected" : ""}`}
//             onClick={()=>{
//               setSelectedStarCount(index+1)
//               setClickCount(1)
//             }}
//             onMouseOver = {()=>{
//               SetSelectedStarOver(index+1)
//             }}
//             onMouseLeave={()=>{
//               SetSelectedStarOver(0)
//             }}
//             >&#9733;</span>
//           })
//         }
//       </div>
//       <div style={{display:"none"}} >Rating Count: {selectedstarcount}</div>
//       <div style={{display:"none"}}>Click Count: {clickcount}</div>
//       <div>Click Count Over: {selectedStarOver}</div>
//       {/* <button type="submit">Save Item</button> */}
//         {/*  */}
//       </div>
//       <div className='btn'><button type='submit'>Submit</button></div>
//       </form>
      
      

//     </div>
//   )
// }







































import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../../utils/constant';
import "./feedback.css"

export default function Feedback() {
  const [selectedStarCount, setSelectedStarCount] = useState(0);
  const [selectedStarOver, setSelectedStarOver] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('description', description);
    formData.append('selectedstarcount', selectedStarCount);

    try {
      const response = await axios.post(`${baseURL}/savedFeedBack`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // alert("Your feedback was sent successfully!");
      // console.log('Response:', response.data);
      if (response.status === 200) {
        alert("Your feedback was sent successfully!");
        console.log('Response:', response.data);
      } else {
        alert("Failed to submit feedback. Please try again later.");
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // alert("Failed to submit feedback. Please ensure all fields are filled correctly.");
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleStarClick = (index) => {
    setSelectedStarCount(index + 1);
    setClickCount(1);
  };

  const handleStarMouseOver = (index) => setSelectedStarOver(index + 1);

  const handleStarMouseLeave = () => setSelectedStarOver(0);

  return (
    <div className='feedback-form'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Feedback Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='input-frame'>
          <input type='text' value={name} placeholder='Name' onChange={handleNameChange} />
          <input type='text' value={location} placeholder='Your location' onChange={handleLocationChange} />
          <input type='email' value={email} placeholder='Email' onChange={handleEmailChange} />
          <input type='tel' value={phone} placeholder='Phone number' onChange={handlePhoneChange} />
          <div>
          <textarea value={description} placeholder='Description' onChange={handleDescriptionChange} />
          </div>
          
        </div>

<br></br>
        <div className='star-frame'>
          <div><h2>How satisfied are you using our recommender system?</h2></div>
          <div className='stars'>
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className={`star ${index + 1 <= selectedStarCount ? "star-selected" : ""} ${index + 1 <= selectedStarOver ? "star-hover" : ""}`}
                onClick={() => handleStarClick(index)}
                onMouseOver={() => handleStarMouseOver(index)}
                onMouseLeave={handleStarMouseLeave}
              >
                &#9733;
              </span>
            ))}
          </div>
          <div style={{ display: "none" }}>Rating Count: {selectedStarCount}</div>
          <div style={{ display: "none" }}>Click Count: {clickCount}</div>
          <div>Mouse Over Count: {selectedStarOver}</div>
        </div>

        <div className='btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
