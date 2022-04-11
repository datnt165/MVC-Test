import React, { Component } from "react";
import "../CSS/nav.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <button className="home"></button>
        <div className="back-to-home">Back to home</div>
      </div>
    );
  }
}

export default Navbar;
