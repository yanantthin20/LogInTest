import React from "react";
import dchannel from "./../img/dchannel.png";
import { NavLink } from "react-router-dom";
function Login(props) {
  return (
    <div className="wrap">
      <div className="container">
        <div className="login">
          <p className="orange none">Login</p>
          <div className="form">
            <div className="login-icon text-center">
              <img src={dchannel} alt="dchannel" />
            </div>
            <input type="text" name="" placeholder="User Name" required />
            <input type="password" name="" placeholder="Password" required />
            <button className="btn-com mt-3">
              <NavLink exact to="/login">
                LOGIN
              </NavLink>
            </button>
            <button className="btn-com mt-3">
              <NavLink exact to="/Register">
                Register
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
