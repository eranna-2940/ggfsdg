import { useNavigate } from 'react-router-dom';
import './App.css'
import pic from './images/logo.png';
import { useState } from 'react';
import Modal from './modal';

function Welcome() {
   const [modal,setModal] = useState(false);
  //  const toggleModal =()=>{
  //     setModal(!modal)
  //  }
  const history = useNavigate()
  // const handleclick=()=>{
  //       history('/License')
  // }

   const totalclick=()=>{
        
       if(document.getElementById('option1').checked === true){
             history('/License')
       }else if(document.getElementById('option2').checked === true){
          setModal(!modal)
       }

   }

  return (
    <div className="App">
          <div className='maincontent'>
          <div className='nav1'>
              <div className="navlistmain">
              <h1>Welcome</h1>
              <span className='navlist count'>1</span> 
              </div>
              <div className='footer'>
                    <a className='footer-head'  href='##'>
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 500 500" role="presentation" class="oxd-icon orangehrm-installer-guide-icon" data-v-013b3fcc="" data-v-e21cb1c6=""><g fill="currentColor"><path d="M 101.867 390.332 L 452.705 390.332 C 465.648 390.332 476.095 379.886 476.095 366.942 L 476.095 23.905 C 476.095 10.966 465.648 0.515 452.705 0.515 L 101.867 0.515 C 58.833 0.515 23.904 35.444 23.904 78.478 L 23.904 421.515 C 23.904 464.549 58.833 499.478 101.867 499.478 L 452.705 499.485 C 465.648 499.485 476.095 489.038 476.095 476.095 C 476.095 463.152 465.648 452.705 452.705 452.705 L 101.867 452.705 C 84.715 452.705 70.681 438.671 70.681 421.52 C 70.681 404.368 84.712 390.334 101.867 390.334 L 101.867 390.332 Z M 266.526 313.306 C 262.159 317.673 256.08 320.166 250 320.166 C 243.92 320.166 237.837 317.669 233.473 313.306 C 229.106 308.939 226.61 303.014 226.61 296.776 C 226.61 290.696 229.106 284.612 233.47 280.249 C 242.201 271.518 257.795 271.518 266.526 280.249 C 270.894 284.616 273.386 290.696 273.386 296.776 C 273.39 303.014 270.894 308.939 266.526 313.306 Z M 204.935 87.054 C 220.841 73.8 241.889 68.186 262.473 71.773 C 290.852 76.761 314.087 99.996 319.075 128.375 C 324.219 158.156 310.188 187.785 283.836 202.284 C 277.442 205.871 273.389 213.823 273.389 222.868 L 273.389 226.61 C 273.389 239.553 262.942 250 249.999 250 C 237.056 250 226.609 239.553 226.609 226.61 L 226.609 222.868 C 226.609 196.67 239.863 173.125 261.226 161.431 C 268.086 157.689 275.104 148.802 272.919 136.484 C 271.359 127.283 263.563 119.488 254.521 117.927 C 247.192 116.525 240.332 118.393 235.029 122.915 C 229.729 127.438 226.609 133.983 226.609 140.846 C 226.609 153.79 216.162 164.237 203.219 164.237 C 190.275 164.237 179.828 153.79 179.828 140.846 C 179.831 120.108 189.032 100.46 204.935 87.051 L 204.935 87.054 Z" data-v-013b3fcc=""></path></g></svg>
                      Installation Guide</a>
                    <br/>
                     <p className='fhrm1'>OrangeHRM OS 5.3</p>
                     <p className='fhrm2'>&copy; 2005 - 2023
                      <a href='##'>OrangeHRM, Inc</a>
                      All  rights reserved.
                     </p>
                     <br/>
              </div>
          </div>
              
           
    
          <div className='midd-content'>
                <div className='header-img'>

                   <img src={pic} alt='' width='280' />

               </div>
            <div className='content'>
               <h5 className='hrmorange'> Welcome to OrangeHRM Starter Version 5.3 Setup Wizard </h5>
              <p className='cpara1'>This setup wizard will guide through the steps necessary to install/ upgrade OrangeHRM Starter components and their dependencies</p>
              <br/>
              <p className='cpara2'>Select an installation type:</p>
              
          <div className='datainputs'>
          <div>    
                     <label className="datalabel">
                     <input type="radio" value="install" id='option1'  defaultChecked name="option" />
                    <span className="dataspan">Fresh Installation</span>
                    </label></div>

              <p className='inputp'>Choose this option if you are installing OrangeHRM Starter for the first time </p>
              <div>    
                     <label className="datalabel">
                     <input type="radio" value="upgrade" id='option2' name="option" />
                    <span className="dataspan">Upgrading an Existing Installation</span>
                    </label></div>
            
              <p className='inputp'>Choose this option if you are already using a prior version of OrangeHRM Starter(version 4.0 onwards) and would like to upgrade to<b> version  5.3</b></p>
          </div>
            <p className='fpara'>Click  <b>Next</b>  to continue</p>
            <div className='main-button'>
           <button className='button-data btn btn-success' onClick={totalclick}>Next</button>
           
          <div>
             {/* <button onClick={toggleModal}>get</button> */}
             
             {modal && ( <Modal close={totalclick}/> )}
              

          </div>
            </div>
            </div>
          </div>
          </div>
        </div>
  );
}

export default Welcome;
