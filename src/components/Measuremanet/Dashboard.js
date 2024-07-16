import React, { useEffect, useState } from 'react';
import './dashboard.css';
import MyRating from '../uploadData/MenUpload';
import MenDashboard from './MenDashboard/MenDashboard';
import { Link } from 'react-router-dom';
import WomenDashboard from './WomenDashboard/WomenDashboard';
import FeedBackDashBoard from './FeedBackBoard/FeedBackDashBoard';
import axios from 'axios';
import { baseURL } from '../../utils/constant';


const Dashboard = (props) => {
  const [childData, setChilData] = useState("")
    const [category, setCategory] =useState()
    const [witems, setWitems] = useState()
    const [senator, setSenator] = useState()
    const [casual, setCasual] = useState();
    const [agbada, setAgbada] = useState()
    const [items, setItems] = useState()

    const relaodFunct = (e)=>{
      e.preventDefault()
    }
    // const handleChildData = (data)=>{
    //   setCategory(data)
    // }


    // Women statistics
    useEffect(() => {
      fetchWomenData();
      fetchMenData()
    }, []);
  
    const fetchWomenData = async () => {
      try {
        const response = await axios.get(`${baseURL}/getallWomenItem/`);
        setWitems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchMenData = async () => {
      try {
        const response = await axios.get(`${baseURL}/getallSavedItem/`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const womenCatStatistic = (e) => {
      // e.preventDefault()
      // Initialize counters for each category
      let senatorCount = 0;
      let casualCount = 0;
      let agbadaCount = 0;
    
      // Iterate through each item in the items array
      witems.forEach(witem => {
        // Check the category of each item and increment the respective counter
        switch (witem.category) {
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
        console.log(witem)
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
    const menCatStatistic = (e) => {
      // e.preventDefault()
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
    <div className="dashboard">
      <form onChange={relaodFunct}>

      
      <div className="top">
        <div className="card">
        <div>
          <p>{senator}</p>
          </div>
         
          <div>Senator</div>
        </div>
        <div className="card">
          <div>
          <p>{casual}</p>
          </div>
         
          <div>Casual</div>
        
        
        </div>
        <div className="card">
        <div>
          <p>{agbada}</p>
          </div>
         
          <div>Agbada</div>
        </div>
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
          menCatStatistic()
      } else if (option.target.value === "women"){
        setCategory(option.target.value)
        womenCatStatistic()
      }   
        }} style={{borderRadius:"5px", height:"40px"}}>
        <option > Select Gender</option>
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

      {/* <button onClick={categoryDisplay}></button> */}
            </div>
          </div>
        </div>
        <div className="right-form">
          <form className="form">
            
            {category === "men" ? <MenDashboard /> : <WomenDashboard  />   }
            <br></br>
            <br></br>
            <h2>FeedBack Report</h2>
            <hr></hr>
            <FeedBackDashBoard />
            
          </form>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Dashboard;
