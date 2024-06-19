// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { baseURL } from '../../utils/constant';
// import './mendashboard.css'

// const MenDashboardDisplay = () => {
//   const [items, setItems] = useState([]);
//   const [category, setCategory] = useState('');
//   const [imgDisplay, setImgDisplay] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/getallSavedItem/`);
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const imageDisplay = () => {
//     const filteredItems = items.filter(itemData => itemData.category === category);
//     const imageUrls = filteredItems.map(item => `${baseURL}/productsImages/${item.imgurl}`);
//     setImgDisplay(imageUrls);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   return (
//     <div className='data-frame'>
//       <div className='cat'>
//         <select
//           name="category"
//           id="category"
//           value={category}
//           onChange={handleCategoryChange}
//           onBlur={handleCategoryChange}
//         >
//           <option value="">Select your clothe category</option>
//           <option value="Agbada">Agbada</option>
//           <option value="Casual">Casual</option>
//           <option value="Senator">Senator</option>
//         </select>
//       </div>
//       <br />
//       <br />
//       <hr />
//       <br />
//       <br />
//       {/* Displaying filtered items */}
//       {items
//         .filter(itemData => itemData.category === category)
//         .map((itemData, index) => (
//           <div key={index}>
//             <p>Category: {itemData.category}</p>
//             <img src={`${baseURL}/productsImages/${itemData.imgurl}`} alt={itemData.category} />
//             <p>Neck: {itemData.neck}</p>
//             <p>Chest: {itemData.chest}</p>
//             <p>Waist: {itemData.waist}</p>
//             <p>Sleeve: {itemData.sleeve}</p>
//             <p>Inseam: {itemData.inseam}</p>
//             <p>Rate: {itemData.selectedstarcount}</p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default MenDashboardDisplay;











import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import './mendashboard.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const MenDashboardDisplay = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');
  const [imgDisplay, setImgDisplay] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallSavedItem/`);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDelete = async (itemId) => {
    itemId.preventDfault()
    try {
      await axios.delete(`${baseURL}/deleteSavedItem/${itemId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className='data-frame'>
      <div className='cat'>
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          onBlur={handleCategoryChange}
        >
          <option value="">Select your clothe category</option>
          <option value="Agbada">Agbada</option>
          <option value="Casual">Casual</option>
          <option value="Senator">Senator</option>
        </select>
      </div>
      <br /><br /><hr />
      <br /><br />
      {/* Displaying filtered items */}
      <div className='item-container'>
        {items
          .filter(itemData => itemData.category === category)
          .map((itemData, index) => (
            <div className='item' key={index}>
              <p>Category: {itemData.category}</p>
              <img src={`${baseURL}/productsImages/${itemData.imgurl}`} alt={itemData.category} />
              <div className='msg-desc'>
              <p>Neck: {itemData.neck}</p>
              <p>Chest: {itemData.chest}</p>
              <p>Waist: {itemData.waist}</p>
              <p>Sleeve: {itemData.sleeve}</p>
              <p>Inseam: {itemData.inseam}</p>
              <p>Rate: {itemData.selectedstarcount}</p>
              <p>id {itemData._id}</p>
              </div>
              <div className='btn'>
                <button style={{ background: "#ff4141" }} onClick={() => handleDelete(itemData._id)}>Delete</button>
                <button  style={{ background: "green" }}><Link to='/edititem'>Edit</Link></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenDashboardDisplay;

