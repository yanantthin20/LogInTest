import React, { Component } from "react";
import {Route,Switch,NavLink,Redirect,BrowserRouter as Router,BrowserRouter,} from "react-router-dom";
import Login from "./containers/login";
import Register from "./containers/register";
import Home from "./containers/home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact to="/"> Home</NavLink>
            <NavLink exact to="/Login"> Login </NavLink>
            <NavLink exact to="/Register">Register</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
