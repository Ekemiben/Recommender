import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Women from "./components/Akpada/Women";
import Senatorlong from "./components/Senator/Senatorlong";
import Landing from './components/Landing/Landing';
import Kids from './components/Casual/Kidsteen';
import Navbar from './components/Navbar/Navbar'
import UploadForm from './components/uploadData/UploadForm';
import BMSG from './components/Measuremanet/BMSG';



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
      <Route path='/upload' element={<UploadForm />}/>
      <Route path='/retrieve' element={<BMSG />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
