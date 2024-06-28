// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { baseURL } from '../../../utils/constant';
// import { useParams } from 'react-router-dom';

// const WomenEdit = () => {
//   const {id} = useParams()
//   // State variables
//   const [category, setCategory] = useState('');
//   // const [neck, setNeck] = useState('');
//   const [burst, setBurst] = useState('');
//   const [waist, setWaist] = useState('');
//   const [hips, setHips] = useState('');
//   const [inseam, setInseam] = useState('');
//   const [selectedstarcount, setSelectedStarCount] = useState(0);
//   const [clickcount, setClickCount] = useState(0);
//   const [selectedStarOver, setSelectedStarOver] = useState(0);

//   useEffect(()=>{
//     axios.get(`${baseURL}/womenedititem ${id}`)
//     // axios.get(`${baseURL}/womenedititem` +id)
//     // axios.get('http://localhost:3000/womenedititem/'+id) 
//     .then(res => console.log('Data fetched:', res.data))
//     .catch(error => console.error('Error fetching data:', error.response));
   
//   },[])

  




//   // Input change handler
//   const handleChange = () => {
//     // setCategory(e.target.value);
//   };

//   // Blur handler for validation
//   const handleBlur = (e) => {
//     // You can add validation logic here if needed
//   };

//   // Generic input change handler
//   const handleInputChange = (e, setterFunc) => {
//     const value = e.target.value;
//     setterFunc(value);
//   };

//   // File input change handler
//   const handleImgChange = (e) => {
//     // Handle file upload logic here
//   };


//   const handleFormSubmission = async (e) => {
//     e.preventDefault();
//     const formData = {
//       // id: uniqueId,  // Include the unique ID in your formData
//       category,
//       burst,
//       waist,
//       inseam,
//       selectedstarcount,
//       clickcount,
//       selectedStarOver
//     };
  
//     console.log(formData);
  
//     // Make your API call or handle form data as required
//     try {
//       const updateItem = await axios.put(`${baseURL}/updateSavedItem`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log("Item updated successfully:", updateItem.data);
//     } catch (error) {
//       console.error("The update was not successful", error);
//     }
//   };
  
//   // Function to generate UUID (v4)
//   // function generateUUID() {
//   //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//   //     var r = Math.random() * 16 | 0,
//   //         v = c == 'x' ? r : (r & 0x3 | 0x8);
//   //     return v.toString(16);
//   //   });
//   // }
  

//   return (
//     <form onSubmit={handleFormSubmission} className='form-frame'>
//       <div className='selection'>
//         <h1>You Selected {category}</h1>
//         <select
//           name="Your cloth material"
//           id="Your-cloth-material"
//           value={category}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         >
//           <option value="">Your clothes material</option>
//           <option value="Agbada">Agbada</option>
//           <option value="Casual">Casual</option>
//           <option value="Senator">Senator</option>
//         </select>
//       </div>

//       <div className='form-input-frame'>
       
//         <div>
//         <label >Burst</label>
//       <input type="number" value={burst}  min="86.36" max="162.56" placeholder='Your chest measurement is between 86.36cm to 162.56cm' onBlur={(inputB)=>{
//         if(Number(inputB.target.value <86.36 || inputB.target.value > 162.56)){
//         alert("Your input should not be less than 86.36 and not more than 162.56")
//         setBurst(86.36)
//       } else{
//        setBurst(inputB.target.value)
        
//       }}
//       } onChange={(e) => handleInputChange(e, setBurst)} /><sapn className="sizes"></sapn>
//       </div>
//       <div>
//       <label>Waist</label>
//       <input type="number" value={waist}  min="72.12" max="152.4"  placeholder='Input your waist measurement between 72.12cm to 152.4cm' onBlur={(inputC)=>{
//         if(Number(inputC.target.value <72.12 || inputC.target.value> 152.4)){
//         alert("Your input should not be less than 72.12 and not more than 152.4")
//         setWaist(72.12)
//       } else{
//        setWaist(inputC.target.value)
        
//       }}
//       } onChange={(e) => handleInputChange(e, setWaist)}/>
//       </div>

//       <div>
//       <label>Hips</label>
//       <input type="number" value={hips}  min="81.28" max="99.79" placeholder='Your sleeve measurement is between 81.28cm to 99.79cm' onBlur={(inputD)=>{
//         if(Number(inputD.target.value <81.28 || inputD.target.value> 99.79)){
//         alert("Your input should not be less than 81.28 and not more than 99.79")
//         setHips(81.28)
//       } else{
//        setHips(inputD.target.value)
        
//       }}
//       } onChange={(e) => handleInputChange(e, setHips)}/>
//       </div>
//       <div>

//       <label>Inseam</label>
//       <input type="number" value={inseam}  min="72.12" max="86.36" placeholder='Your inseam measurement is between 72.12cm to 86.36cm' onBlur={(inputE)=>{
//         if(Number(inputE.target.value <72.1 || inputE.target.value> 86.36)){
       
        
//         alert("Your input should not be less than 72.1 and not more than 86.36")
//         setInseam(72.1)
//       } else{
//        setInseam(inputE.target.value)
        
//       }}
//       } onChange={setInseam}/>
//       </div>
     
//       <div className='input-file'>
//       <input type="file" accept='image/*' onChange={handleImgChange} ></input>
//       </div>
//         <div className='star-main-frame'>
//           <h3>Rating</h3>
//         </div>

//         <button type="submit">Update</button>
//       </div>
//     </form>
//   );
// };

// export default WomenEdit;

















// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { baseURL } from '../../../utils/constant';
// import { useParams } from 'react-router-dom';

// const WomenEdit = () => {
//   const { id } = useParams();
  
//   // State variables
//   const [item, setItem] = useState({
//     category: '',
//     burst: '',
//     waist: '',
//     hips: '',
//     inseam: '',
//     imgurl: '',
//     selectedstarcount: 0,
//     clickcount: 0,
//     selectedStarOver: 0
//   });

//   useEffect(() => {
//     // Fetch item data from API based on id
//     axios.get(`${baseURL}/getsingleWomenItem/` +id)
//       .then(res => {
//         const fetchedItem = res.data;
//         setItem({
//           category: fetchedItem.category,
//           burst: fetchedItem.burst,
//           waist: fetchedItem.waist,
//           hips: fetchedItem.hips,
//           inseam: fetchedItem.inseam,
//           imgurl:fetchedItem.imgurl,
//           selectedstarcount: fetchedItem.selectedstarcount,
//           clickcount: fetchedItem.clickcount,
//           selectedStarOver: fetchedItem.selectedStarOver
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, [id]);

//   // Input change handler
//   const handleChange = (e) => {
//     setItem({ ...item, category: e.target.value });
//   };

//   // Generic input change handler
//   const handleInputChange = (e, propertyName) => {
//     const value = e.target.value;
//     setItem({ ...item, [propertyName]: value });
//   };

//   // File input change handler
//   const handleImgChange = (e) => {
//     // Handle file upload logic here if needed
//   };

//   // Form submission handler
//   const handleFormSubmission = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Make PUT request to update item
//       const updateItem = await axios.put(`${baseURL}/updateSavedItem`, item, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log("Item updated successfully:", updateItem.data);
//     } catch (error) {
//       console.error("The update was not successful", error);
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmission} className='form-frame'>
//       <div className='selection'>
//         <h1>You Selected {item.category}</h1>
//         <select
//           name="Your cloth material"
//           id="Your-cloth-material"
//           value={item.category}
//           onChange={handleChange}
//         >
//           <option value="">Your clothes material</option>
//           <option value="Agbada">Agbada</option>
//           <option value="Casual">Casual</option>
//           <option value="Senator">Senator</option>
//         </select>
//       </div>

//       <div className='form-input-frame'>
//         <div>
//           <label>Burst</label>
//           <input
//             type="number"
//             value={item.burst}
//             min="86.36"
//             max="162.56"
//             placeholder='Your chest measurement is between 86.36cm to 162.56cm'
//             onChange={(e) => handleInputChange(e, 'burst')}
//           />
//           <span className="sizes"></span>
//         </div>
//         <div>
//           <label>Waist</label>
//           <input
//             type="number"
//             value={item.waist}
//             min="72.12"
//             max="152.4"
//             placeholder='Input your waist measurement between 72.12cm to 152.4cm'
//             onChange={(e) => handleInputChange(e, 'waist')}
//           />
//         </div>
//         <div>
//           <label>Hips</label>
//           <input
//             type="number"
//             value={item.hips}
//             min="81.28"
//             max="99.79"
//             placeholder='Your sleeve measurement is between 81.28cm to 99.79cm'
//             onChange={(e) => handleInputChange(e, 'hips')}
//           />
//         </div>
//         <div>
//           <label>Inseam</label>
//           <input
//             type="number"
//             value={item.inseam}
//             min="72.12"
//             max="86.36"
//             placeholder='Your inseam measurement is between 72.12cm to 86.36cm'
//             onChange={(e) => handleInputChange(e, 'inseam')}
//           />
//         </div>

//         <div className='input-file'>
//           <input type="file" accept='image/*' onChange={handleImgChange} />
//         </div>

//         <div className='star-main-frame'>
//           <h3>Rating</h3>
          
//         </div>

//         <button type="submit">Update</button>
//         <img src={item.imgurl} alt=''/>
//       </div>
//     </form>
//   );
// };

// export default WomenEdit;










import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../../utils/constant';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const WomenEdit = () => {
  const { id } = useParams();
  
  
  // State variables
  const [item, setItem] = useState({
    id:id,
    category: '',
    burst: '',
    waist: '',
    hips: '',
    inseam:'' ,
    imgurl: '', // Initialize imgurl as a string if you expect a single image URL
    selectedstarcount: 0,
    clickcount: 0,
    selectedStarOver: 0
  });

  useEffect(() => {
    // Fetch item data from API based on id
    axios.get(`${baseURL}/getsingleWomenItem/` + id)
      .then(res => {
        const fetchedItem = res.data;
        setItem({
          category: fetchedItem.category,
          id:id,
          burst: fetchedItem.burst,
          waist: fetchedItem.waist,
          hips: fetchedItem.hips,
          inseam: fetchedItem.inseam,
          imgurl: fetchedItem.imgurl,
          selectedstarcount: fetchedItem.selectedstarcount,
          clickcount: fetchedItem.clickcount,
          selectedStarOver: fetchedItem.selectedStarOver
        });
        // setItem({...item, category: res.data.category, burst:res.data.burst, waist:res.data.waist, hips:res.data.hips, inseam:res.data.inseam, imgurl:res.data.imgurl, selectedstarcount:res.data.selectedstarcount, clickcount:res.data.clickcount, selectedStarOver:res.data.selectedStarOver
        // })
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Input change handler for select element
  const handleChange = (e) => {
    setItem({ ...item, category: e.target.value });
  };

  const navigate = useNavigate()
  

  const handleSumitForm = (e)=>{
    // e.preventDefault()
    axios.put(`${baseURL}/getsingleWomenItem/` + id, item)
      .then(res => {
        navigate('/')
    
  })
  }

  // Generic input change handler
  // const handleInputChange = (e, propertyName) => {
  //   const value = e.target.value;
  //   setItem({ ...item, [propertyName]: value });
  // };

  // File input change handler
  // const handleImgChange = (e) => {
  //   const file = e.target.files[0];
  //   // You can handle file upload logic here if needed, and update item.imgurl accordingly
  //   // For example, upload the file using axios and update imgurl in the state with the returned URL
  // };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setItem({ ...item, imgurl: file });
  };
  

  // Form submission handler
  // const handleFormSubmission = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     // Make PUT request to update item
  //     const updateItem = await axios.put(`${baseURL}/updateWonenItem ${item.id}`, item, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     console.log("Item updated successfully:", updateItem.data);
  //   } catch (error) {
  //     console.error("The update was not successful", error);
  //   }
  // };


//   const handleFormSubmission = async (e) => {
//     e.preventDefault();
    
//     try {
//         // Assuming 'item' contains the updated data
//         const updateItem = await axios.put(`${baseURL}/updateWonenItem/${item.id}`, item, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log("Item updated successfully:", updateItem.data);
//     } catch (error) {
//         console.error("The update was not successful", error);
//     }
// };




const handleFormSubmission = async (e) => {
  e.preventDefault();
  
  try {
    const formData = new FormData();
    formData.append('id', item.id);
    formData.append('category', item.category);
    formData.append('burst', item.burst);
    formData.append('waist', item.waist);
    formData.append('hips', item.hips);
    formData.append('inseam', item.inseam);
    formData.append('imgurl', item.imgurl); // append the file object here
    formData.append('selectedstarcount', item.selectedstarcount);
    formData.append('clickcount', item.clickcount);
    formData.append('selectedStarOver', item.selectedStarOver);

    const updateItem = await axios.put(`${baseURL}/updateWonenItem/${item.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log("Item updated successfully:", updateItem.data);
    Navigate='/'
  } catch (error) {
    console.error("The update was not successful", error);
  }
};

    

  return (
    // <form onSubmit={handleFormSubmission} className='form-frame'>
    <form onSubmit={handleSumitForm} className='form-frame'>
      <div className='selection'>
        <h1>You Selected {item.category}</h1>
        <select
          name="Your cloth material"
          id="Your-cloth-material"
          value={item.category}
          onChange={handleChange}
        >
          <option value="">Your clothes material</option>
          <option value="Agbada">Agbada</option>
          <option value="Casual">Casual</option>
          <option value="Senator">Senator</option>
        </select>
      </div>

      <div className='form-input-frame'>
        <div>
          <label>Burst</label>
          <input
            type="number"
            value={item.burst}
            min="86.36"
            max="162.56"
            placeholder='Your chest measurement is between 86.36cm to 162.56cm'
            // onChange={(e) => handleInputChange(e, 'burst')}
            onChange={(e) => setItem({ ...item, burst: e.target.value })}
          />
          <span className="sizes"></span>
        </div>
        <div>
          <label>Waist</label>
          <input
            type="number"
            value={item.waist}
            min="72.12"
            max="152.4"
            placeholder='Input your waist measurement between 72.12cm to 152.4cm'
            // onChange={(e) => handleInputChange(e, 'waist')}
            onChange={(e) => setItem({ ...item, waist: e.target.value })}
          />
        </div>
        <div>
          <label>Hips</label>
          <input
            type="number"
            value={item.hips}
            min="81.28"
            max="99.79"
            placeholder='Your sleeve measurement is between 81.28cm to 99.79cm'
            // onChange={(e) => handleInputChange(e, 'hips')}
            onChange={(e) => setItem({ ...item, hips: e.target.value })}
          />
        </div>
        <div>
          <label>Inseam</label>
          <input
            type="number"
            value={item.inseam}
            min="72.12"
            max="86.36"
            placeholder='Your inseam measurement is between 72.12cm to 86.36cm'
            // onChange={(e) => handleInputChange(e, 'inseam')}
            onChange={(e) => setItem({ ...item, inseam: e.target.value })}
          />
        </div>

        <div className='input-file'>
          <input type="file" accept='image/*' onChange={handleImgChange} />
          {/* <input type="file" accept='image/*' onChange={(e) => setItem({ ...item, imgurl: e.target.files[0]})} /> */}
        </div>

        {/* Star rating section */}
        <div className='star-main-frame'>
          <h3>Rating</h3>
          {/* Implement star rating component */}
          {/* Example implementation is already in your code */}
          {/* Make sure to set selected star count and handle click events */}
          <Rating value={item.selectedStarOver} />
        </div>

        <button type="submit" onClick={handleSumitForm()}>Update</button>
        {/* <div className='image-frame' style={{height:"200px", width:"300px"}}>
        <img src={`${baseURL}/productsImages/${item.imgurl}`} alt=''/>
        </div> */}
        <div className='image-frame' style={{height:"200px", width:"300px"}}>
        {item.imgurl && typeof item.imgurl !== 'string' ? (
          <img src={URL.createObjectURL(item.imgurl)} alt='' />
        ) : (
          <img src={`${baseURL}/productsImages/${item.imgurl}`} alt='' />
        )}
      </div>

       
      </div>
    </form>
  );
};

export default WomenEdit;

