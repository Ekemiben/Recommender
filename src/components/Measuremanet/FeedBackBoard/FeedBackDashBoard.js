import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import './feedback.css'; // Import your CSS file
// import { Link } from 'react-router-dom';

const FeedBackDashBoard = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async () => {
        try {
          const response = await axios.get(`${baseURL}/getallFeedBack/`);
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const handleDelete = async (id) => {
        try {
          await axios.delete(`${baseURL}/deletefeedback/${id}`);
          setItems(items.filter(item => item._id !== id));
        // setItems(prevItems => prevItems.filter(item => item.id !== id));
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
    <div className='feedback-form-two'>
        {items.map((item, index)=>(
            <div key={item._id}  className='customer-details'>
                <p>Customer Name: <span>{item.name}</span> </p>
                <p>Customer Location: <span>{item.location}</span> </p>
                <p>Customer Email: <span>{item.email}</span> </p>
                <p>Customer Phone Number: <span>{item.phone}</span></p>
                <p>Description:<span>{item.description}</span></p>
                <p>Remark: <span>{item.selectedstarcount}</span></p>
                <br></br>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
            
            
        ))}
    </div>
  )
}

export default FeedBackDashBoard
