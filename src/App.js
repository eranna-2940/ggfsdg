import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import License from './License';
import Welcome from './welcome';
import Systemcheck from './Systemcheck';
import Databaseinf from './Databaseinf';
import Instance from './Instance';
import Adminuser from './Adminuser';
import Confirmation from './Confirmation';
import Installation from './Installation';
import Configuration from './Configuration';
import Installationcomplete from './Installationcomplete';
import Systemcheck2 from './Systemcheck2';
import Version from './Version';
import Upgrade from './Upgrade';
import Complete from './Complete';



function App() {
 
  return (
   
        <div>
           <BrowserRouter>
       <Routes>
           <Route path='/' element={<Welcome/>} />
           <Route path='/License' element={<License/>}/>
           <Route path='/Databaseinf' element={<Databaseinf/>}/>
           <Route path='/Systemcheck2' element={<Systemcheck2/>}/>
           <Route path='/Upgrade' element={<Upgrade/>}/>
           <Route path='/Complete' element={<Complete/>}/>
           <Route path='/Version' element={<Version/>}/>
           <Route path='/Configuration' element={<Configuration/>}/>
           <Route path='/Systemcheck' element={<Systemcheck/>}/>
           <Route path='/Instance' element={<Instance/>}/>
           <Route path='/Adminuser' element={<Adminuser/>}/>
           <Route path='/Confirmation' element={<Confirmation/>}/>
           <Route path='/Installation' element={<Installation/>}/>
           <Route path='/Installationcomplete' element={<Installationcomplete/>}/>
       </Routes>
       </BrowserRouter>
        </div>


  )
}

export default App;
