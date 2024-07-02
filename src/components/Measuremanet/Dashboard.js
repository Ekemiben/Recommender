import React, { useState } from 'react';
import './dashboard.css';
import MyRating from '../uploadData/MenUpload';
import MenDashboard from './MenDashboard/MenDashboard';
import { Link } from 'react-router-dom';
import WomenDashboard from './WomenDashboard/WomenDashboard';


const Dashboard = (props) => {
  const [childData, setChilData] = useState("")
    const [category, setCategory] =useState()

    const relaodFunct = (e)=>{
      e.preventDefault()
    }
    // const handleChildData = (data)=>{
    //   setCategory(data)
    // }
  return (
    <div className="dashboard">
      <form onChange={relaodFunct}>

      
      <div className="top">
        <div className="card">Senator
          {/* {props.senator} */}
        </div>
        <div className="card">Casual</div>
        <div className="card">Agbada</div>
      </div>
      {/* <WomenDashboard onSendData = {handleChildData}/> */}
      <hr></hr>
      <div className="bottom">
        <div className="left-pan">
          <div className="profile-info">
            <div className="info-item">Name: Admin</div>
            <div className="info-item">Email: admin@gmail.com</div>
           
            <div>
            <select className='left-pan-select' name="Your cloth material" id="Your cloth material" onChange={(option)=>{ 
        if(option.target.value === "men"){
          setCategory(option.target.value)
      } else if (option.target.value === "women"){
        setCategory(option.target.value)
      }   
        }} style={{borderRadius:"5px", height:"40px"}}>
        <option > Select your clothe category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

      <button onClick={() => { 
        // Your logic here, if needed
        // For navigation, you typically use the 'history' object from React Router
        // Example: history.push('/upload');
      }}>
        <Link to="/upload" style={{textDecoration: "none", color:"white"}}>Add Men Item</Link>
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => { 
        // Your logic here, if needed
        // For navigation, you typically use the 'history' object from React Router
        // Example: history.push('/upload');
      }}>
        <Link to="/womenupload" style={{textDecoration: "none", color:"white"}}>Add Women Item</Link>
      </button>
            </div>
          </div>
        </div>
        <div className="right-form">
          <form className="form">
            
            {category === "men" ? <MenDashboard /> : <WomenDashboard />}
            
          </form>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Dashboard;
