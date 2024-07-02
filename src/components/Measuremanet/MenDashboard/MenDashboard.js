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

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/deleteSavedItem/${id}`);
      setItems(items.filter(item => item._id !== id));
      console.log(`Item with id ${id} deleted successfully`);
    } catch (error) {
      // Check if the error response indicates the item was not found
      if (error.response && error.response.status === 404) {
        console.log(`Item with id ${id} not found`);
      } else {
        console.log('Error deleting item:', error);
      }
    }
  };

  return (
    <div className='data-frame'>
      <div className='cat'>
        <select style={{borderRadius:"5px", width:"500px", height:"40px"}}
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
                <button style={{ background: "#ff4141" }} onClick={handleDelete}>Delete</button>
                <button style={{color: "#fff"}} ><Link to={`/menedit/${itemData._id}`}  style={{ background: "#007BFF", textDecoration: "none", color:"#fff"}}>Edit</Link></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenDashboardDisplay;

