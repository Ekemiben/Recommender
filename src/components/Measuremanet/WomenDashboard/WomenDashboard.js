import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import './womendashboard.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import EditItem from '../EditItems/WomenEdit'

// Modal
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// Modal end

const WomenDashboard = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');
  const [imgDisplay, setImgDisplay] = useState([]);


  // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  // End Modal

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
  
  const handleUpdate = (props)=>{
    return (
      <div  >
       {/* {items.map((item, index)=>{
        return(
          <EditItem key={index} id={item._id} category={item.category} burst={item.burst} waist={item.waist} hips={item.hips} inseam={item.inseam} image={item.imgurl} starRate={item.selectedstarcount}  />
          
        )
      
       })}
       
       {window.location="/edititem"} */}
      
      </div>
    )
  }
  



  

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
              <p>Burst: {itemData.bust}</p>
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
    </div>
  );
};

export default WomenDashboard;





