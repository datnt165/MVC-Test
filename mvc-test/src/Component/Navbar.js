import React, { Component } from "react";
import "../CSS/nav.css";

export default function Navbar(props) {
  return (
    <div className="nav">
      <button className="home"></button>
      {props.responsive === "mobile" ? (
        <button
          className="cart"
          onClick={() => props.setTrigger(true)}
        ></button>
      ) : (
        <div className="back-to-home">Back to home</div>
      )}
    </div>
  );
}
