import React, { useState } from 'react';
import './dashboard.css';
import MyRating from '../uploadData/MenUpload';
import MenDashboard from './MenDashboard/MenDashboard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [category, setCategory] =useState()
  return (
    <div className="dashboard">
      <div className="top">
        <div className="card">Senator</div>
        <div className="card">Casual</div>
        <div className="card">Agbada</div>
      </div>
      <hr></hr>
      <div className="bottom">
        <div className="left-pan">
          <div className="profile-info">
            <div className="info-item">Image Name: John Doe</div>
            <div className="info-item">Email: johndoe@example.com</div>
           
            <div>
            <select className='left-pan-select' name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "men"){
          setCategory(option.target.value)
      } else if (option.target.value === "women"){
        setCategory(option.target.value)
      }   
        }}>
        <option > Select your clothe category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

      <button onClick={() => { 
        // Your logic here, if needed
        // For navigation, you typically use the 'history' object from React Router
        // Example: history.push('/upload');
      }}>
        <Link to="/upload" style={{textDecoration: "none", color:"black"}}>Add Men Item</Link>
      </button>
      <button onClick={() => { 
        // Your logic here, if needed
        // For navigation, you typically use the 'history' object from React Router
        // Example: history.push('/upload');
      }}>
        <Link to="/upload" style={{textDecoration: "none", color:"black"}}>Add Women Item</Link>
      </button>
            </div>
          </div>
        </div>
        <div className="right-form">
          <form className="form">
            
            {category === "men" ? <MenDashboard /> : ""}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
