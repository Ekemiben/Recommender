import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Women from "./components/Akpada/Women";
import Senatorlong from "./components/Senator/Senatorlong";
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar'
import UploadForm from './components/uploadData/UploadForm';
import BMSG from './components/Measuremanet/Retrieve/RetrieveInfo';
import LoginSignup from './components/LogingSignup/LoginSignup';
import Dashboard from './components/Measuremanet/Dashboard';
import EditItem from "./components/Measuremanet/EditItems/WomenEdit"
import FemaleUpload from './components/uploadData/FemaleUpload';
import WomenRetrieveInfo from './components/Measuremanet/Retrieve/WomenRetrieve';
import Footer from './components/Footer/Footer';
import WomenDashboard from './components/Measuremanet/WomenDashboard/WomenDashboard';
import WomenEdit from './components/Measuremanet/EditItems/WomenEdit';
import Feedback from './components/Feedback/Feedback';
import MenEdit from './components/Measuremanet/EditItems/MenEdit';
import FeedBackDashBoard from './components/Measuremanet/FeedBackBoard/FeedBackDashBoard';


function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path='/' element={<Landing />}/>
          <Route path='/men' element={<BMSG />}/>
           <Route path='/women' element={<WomenRetrieveInfo />}/>
 
          <Route path='/loginsignup' element={<LoginSignup />}/>
          <Route path='/feedback' element={<Feedback />}/>
          
          <Route exact path='/upload' element={<UploadForm />} />
          <Route path='/womenupload' element={<FemaleUpload />} />
          
          <Route path='/dashboard' element={<Dashboard />}/>
          {/* <Route path='/menedit' element={<MenEdit />}/> */}
          <Route path='/menedit/:id' element={<MenEdit />}/>
          <Route path='/womenedititem/:id' element={<WomenEdit />}/>
          <Route path='/womendashboard' element={<WomenDashboard />}/>
          <Route path='/womenretrieve' element={<WomenRetrieveInfo />}/>
          <Route path='/feedbackboard' element={<FeedBackDashBoard />}/>


        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;



