import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../../utils/constant';
import { Link, useParams } from 'react-router-dom';

const WomenEdit = () => {
  const { id } = useParams();
  
  // State variables
  const [item, setItem] = useState({
    id:id,
    category: '',
    burst: '',
    waist: '',
    hips: '',
    inseam: '',
    imgurl: '',
    selectedstarcount: 0,
    clickcount: 0,
    selectedStarOver: 0
  });

  useEffect(() => {
    // Fetch item data from API based on id
    axios.get(`${baseURL}/getsingleWomenItem/` +id)
      .then(res => {
        const fetchedItem = res.data;
        setItem({
          category: fetchedItem.category,
          burst: fetchedItem.burst,
          waist: fetchedItem.waist,
          hips: fetchedItem.hips,
          inseam: fetchedItem.inseam,
          imgurl:fetchedItem.imgurl,
          selectedstarcount: fetchedItem.selectedstarcount,
          clickcount: fetchedItem.clickcount,
          selectedStarOver: fetchedItem.selectedStarOver
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);


  // Image handler
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setItem({ ...item, imgurl: file }); 
  };
  // Image handler end
 

  // Input change handler
  const handleChange = (e) => {
    setItem({ ...item, category: e.target.value });
  };

  // Generic input change handler
  const handleInputChange = (e, propertyName) => {
    const value = e.target.value;
    setItem({ ...item, [propertyName]: value });
  };

  

  // Form submission handler
  // const handleFormSubmission = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     // Make PUT request to update item
  //     const updateItem = await axios.put(`${baseURL}/updateWonenItem/${id}`, item, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     console.log("Item updated successfully:", updateItem.data);
  //     alert("Your update was successful")
  //     window.location = "/dashboard"
  //   } catch (error) {
  //     console.error("The update was not successful", error);
  //   }
  // };



  // const handleFormSubmission = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     let imageUrl = item.imgurl; // Assume current imgurl is a URL or File
  
  //     // Check if imgurl is a File (means user has uploaded a new image)
  //     if (item.imgurl instanceof File) {
  //       // Prepare FormData for image upload to Cloudinary
  //       const formData = new FormData();
  //       formData.append('file', item.imgurl); // 'file' is the key for the image upload
  //       formData.append('upload_preset', 'recommenderupdate'); // Cloudinary upload preset
  
  //       // Upload image to Cloudinary
  //       const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/djobhpkl6/image/upload', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data'
  //         }
  //       });
  
  //       // Get the image URL from Cloudinary response
  //       imageUrl = cloudinaryResponse.data.secure_url;
  //     }
  
  //     // Update item state with the new image URL
  //     const updatedItem = { ...item, imgurl: imageUrl };
  
  //     // Make PUT request to update item data in MongoDB
  //     const updateItem = await axios.put(`${baseURL}/updateWonenItem/${id}`, updatedItem, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  
  //     console.log("Item updated successfully:", updateItem.data);
  //     alert("Your update was successful");
  //     window.location = "/dashboard"; // Redirect to dashboard after successful update
  //   } catch (error) {
  //     console.error("The update was not successful", error);
  //   }
  // };





  const handleFormSubmission = async (e) => {
    e.preventDefault();
  
    try {
      let imageUrl = item.imgurl; // Assume current imgurl is a URL or File
  
      // Check if imgurl is a File (means user has uploaded a new image)
      if (item.imgurl instanceof File) {
        // Prepare FormData for image upload to Cloudinary
        const formData = new FormData();
        formData.append('file', item.imgurl); // 'file' is the key for the image upload
        formData.append('upload_preset', 'recommenderupdate'); // Cloudinary upload preset
  
        // Upload image to Cloudinary
        const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/djobhpkl6/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        // Get the image URL from Cloudinary response
        imageUrl = cloudinaryResponse.data.secure_url;
      }
  
      // Update item state with the new image URL
      const updatedItem = { ...item, imgurl: imageUrl };
  
      // Make PUT request to update item data in MongoDB
      const updateItem = await axios.put(`${baseURL}/updateWonenItem/${id}`, updatedItem, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log("Item updated successfully:", updateItem.data);
      alert("Your update was successful");
      window.location = "/dashboard"; // Redirect to dashboard after successful update
    } catch (error) {
      console.error("The update was not successful", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmission} className='form-frame'>
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
          <label>Bust</label>
          <input
            type="text"
            value={item.burst}
            
            placeholder='Your chest measurement is between 81.28cm to 171.46cm'
            onChange={(e) => handleInputChange(e, 'burst')}
          />
          <span className="sizes"></span>
        </div>
        <div>
          <label>Waist</label>
          <input
            type="text"
            value={item.waist}
          
            placeholder='Input your waist measurement between 67.32cm to 145.68cm'
            onChange={(e) => handleInputChange(e, 'waist')}
          />
        </div>
        <div>
          <label>Hips</label>
          <input
            type="text"
            value={item.hips}
           
            placeholder='Your sleeve measurement is between 87.63cm to 139.08cm'
            onChange={(e) => handleInputChange(e, 'hips')}
          />
        </div>
        <div>
          <label>Inseam</label>
          <input
            type="text"
            value={item.inseam}
          
            placeholder='Your inseam measurement is between 72.12cm to 86.36cm'
            onChange={(e) => handleInputChange(e, 'inseam')}
          />
        </div>
        <div>
          {/* <input type="file" accept='image/*' onChange={(e) => setItem({ ...item, imgurl: e.target.files[0]})} /> */}
          <input type="file" accept='image/*' onChange={handleImgChange} />
        </div>
<br></br>
<br></br>
<br></br>
        <div className='image-frame' style={{height:"200px", width:"300px"}}>
        {item.imgurl && typeof item.imgurl !== 'string' ? (
          <img src={URL.createObjectURL(item.imgurl)} alt='' />
        ) : (
          <img src={`${item.imgurl}`} alt='' />
        )}
      </div>

        <div className='star-main-frame'>
          <h3>Rating</h3>
          
        </div>

        <button type="submit">Update</button>
      
      </div>
    </form>
  );
};

export default WomenEdit;













