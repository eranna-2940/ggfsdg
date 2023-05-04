import React, { useState } from "react";
import pic from './images/logo.png';
import './App.css';
import { useNavigate } from "react-router-dom";

const DatabaseConfiguration =()=>{
    const [visible,setVisibel] = useState(true)
    const history = useNavigate()
  
   
   const handlclick=()=>{
        history('/License')
   }
  const nextclick=()=>{
     history('/Systemcheck')
  }
    return(
        <div className="App">
        <div className="maincontent">

            <div className="nav1">
              <h1>Welcome</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>License Acceptance</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Database Configuration</h1>
              <span className="navlist count">3</span> 
              <h1>System Check</h1>
              <span className="remlist count">4</span> 
              <h1>Instance Creation</h1>
              <span className="remlist count">5</span> 
              <h1>Admin User Creation</h1>
              <span className="remlist count">6</span> 
              <h1>Confirmation</h1>
              <span className="remlist count">7</span> 
              <h1>Installation</h1>
              <span className="remlist count">8</span> 
              <h1>Installation Complete</h1>
              <span className="remlist count">9</span> 
              <div className='footer'>
                     <p className='fhrm1'>OrangeHRM OS 5.3</p>
                     <p className='fhrm2'>&copy; 2005 - 2023
                      <a href='https://www.orangehrm.com/'>OrangeHRM, Inc</a>
                      All  rights reserved.
                     </p>
                     <br/>
              </div>
              </div>
              <div className='midd-content'>
          <div>
                <div className='header-img'>
                   <img src={pic} alt='' width='280' />
               </div>
            <div className='content'>
               <h5 className='hrmorange'>Database Configuration</h5>
              <p className='cpara1'>Please enter your database configuration information below. If you are unsure of what to fill in, we suggest that you use the default values.</p>
              <br/>
              <form>
                <div className="datainputs">
                    <p className="fpara">Select Database to Use</p>
                    <div>
                        <label className="datalabel">
                     <input type="radio" value="new" onClick={()=>setVisibel(true)} defaultChecked name="option" />
                    <span className="dataspan">New Database</span>
                    </label></div>
                    <div>
                        <label className="datalabel">
                     <input type="radio" value="new" onClick={()=>setVisibel(false)}  name="option" />
                    <span className="dataspan"> Existing Empty Database</span>
                   </label></div>
                   </div>
                   <div className="datamain">

                <div className="datalist">
                    <div className="left">
                        <label>Database Host Name</label>
                        <input  type="text" name="name" className="host" /> 
                    </div>
                    <div className="left">
                        <label>Database Host Port</label>
                        <input type="text" name="name" className="port" value={3306} />
                    </div>
                </div>

                <div className="datalist">
                    <div className="left">
                      <label >Database Name*</label>
                      <input  type="text" name="name" className="host"  /> 
                    </div>
                    
                    <div className="left">
                        {visible &&
                      <>
                      <label className="datalabel2">
                      <input type="checkbox" /><span className="dataspan2">Use the same Database User for OrangeHRM</span>
                      </label>
                      </>
                       }
                    </div>
               
                   </div>
                    <div className="datalist">
                   
                        {visible &&
                        <>
                         <div className="left">
                        <label>Privileged Database Username*</label><input type="text" name="name" className="host" />
                        </div>
                        <div className="left">
                        <label>Privileged Database User Password</label><input type="text" name="name" className="host" /> 
                        </div>
                        </>
                        }
                    
                    <div className="left">
                        <label>OrangeHRM Database Username</label>
                        <input  type="text" name="name" className="host" /> 
                    </div>
                    <div className="left">
                        <label>OrangeHRM Database User Password</label>
                        <input  type="text" name="name" className="host" /> 
                    </div>
                   
                </div>
                <div className="left">
                      <label className="datalabel3">
                      <input type="checkbox"  /><span className="dataspan3">Enable Data Encryption</span>
                      </label>
                    </div>
               

             </div>

                 
                  </form>

                  <p className='fpara'>Click  <b>Next</b>  to continue</p><br/>
                  <p className='fpara'>Required*</p>
          </div>
            
            <div className='main-button'>
           <button className='button-data1' onClick={handlclick} >back</button>
           <button className='button-data' onClick={nextclick}>Next</button>
            </div>
            </div>
            </div>
          </div>
          </div>
    )
}

export default DatabaseConfiguration;