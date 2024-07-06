import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import './womendashboard.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import EditItem from '../EditItems/WomenEdit'



const WomenDashboard = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');
  const [imgDisplay, setImgDisplay] = useState([]);
  const [agbada, setAgbada] = useState()
  const [casual, setCasual] = useState()
  const [senator, setSenator] = useState()



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallWomenItem/`);
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
      await axios.delete(`${baseURL}/deleteWomenItem/${id}`);
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
  
  
  

 


  const categoryDisplay = () => {
    // Initialize counters for each category
    let senatorCount = 0;
    let casualCount = 0;
    let agbadaCount = 0;
  
    // Iterate through each item in the items array
    items.forEach(item => {
      // Check the category of each item and increment the respective counter
      switch (item.category) {
        case 'Senator':
          senatorCount++;
          break;
        case 'Casual':
          casualCount++;
          break;
        case 'Agbada':
          agbadaCount++;
          break;
        default:
          // Handle any other categories if needed
          break;
      }
      console.log(item)
    });
  
    // Update state or output the counts
    setSenator(senatorCount);
    setCasual(casualCount);
    setAgbada(agbadaCount);
  
    // Optionally, log the counts to the console
    console.log("Senator count:", senatorCount);
    console.log("Casual count:", casualCount);
    console.log("Agbada count:", agbadaCount);
  }
  

  

  return (
    
    <div className='data-frame'>
      
      <div className='cat'>
        <select style={{borderRadius:"5px", width:"100%", height:"40px"}}
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
              <img src={`${itemData.imgurl}`} alt={itemData.category} />
              <div className='msg-desc'>
              <p>Bust: {itemData.bust}</p>
              {/* <p>Chest: {itemData.chest}</p> */}
              <p>Waist: {itemData.waist}</p>
              <p>Hips: {itemData.hips}</p>
              <p>Inseam: {itemData.inseam}</p>
              <p>Rate: {itemData.selectedstarcount}</p>
              <p>id {itemData._id}</p>
              </div>
              <div className='btn'>
                <button style={{ background: "#ff4141" }} onClick={() => handleDelete(itemData._id)}>Delete</button>
                <button><Link to={`/womenedititem/${itemData._id}`} style={{ background: "#007BFF", color:"#fff", textDecoration:"none"}} onClick={(itemData._id)} > Edit</Link></button>
              </div>
            </div>
          ))}
      </div>
      {/* <button onClick={categoryDisplay}>Category Check</button> */}
      <div >
      
    </div>

    </div>
  );
 
};


export default WomenDashboard;





