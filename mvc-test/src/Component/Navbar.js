import React, { Component } from "react";
import "../CSS/nav.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <button className="home"></button>
        <div className="back-to-home">Back to home</div>
        <div className="login-field">
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
