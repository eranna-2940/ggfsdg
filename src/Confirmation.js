import React from "react";
import pic from './images/image002.gif';
import './App.css';
import { useNavigate } from "react-router-dom";

const Confirmation =()=>{
    const history = useNavigate()
   const handlclick=()=>{
        history('/Adminuser')
   }
   const nextclick=()=>{
      history('/Installation')
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
              <span className="navlist count">7</span> 
              <h1>Installation</h1>
              <span className="remlist count">8</span> 
              <h1>Installation Complete</h1>
              <span className="remlist count">9</span> 
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
                   <img src={pic} alt=''/>
               </div>
            <div className='content'>
               <h5 className='hrmorange'>Confirmation</h5>
              <p className='cpara1'>All the information required for InfoHRM installation collected in the earlier steps are given below. On confirmation the installer will create the database, database users, configuration file, etc</p>
              <br/>
              <h5 className="details">Details</h5>
        
           <div className="confirm">
                <h4>Host Name</h4>
                <label>{localStorage.getItem("name")}</label>
                <h4>Database Host Port</h4>
                <label>ravi</label>
                <h4>Database Name</h4>
                <label>ravi</label>
                <h4>Privileged Database Username</h4>
                <label>ravi</label>
                <h4>InfoHRM Admin Username</h4>
                <label>ravi</label>


              
            </div><br/>
           <div className="encrpt">
            <p><span className="enp">Data Encryption</span><br/>
            Data Encryption Is On. Employee Social Security Number, Employee Basic Salary, LDAP Bind User Password Will Be Encrypted.<br/>
               Please backup encryption key located at lib/confs/cryptokeys/key.ohrm</p>
           </div>
           <p className='fpara'>Click  <b>Next</b>  to continue</p><br/>
            </div>
           
            <div className='main-button'>

           <button className='button-data1' onClick={handlclick} >back</button>
           <button className='button-data' onClick={nextclick} >Next</button>
            </div>
            </div>
            </div>
          </div>
          </div>
    )
}

export default Confirmation;