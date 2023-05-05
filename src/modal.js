import React,{useState}from "react";
import './App.css'

const Modal =({close})=>{
    const [accept,SetAccept] = useState(false);

    const enabled =(e) => {
        SetAccept(e.target.checked)
    }
    return(
        <div className="main-modal">
            
           <div className="content-modal">
          
           <button className="closetick" onClick={close}>x</button>
                  <h6>Warning</h6>
                  <hr/>
                  <p className="mp">The following features and add-ons are not supported by OrangeHRM Starter 
                  version 5.3. You may continue to upgrade your system to version 5.3, but please note that any data used in these features will be inaccessible.</p>
               <div className="tablemodal">
                   <div>
                      <h5>Features</h5>
                      <p>- Social Media Authentication</p>
                      
                   </div>
                   <div>
                      <h5>Add-ons</h5>
                      <p>- Claim</p>
                      <p>- Toggl</p>
                      
                   </div>
                   <div className="lasttable">
                      <h5>Other</h5>
                      <p>- Marketplace</p>
                      <p>- Mobile App</p>
                      
                   </div>

               </div>
               <div className="checkbox">
                <label className="mp">
                   <input type="checkbox" onClick={enabled} ></input>
                   <p > I want to continue upgrading the OrangeHRM system to version 5.3 and I am aware that by doing so, any gathered data in incomplete features/add-ons will be inaccessible.</p>
                </label>


             </div>
             <hr/>
            <div className='main-button'>
           <button className='button-data1' onClick={close}>cancel</button>
           <button className='button-data btn btn-success' disabled={!accept}>Next</button>
            </div>
           </div>
           </div>
    )
}

export default Modal;