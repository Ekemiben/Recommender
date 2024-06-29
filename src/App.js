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


function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path = '/upload' element={<UploadForm />}/>
          <Route path = '/upload' element={< BMSG/>}/>
          <Route path = '/upload' element={<Dashboard/>}/> */}
          {/* <Route path='/' element={<Landing />}/> */}
          <Route path='/' element={<Landing />}/>
          <Route path='/men' element={<BMSG />}/>
           <Route path='/women' element={<WomenRetrieveInfo />}/>
         {/* <Route path='/kids' element={<BMSG />}/> */}
          <Route path='/loginsignup' element={<LoginSignup />}/>
          <Route path='/feedback' element={<Feedback />}/>
          
          <Route exact path='/upload' element={<UploadForm />} />
          <Route path='/womenupload' element={<FemaleUpload />} />
          
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/womenedititem/:id' element={<WomenEdit />}/>
          <Route path='/womendashboard' element={<WomenDashboard />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;


// import { BrowserRouter } from 'react-router-dom';
// import { AuthWrapper } from './auth/Authswrapper';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <AuthWrapper />
//       </BrowserRouter>      
//     </div>
//   );
// }

// export default App;

