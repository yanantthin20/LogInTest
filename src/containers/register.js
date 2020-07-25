import React from "react";
import dchannel from "./../img/dchannel.png";
import { NavLink } from "react-router-dom";
import Login from "./login";

function Register(props) {
  return (
    <div className="wrap">
      <div className="container">
        <div className="login">
          <p className="orange none">Login</p>
          <div className="form">
            <div className="login-icon text-center">
              <img src={dchannel} alt="dchannel" />
            </div>
            <input type="text" name="" placeholder="Name" required />
            <input type="email" name="" placeholder="Email" required />
            <input type="tel" name="" placeholder="Phone" required />
            <input type="text" name="" placeholder="Deliver Address" required />
            <input type="text" name="" placeholder="Shop Name" required />
            <button className="btn-com mt-3">
              <NavLink exact to="/Login">
                SUBMIT
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
