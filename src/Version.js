import { useNavigate } from 'react-router-dom';
import './App.css'
import pic from './images/image002.gif';
import version from './version.json'


function Version() {
   const history = useNavigate()
   const handleclick=()=>{
        history('/Systemcheck2')
   }

   const nextclick=()=>{
        history('/Upgrade')
   }

  return (
    
  
          <div className='maincontent'>
            <div className="nav1">
            <div className="navlistmain">
              <h1>Welcome</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Database Information</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>System Check</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Version Details</h1>
              <span className="navlist count">4</span> 
              <h1>Upgrade</h1>
              <span className="remlist count">5</span> 
              <h1>Completion</h1>
              <span className="remlist count">6</span> 
              </div>
              <div className='footer'>
                     <p className='fhrm1'>InfoHRM OS 5.3</p>
                     <p className='fhrm2'>&copy; 2005 - 2023
                      <a href='https://www.orangehrm.com/'>InfoHRM, Inc</a>
                      All  rights reserved.
                     </p>
                     <br/>
              </div>

              </div>
          <div className='midd-content'>
                <div className='header-img'>
                   <img src={pic} alt='' />
               </div>
            <div className='content'>
               <h5 className='hrmorange'>Current Version Details</h5>
              <p className='cpara1'>Select your current InfoHRM version here.You can find the version at the bottom of the InfoHRM login page.InfoHRM Upgrader only supports versions listed in the drpdown.Selecting a different version would lead to an upgrade failure and a database corruption.</p>
              <br/>
              <div className="datalist1">
              <div className="left">
              
             
                <label>Current InfoHRM Version*</label>
                <select
                  className='versions'
                >
                  <option value="">--Select--</option>
                 {
                    version.map(e=>(
                        <option>{e.Version}</option>
                    ))
                 }
                </select>
                </div><br/>
                <p className='fpara'>Click  <b>Next</b>  to commence upgrading your instance</p><br/>
                  <p className='fpara'>Required*</p>
              </div>
            </div>
            
             <div className='main-button'>
             <button className='button-data1' onClick={handleclick} >back</button>
           <button className='button-data' onClick={nextclick}>Next</button>
            </div>

            </div>


          </div>
  );
}

export default Version;
