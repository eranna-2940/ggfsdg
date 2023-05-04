import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import License from './License';
import Welcome from './welcome';
import DatabaseConfiguration from './DatabaseConfiguration';
import Systemcheck from './Systemcheck';


function App() {
 
  return (
   
        <div>
           <BrowserRouter>
       <Routes>
           <Route path='/' element={<Welcome/>} />
           <Route path='/License' element={<License/>}/>
           <Route path='/DatabaseConfiguration' element={<DatabaseConfiguration/>}/>
           <Route path='/DatabaseConfiguration' element={<DatabaseConfiguration/>}/>
           <Route path='/Systemcheck' element={<Systemcheck/>}/>
       </Routes>
       </BrowserRouter>
        </div>


  )
}

export default App;
