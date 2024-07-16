import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../../utils/constant';
import { useParams } from 'react-router-dom';

const MenEdit = () => {
  const { id } = useParams();

  // State variables
  const [item, setItem] = useState({
    id: id,
    category: '',
    neck: '',
    chest: '',
    waist: '',
    sleeve: '',
    inseam: '',
    imgurl: '', // for storing image URL or file
    selectedstarcount: 0,
    clickcount: 0,
    selectedStarOver: 0
  });

  // Fetch item data from API based on id
  useEffect(() => {
    axios.get(`${baseURL}/getsingleSavedItem/${id}`)
      .then(res => {
        const fetchedItem = res.data;
        setItem({
          id: fetchedItem.id,
          category: fetchedItem.category,
          neck: fetchedItem.neck,
          chest: fetchedItem.chest,
          waist: fetchedItem.waist,
          sleeve: fetchedItem.sleeve,
          inseam: fetchedItem.inseam,
          imgurl: fetchedItem.imgurl,
          selectedstarcount: fetchedItem.selectedstarcount,
          clickcount: fetchedItem.clickcount,
          selectedStarOver: fetchedItem.selectedStarOver
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  // Image change handler
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setItem({ ...item, imgurl: file }); // Store the file object in state
  };

  // Input change handler
  const handleInputChange = (e, propertyName) => {
    const value = e.target.value;
    setItem({ ...item, [propertyName]: value });
  };



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
      const updateItem = await axios.put(`${baseURL}/updateSavedItem/${id}`, updatedItem, {
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
          onChange={(e) => handleInputChange(e, 'category')}
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
            value={item.neck}
            min="22.86"
            max="57.15"
            placeholder='Your neck measurement is between 22.86cm to 57.15cm'
            onChange={(e) => handleInputChange(e, 'neck')}
          />
          <span className="sizes"></span>
        </div>
        <div>
          <label>Chest</label>
          <input
            type="number"
            value={item.chest}
            min="86.36"
            max="162.56"
            placeholder='Your chest measurement is between 86.36cm to 162.56cm'
            onChange={(e) => handleInputChange(e, 'chest')}
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
            onChange={(e) => handleInputChange(e, 'waist')}
          />
        </div>
        <div>
          <label>Sleeve</label>
          <input
            type="number"
            value={item.sleeve}
            min="13.95"
            max="99.79"
            placeholder='Your sleeve measurement is between 13.95cm to 99.79cm'
            onChange={(e) => handleInputChange(e, 'sleeve')}
          />
        </div>
        <div>
          <label>Inseam</label>
          <input
            type="number"
            value={item.inseam}
            min="63.5"
            max="91.44"
            placeholder='Your inseam measurement is between 63.5cm to 91.44cm'
            onChange={(e) => handleInputChange(e, 'inseam')}
          />
        </div>
        <div>
          <input type="file" accept='image/*' onChange={handleImgChange} />
        </div>

        <div className='image-frame' style={{ height: "200px", width: "300px" }}>
          {item.imgurl ? (
            <img src={typeof item.imgurl === 'string' ? item.imgurl : URL.createObjectURL(item.imgurl)} alt='' />
          ) : null}
        </div>

        <div className='star-main-frame'>
          <h3>Rating</h3>
          {/* You can add rating input here if needed */}
        </div>

        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default MenEdit;





