import { useNavigate } from 'react-router-dom';
import './App.css'
import pic from './images/logo.png';



function Upgrade() {
   const history = useNavigate()

   const nextclick=()=>{
        history('/Complete')
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
              <span className="success count"><i class="bi bi-check"></i></span> 
              <h1>Upgrade</h1>
              <span className="navlist count">5</span> 
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
               <div className="content">
              <h5 className="hrmorange">Upgrading InfoHRM</h5><br/>
                <p className="cpara1">This may take some time.Please do not close the window till progress becomes 100%</p>
             <br/>
              <div className="install">
                <div><p>Applying database changes</p><i class="bi bi-check  count count2"></i></div>
                <div><p>Creating configuration files</p><i class="bi bi-check  count count2"></i></div>
                
              </div>
              <br />
              <div class="progress" style={{height:"30px"}}>
                  <div class="progress-bar" role="progressbar" aria-label="Example with label" style={{"width": "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>

            </div>
            <div className="main-button">
              <button className="button-data " onClick={nextclick}>
                Next
              </button>
          </div>
          </div>
          </div>
  );
}

export default Upgrade;
