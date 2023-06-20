import React from "react";
import pic from './images/image002.gif';
import "./App.css";
import { useNavigate } from "react-router-dom";

const Installation = () => {
  const history = useNavigate()

     const nextclick=()=>{
        history('/Installationcomplete')
     }

  return (
    <div className="App">
      <div className="maincontent">
       
        <div className="nav1">
        <div className="navlistmain">
          <h1>Welcome</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>License Acceptance</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>Database Configuration</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>System Check</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>Instance Creation</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>Admin User Creation</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>Confirmation</h1>
          <span className="success count">
            <i class="bi bi-check"></i>
          </span>
          <h1>Installation</h1>
          <span className="navlist count">8</span>
          <h1>Installation Complete</h1>
          <span className="remlist count">9</span>
          </div>
          <div className="footer">
            <p className="fhrm1">InfoHRM OS 5.3</p>
            <p className="fhrm2">
              &copy; 2005 - 2023
              <a href="https://www.orangehrm.com/">InfoHRM, Inc</a>
              All rights reserved.
            </p>
            <br />
          </div>
        </div>
        <div className="midd-content">
          <div>
            <div className="header-img">
              <img src={pic} alt=""/>
            </div>
            <div className="content">
              <h5 className="hrmorange">Installation</h5>

              <div className="install">
                <div><p>Database creation</p><i class="bi bi-check  count count2"></i></div>
                <div><p>Checking database permissions </p><i class="bi bi-check  count count2"></i></div>
               <div> <p>Applying database changes </p><i class="bi bi-check  count count2"></i></div>
               <div> <p>Instance and Admin user creation </p><i class="bi bi-check  count count2"></i></div>
               <div> <p>Create InfoHRM database user</p><i class="bi bi-check  count count2"></i></div>
               <div>  <p>Creating configuration files</p><i class="bi bi-check  count count2"></i></div>
              </div>
              <br />
                      <div class="progress" style={{height:"30px"}}>
                  <div class="progress-bar" role="progressbar" aria-label="Example with label" style={{"width": "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
            
            </div>

            <div className="main-button">
              <button className="button-data installbtn" onClick={nextclick}>
                Clean up install
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
