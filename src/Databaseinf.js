import React from "react";
import pic from './images/image002.gif';
import './App.css';
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const Databaseinf =()=>{
    const history = useNavigate()
    const {register,handleSubmit,formState:{errors},} = useForm()
    const nextclick=()=>{
        history('/')
    }
    const onSubmit=()=>{
        history('/Systemcheck2')
    }

    return(
        <div className="App">
        <div className="maincontent">

            <div className="nav1">
                <div className="navlistmain">
              <h1>Welcome</h1>
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Database Information</h1>
              <span className="navlist count">2</span> 
              <h1>System Check</h1>
              <span className="remlist count">3</span> 
              <h1>Version Details</h1>
              <span className="remlist count">4</span> 
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
          <div>
                <div className='header-img'>
                   <img src={pic} alt='' />
               </div>
            <div className='content'>
               <h5 className='hrmorange'>Database Information</h5><br/>
              <p className='cpara1'>Please provide the database information of the database you are going to upgrade.</p>
              <br/>
              
            <div className="content2">
                <p className="content2p">IMPORTANT</p>
                <div className="content3">
                    <p className="content3p">Make sure it's a copy of the database of your current InfoHRM installation and not the original database. It's highly discouraged to use the original database for upgrading since it won't be recoverable if an error occurred during the upgrade.</p>
                </div>
            </div>
            <br/>
            <div className="content2">
                <p className="content2p">ENCRYPTION</p>
                <div className="content3">
                    <p className="content3p">If you have enabled data encryption in your current version, you need to copy the file 'lib/confs/cryptokeys/key.ohrm' from your current installation to corresponding location in the new version.</p>
                </div>
            </div>
            <div className="datamain">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="datalist">
                    <div className="left">
                        <label>Database Host Name</label>
                        <input  type="text" name="name" className="host"
                          {...register("hostname",{required:'Required'})} 
                          style={{ border: errors.hostname?.message ? '1px solid red' : '' }}
                        
                        /> 
                         <div>
                    {errors.hostname && (<p className="text-danger">{errors.hostname.message}</p>)}
                    </div>
                    </div>
                    <div className="left">
                        <label>Database Host Port</label>
                        <input type="text" name="name" className="host port" value={3306} />
                    </div>
                </div>
                <div className="datalist">
                    <div className="left">
                      <label >Database Name*</label>
                      <input  type="text" name="name" className="host"
                      {...register("hostdbname",{required:'Required'})} 
                      style={{ border: errors.hostdbname?.message ? '1px solid red' : '' }}
                      
                      /> 
                       <div>
                    {errors.hostdbname && (<p className="text-danger">{errors.hostdbname.message}</p>)}
                    </div>
                    </div>
                    </div>

                <div className="datalist">
                <div className="left">
                        <label>Database Username</label>
                        <input  type="text" name="name" className="host" 
                           {...register("hostusername",{required:'Required'})} 
                           style={{ border: errors.hostusername?.message ? '1px solid red' : '' }}
                        /> 
                          <div>
                    {errors.hostusername && (<p className="text-danger">{errors.hostusername.message}</p>)}
                    </div>
                    </div>
                    <div className="left">
                        <label>Database User Password</label>
                        <input  type="text" name="name" className="host" /> 
                    </div>

                    </div>    
                    <br/>
                    <p className='fpara'>Click  <b>Next</b>  to continue</p><br/>
                  <p className='fpara'>Required*</p>
                  <div className='main-button'>
           <button className='button-data1' onClick={nextclick}  >back</button>
           <button className='button-data btn btn-success'>Next</button>
            </div>
            </form>
            </div>

          </div>
            
           
            </div>
            </div>
          </div>
          </div>
    )
}

export default  Databaseinf;