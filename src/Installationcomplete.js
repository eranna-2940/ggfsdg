import React from "react";
import pic from './images/logo.png';
import './App.css';
import { useNavigate } from "react-router-dom";

const Installationcomplete =()=>{
  
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
              <h1>License Acceptance</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Database Configuration</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>System Check</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Instance Creation</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Admin User Creation</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Confirmation</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Installation</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Installation Complete</h1>
              <span className="navlist count">9</span> 
              </div>
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
               <h5 className='hrmorange'>Installation Complete</h5> <br/>
               <h4>OrangeHRM Starter Version 5.0 has been successfuly Installed.</h4>
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

export default Installationcomplete;