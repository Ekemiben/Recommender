
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../../utils/constant';
import { Link, useParams } from 'react-router-dom';

const MenEdit = () => {
  const { id } = useParams();
  
  // State variables
  const [item, setItem] = useState({
    id:id,
    category: '',
    neck: "",
    chest: '',
    waist: '',
    sleeve: '',
    inseam: '',
    imgurl: '',
    selectedstarcount: 0,
    clickcount: 0,
    selectedStarOver: 0
  });

  useEffect(() => {
    // Fetch item data from API based on id
    axios.get(`${baseURL}/getsingleSavedItem/` +id)
      .then(res => {
        const fetchedItem = res.data;
        setItem({
          category: fetchedItem.category,
          neck: fetchedItem.neck,
          chest: fetchedItem.chest,
          waist: fetchedItem.waist,
          sleeve: fetchedItem.sleeve,
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
    const formData = new FormData();
    // formData.append('image', file);
    formData.append('imgurl', file);
    
    // Make API call to upload image
    // axios.post(`${baseURL}/productsImages`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // .then(res => {
    //   // Assuming the response contains the URL of the uploaded image
    //   const imageUrl = res.data.imageUrl;
    //   setItem({ ...item, imgurl: imageUrl });
    // })
    // .catch(error => console.error('Error uploading image:', error));
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
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    
    try {
      // Make PUT request to update item
      const updateItem = await axios.put(`${baseURL}/updateSavedItem/${id}`, item, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Item updated successfully:", updateItem.data);
      alert("Your update was successful")
      window.location = "/dashboard"
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
          <label>Neck</label>
          <input
            type="number"
            value={item.neck}
            min="35.56"
            max="162.56"
            placeholder='Your chest measurement is between 86.36cm to 162.56cm'
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
            onChange={(e) => handleInputChange(e, 'neck')}
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
          <label>sleeve</label>
          <input
            type="number"
            value={item.sleeve}
            min="81.28"
            max="99.79"
            placeholder='Your sleeve measurement is between 81.28cm to 99.79cm'
            onChange={(e) => handleInputChange(e, 'hips')}
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
        {/* <img src={item.imgurl} alt=''/> */}
      </div>
    </form>
  );
};

export default MenEdit;


