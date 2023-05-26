import { useNavigate } from 'react-router-dom';
import './App.css'
import pic from './images/logo.png';



function Systemcheck2() {
   const history = useNavigate()
   const handleclick=()=>{
        history('/Databaseinf')
   }

   const nextclick=()=>{
        history('/Version')
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
              <span className="navlist count">3</span> 
              <h1>Version Details</h1>
              <span className="remlist count">4</span> 
              <h1>Upgrade</h1>
              <span className="remlist count">5</span> 
              <h1>Completion</h1>
              <span className="remlist count">6</span> 
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
                <div className='header-img'>
                   <img src={pic} alt='' width='280' />
               </div>
            <div className='content'>
               <h5 className='hrmorange'>System Check </h5>
              <p className='cpara1'>In order for your OrangeHRM installation to function properly, please ensure that all of the system check items listed below are green. If any are red, please take the necessary steps to fix them.</p>
              <br/>
             <div className='systemcheck'>
              <h5>Environment</h5>
              <hr/>
                <p>PHP version <span>OK (ver 8.2.4)</span></p>
                <p>MYSQL Client<span>OK</span></p>
                <p>MYSQL Server<span>OK (5.7.41-log)</span></p>
                <p>MYSQL InnoDB Support<span>Default</span></p>
                <p>Web Server<span>OK(ver Apache/2.4.56 (Win64) OpenSSL/1.1.1t PHP/8.2.4)</span></p>
              <h5>Permissions</h5>
              <hr/>
               <p>Write Permissions for “lib/confs”<span>Writeable</span></p>
                <p>Write Permissions for “src/cache”<span>Writeable</span></p>
                <p>Write Permissions for “src/log”<span>Writeable</span></p>
                <p>Write Permissions for “lib/confs/cryptokeys”<span>Writeable</span></p>
              <h5>Extensions</h5>
              <hr/>
              <p>Maximum Session idle time before timeout<span>Good(24 minutes and 0 seconds)</span></p>
               <p>Register Global turned-off<span>OK</span></p>       
               <p>Memory Allocated for PHP script<span>OK</span></p>           
               <p>cURL Status<span>Enabled</span></p>       
               <p>SimpleXML status<span>Enabled</span></p>       
               <p>Zip extension status<span className='disabled'>Disabled</span></p>       
               <p>Intl extension status<span  className='green'>Disabled</span></p>       
               <p >GD extension status<span  className='green'>Disabled</span></p>  
               <p >LDAP extension status<span className='disabled'>Disabled</span></p>     
                          
                          
                          
             </div>

             <div className='main-button'>
             <button className='button-data1' onClick={handleclick} >back</button>
             <button className='button-data1'>Recheck</button>
           <button className='button-data' onClick={nextclick}>Next</button>
            </div>

            </div>


          </div>
          </div>
  );
}

export default Systemcheck2;
