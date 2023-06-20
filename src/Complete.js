import React from "react";
import pic from './images/image002.gif';
import './App.css';
import { useNavigate } from "react-router-dom";

const Complete =()=>{
  
const history = useNavigate()
const handleclick=()=>{
    history('/')
}
    return(
        <div className="App">
        <div className="maincontent">
           
            <div className="nav1">
            <div className="navlistmain">
              <h1>Welcome</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Database Information</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>System Check</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Version Details</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Upgrade</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Completion</h1>
              <span className="navlist count">6</span> 
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
          <div>
                <div className='header-img'>
                   <img src={pic} alt='' />
               </div>
            <div className='content'>
               <h5 className='hrmorange'>Upgrade Complete</h5> <br/>
               <h4 className="upgrade">You have successfully upgraded to InfoHRM Starter version 5.1</h4>
            </div>
            
            <div className='main-button'>
           <button className='button-data installbtn1'  onClick={handleclick} >Lauch Info HRM</button>
            </div>
            </div>
            </div>
          </div>
          </div>
    )
}

export default Complete;