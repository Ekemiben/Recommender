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
import PrivateRoute from './components/LogingSignup/PrivateRoute';
import EditItem from "./components/Measuremanet/EditItems/EditItem"
import FemaleUpload from './components/uploadData/FemaleUpload';


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
          {/* <Route path='/' element={<Senatorlong />}/> */}
          <Route path='/' element={<BMSG />}/>
          {/* <Route path='/women' element={<Women />}/>
          <Route path='/kids' element={<BMSG />}/> */}
          <Route path='/loginsignup' element={<LoginSignup />}/>
          
          <Route exact path='/upload' element={<UploadForm />} />
          <Route path='/womenupload' element={<FemaleUpload />} />
          
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/edititem' element={<EditItem />}/>
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

