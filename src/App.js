import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Women from "./components/Akpada/Women";
import Senatorlong from "./components/Senator/Senatorlong";
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar'
import UploadForm from './components/uploadData/UploadForm';
import BMSG from './components/Measuremanet/RetrieveInfo';
import LoginSignup from './components/LogingSignup/LoginSignup';
import Dashboard from './components/Measuremanet/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/men' element={<Senatorlong />}/>
          <Route path='/women' element={<Women />}/>
          <Route path='/kids' element={<BMSG />}/>
          <Route path='/loginsignup' element={<LoginSignup />}/>
          
          <Route exact path='/upload' element={<UploadForm />} />
          <Route path='/retrieve' element={<BMSG />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
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

