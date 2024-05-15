import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Akpadalong from "./components/Akpada/Akpadalong";
import Senatorlong from "./components/Senator/Senatorlong";
import Senatorshort from "./components/Senator/Senatorshort";
import Landing from './components/Landing/Landing';
import OldCodes from './components/OldCodes/OldCodes';
import Casualtop from './components/Casual/Casualtop';
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/senator' element={<Senatorlong />}/>
      <Route path='/akpadalong' element={<Akpadalong />}/>
      {/* <Route path='/oldcodes' element={<OldCodes />}/> */}
      <Route path='/casual' element={<Casualtop />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
