import React from "react";
import pic from './images/logo.png';
import './App.css';
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const Adminuser=()=>{
    const {register,handleSubmit,formState:{errors},} = useForm()
    const history = useNavigate()
   const handlclick=()=>{
        history('/Instance');
   }

const onSubmit=()=>{
    const password1 = document.getElementById("password").value;   
    const password2 = document.getElementById("cpassword").value;
    if(password1===password2){
        history('/Confirmation')
    }
   
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
              <span className="navlist count">6</span> 
              <h1>Confirmation</h1>
              <span className="remlist count">7</span> 
              <h1>Installation</h1>
              <span className="remlist count">8</span> 
              <h1>Installation Complete</h1>
              <span className="remlist count">9</span> 
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
               <h5 className='hrmorange'>Admin User Creation</h5>
              <p className='cpara1'>Select the name, email address, username and password to create the admin user for your OrangeHRM Instance</p>
              <br/>
             
                        <div className="datainputs">
                    
               <form onSubmit={handleSubmit(onSubmit)}>
    <div className="datamain">

        <div className="datalist">
            <div className="left">
                <label>Employee Name</label>
                <input  type="text" name="fname" className="host"  placeholder="FirstName" 
                {...register("fname",{required:'Required'})} 
                style={{ border: errors.fname?.message ? '1px solid red' : '' }}
                
                /> 
                  <div>
                    {errors.fname && (<p className="text-danger">{errors.fname.message}</p>)}
                    </div>
            </div>
          
            <div className="left">
            <label>&nbsp;</label>
            <input  type="text" name="lname" className="host"  placeholder="LastName" 
            {...register("lname",{required:'Required'})} 
            style={{ border: errors.lname?.message ? '1px solid red' : '' }}
            /> 
             <div>
                    {errors.lname && (<p className="text-danger">{errors.lname.message}</p>)}
                    </div>
            </div>
      
</div>
        <div className="datalist">
            <div className="left">
            <label>Email*</label>
            <input  type="email" name="email" className=" host host1" 
             {...register("email",{required:'Required'})} 
             style={{ border: errors.email?.message ? '1px solid red' : '' }}
            
            /> 
             <div>
                    {errors.email && (<p className="text-danger">{errors.email.message}</p>)}
                    </div>
            </div>  
            <div className="left">
            <label>Contact Number*</label>
            <input  type="number" name="number" className="host"/> 
            </div>
        </div>
            <div className="datalist">
                
                <div className="left">
                <label>Admin Username*</label><input type="text" name="name" className="host" 
                 {...register("admin",{required:'Required'})} 
                 style={{ border: errors.admin?.message ? '1px solid red' : '' }}
                
                />
                   <div>
                    {errors.admin && (<p className="text-danger">{errors.admin.message}</p>)}
                    </div>
                </div>
           </div>
        </div>
        <div className="datalist">
                
                <div className="left">
                <label>Password*</label><input type="password"  id="password" className="host" 
                 {...register("password",{required:'Required'})} 
                 style={{ border: errors.password?.message ? '1px solid red' : '' }}
                
                
                />
                <div>
                    {errors.password && (<p className="text-danger">{errors.password.message}</p>)}
                    </div>
                </div>
                <div className="left">
                <label>Confirm Password*</label><input type="password" id="cpassword"  className="host" 
                 {...register("cpassword",{required:'Required'})} 
                 style={{ border: errors.cpassword?.message ? '1px solid red' : '' }}
                
                />
                  <div>
                    {errors.cpassword && (<p className="text-danger">{errors.cpassword.message}</p>)}
                    </div>
                </div>
           </div>
           <div className="left">
            <label className="datalabel3 label4">
            <input type="checkbox" defaultChecked/><span className="dataspan3">Register your system with OrangeHRM. By registering, You will be eligible for free support via emails, receive security<br/> alerts and news letters from OrangeHRM.</span>
            </label>
              <div className="circledata">
                  <i class="bi bi-info-circle"></i><p>Users who seek access to their data, or who seek to correct, amend, or delete the given information should direct their<br/> requests to data@orangehrm.com</p>
              </div>
           </div>

                        <p className='fpara'>Required*</p>
                        <div className='main-button'>
                <button className='button-data1' onClick={handlclick} >back</button>
                <button className='button-data' >Next</button>
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

export default Adminuser;