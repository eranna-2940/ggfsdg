import React, { useState } from "react";
import pic from './images/image002.gif';
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Configuration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fieldRegister =  {...register("name", { required: "Required" })} 
  const origOnChange = fieldRegister.onChange
  fieldRegister.onChange = (e) => {
      const res = origOnChange(e)
      const value = e.target.value
      setName(value);
      // do something with value
      return res
  }
  const fieldRegister2 =   {...register("dbname", { required: "Required" })}
  const origOnChange2 = fieldRegister2.onChange
  fieldRegister2.onChange= (e) => {
      const res= origOnChange2(e)
      const value = e.target.value
      setDdname(value);
      // do something with value
      return res
  }
  const result =  {...register("dbuname", { required: "Required" })}
  
  const [visible, setVisibel] = useState(true);
  const [message, setMessage] = useState(true);
  const [accept, setAccept] = useState(false);
  const [name,setName] = useState("");
  const [hostport,setHostport] = useState(3306);
  const [dbname,setDdname]=useState("");
  const [setDduname]=useState("");
  const [setPassword]=useState("");
  const [setDd1name]=useState("");
  const [setPassword2]=useState("");
  const history = useNavigate();
  const handlclick = () => {
    history("/License");
  };
  const onSubmit = () => {
      localStorage.setItem("name", name);
      localStorage.setItem("hostport", hostport);
      localStorage.setItem("dbname", dbname);
      history('/Systemcheck')
    
  }
  const handlechange=(e)=>{
     setDduname(e.target.value)
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
          <span className="navlist count">3</span>
          <h1>System Check</h1>
          <span className="remlist count">4</span>
          <h1>Instance Creation</h1>
          <span className="remlist count">5</span>
          <h1>Admin User Creation</h1>
          <span className="remlist count">6</span>
          <h1>Confirmation</h1>
          <span className="remlist count">7</span>
          <h1>Installation</h1>
          <span className="remlist count">8</span>
          <h1>Installation Complete</h1>
          <span className="remlist count">9</span>
          </div>
          <div className="footer">
            <p className="fhrm1">InfoHRM OS 5.3</p>
            <p className="fhrm2">
              &copy; 2005 - 2023
              <a href="##">InfoHRM, Inc</a>
              All rights reserved.
            </p>
            <br />
          </div>
        </div>
        <div className="midd-content">
          <div>
            <div className="header-img">
              <img src={pic} alt=""  />
            </div>
            <div className="content">
              <h5 className="hrmorange">Database Configuration</h5>
              <p className="cpara1">
                Please enter your database configuration information below. If
                you are unsure of what to fill in, we suggest that you use the
                default values.
              </p>
              <br />

              <div className="datainputs">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="fpara">Select Database to Use</p>
                  <div>
                    <label className="datalabel">
                      <input
                        type="radio"
                        value="new"
                        onClick={() => setVisibel(true)}
                        defaultChecked
                        name="option"
                      />
                      <span className="dataspan">New Database</span>
                    </label>
                  </div>
                  <div>
                    <label className="datalabel">
                      <input
                        type="radio"
                        value="new"
                        onClick={() => setVisibel(false)}
                        name="option"
                      />
                      <span className="dataspan"> Existing Empty Database</span>
                    </label>
                  </div>

                  <div className="datamain">
                    <div className="datalist">
                      <div className="left">
                        <label>Database Host Name</label>
                        <input
                          type="text"
                          name="name"
                          className="host"
                          {...fieldRegister}
                          // onChange={(e)=>console.log(e.target.value)}
                          // {...register("name", { required: "Required" })} 
                          style={{
                            border: errors.name?.message ? "1px solid red" : "",
                          }}
                          
                        />
                        <div className="">
                          {errors.name && (
                            <p className="text-danger">{errors.name.message}</p>
                          )}
                       
                        </div>
                      </div>
                      <div className="left">
                        <label>Database Host Port</label>
                        <input
                          type="text"
                          name="name"
                          className="host port"
                          value={3306}
                          onChange={(event) => setHostport(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="datalist">
                      <div className="left">
                        <label>Database Name*</label>
                        <input
                          type="text"
                          name="name"
                          className="host"
                          {...fieldRegister2}
                          //  onChange={(e)=>setDdname(e.target.value)}
                          // {...register("dbname", { required: "Required" })}
                          style={{
                            border: errors.dbname?.message
                              ? "1px solid red"
                              : "",
                          }}
                        />
                        <div>
                          {errors.dbname && (
                            <p className="text-danger">
                              {errors.dbname.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="left">
                        {visible && (
                          <>
                            <label className="datalabel2">
                              <input type="checkbox"  onClick={(event) => setAccept(event.target.checked)} 
                                onChange={()=>setMessage(false)}
                              />
                              <span className="dataspan2">
                                Use the same Database User for InfoHRM
                              </span>
                            </label>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="datalist">
                      {visible && (
                        <>
                          <div className="left">
                            <label>Privileged Database Username*<i class="bi bi-info-circle-fill"></i></label>
                            <input
                              type="text"
                              name="name"
                              className="host"
                              // {...register("dbuname", { required: "Required" })}
                              style={{
                                border: errors.dbuname?.message
                                  ? "1px solid red"
                                  : "",
                              }}
                              {...result}
                              onChange={(e) => {
                                result.onChange(e);
                                handlechange(e)
                           }}
                          
                            />
                            <div>
                              {errors.dbuname && (
                                <p className="text-danger">
                                  {errors.dbuname.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="left">
                            <label>Privileged Database User Password</label>
                            <input type="text" name="name"   className="host" 
                            onChange={(e)=>setPassword(e.target.value)}
                            
                            />
                          </div>
                        </>
                      )}
                      <div className="left">
                        <label>InfoHRM Database Username<i class="bi bi-info-circle-fill"></i></label>
                        <input
                          type="text"
                          name="name"
                          id="hostdis"
                         className="host"
                         disabled={accept}
                          {...register("db1name", { required: "Required" },{onChange:(e)=>setDd1name(e.target.value)})}
                          // style={{
                          //   border: errors.db1name?.message
                          //     ? "1px solid red"
                          //     : "",
                          // }}
                         
                        />
                     {message && <div>
                          {errors.db1name && (
                            <p className="text-danger">
                              {errors.db1name.message}
                            </p>
                          )}
                          
                        </div>}
                      </div>
                      <div className="left">
                        <label>InfoHRM Database User Password</label>
                        <input type="text" name="name" className="host"  disabled={accept}
                        onChange={(e)=>setPassword2(e.target.value)}
                        
                        />
                      </div>
                    </div>
                    <div className="left">
                      <label className="datalabel3">
                        <input type="checkbox" />
                        <span className="dataspan3">
                          Enable Data Encryption
                        </span>
                      </label>
                    </div>
                  </div>

                  <p className="fpara">
                    Click <b>Next</b> to continue
                  </p>
                  <br />
                  <p className="fpara">Required*</p>
                  <div className="main-button">
                    <button className="button-data1" onClick={handlclick}>
                      back
                    </button>
                    <button className="button-data">Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
