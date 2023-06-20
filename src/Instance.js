import { useNavigate } from "react-router-dom";
import "./App.css";
import pic from './images/image002.gif';
import { useEffect, useState } from "react";
import time from "./timezone.json";
import { useForm } from "react-hook-form";

function Instance() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);

  const history = useNavigate();

  const backclick = () => {
    history("/Systemcheck");
  };
  //  const handleclick=()=>{
  //       const name = document.getElementById('name').value;
  //       const select = document.getElementById('select').value;
  //       if(name!==""&& select!==""){
  //          history("/Adminuser")
  //       }
  //  }
  const onSubmit = () => {
    history("/Adminuser");
  };

  // countrienameapis\
  // https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        //  console.log(data)
      });
  }, []);
  time.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
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
        <span className="navlist count">5</span>
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
            <a href="https://www.orangehrm.com/">InfoHRM, Inc</a>
            All rights reserved.
          </p>
          <br />
        </div>
      </div>
      <div className="midd-content">
        <div className="header-img">
          <img src={pic} alt=""  />
        </div>
        <div className="content">
          <h5 className="hrmorange">Instance Creation</h5>
          <p className="cpara1">
            Fill in your organization details here. Details entered in this
            section will be captured to create your InfoHRM Instance
          </p>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="datalist1">
              <div className="left">
                <label>Organization Name*</label>
                <input
                  type="text"
                  className="host"
                  {...register("name2", { required: "Required" })}
                  style={{
                    border: errors.name2?.message ? "1px solid red" : "",
                  }}
                />
                <div>
                  {errors.name2 && (
                    <p className="text-danger">{errors.name2.message}</p>
                  )}
                </div>
                <label>Country</label>
                <select
                  name="countries"
                  {...register("country", { required: "Required" })}
                  style={{
                    border: errors.country?.message ? "1px solid red" : "",
                  }}
                >
                  <option value="">--Select--</option>
                  {users.map((items) => (
                    <option key={items.id}>{items.name.common}</option>
                  ))}
                </select>
                <div>
                  {errors.country && (
                    <p className="text-danger">{errors.country.message}</p>
                  )}
                </div>
                <label>Language</label>
                <select name="language">
                  <option>--Select--</option>
                  <option>
                    Chinese (Simplified, China) - 中文（简体，中国
                  </option>
                  <option>
                    Chinese (Traditional, Taiwan) - 中文（繁體，台灣
                  </option>
                  <option>Dutch - Nederlands</option>
                  <option>English (United States)</option>
                  <option>French - Français</option>
                  <option>German - Deutsch</option>
                  <option>Spanish - Español</option>
                  <option>Spanish (Costa Rica) - Español (Costa Rica)</option>
                </select>
                <label>Timezone</label>
                <select name="countries">
                  <option>--Select--</option>
                  {time.map((items) => (
                    <option>{items.name}</option>
                  ))}
                </select>
                <br />
                <p className="req">Required*</p>
                <div className="main-button">
                  <button className="button-data1" onClick={backclick}>
                    back
                  </button>
                  <button className="button-data">Next</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Instance;
