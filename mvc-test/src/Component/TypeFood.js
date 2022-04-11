import React, { Component } from "react";
import "../CSS/foodType.css";

export default class TypeFood extends Component {
  render() {
    return (
      <span className="food-type">
        <div className="thumnail">
          <img src={this.props.image} alt="" />
        </div>
        <div className="type-name">{this.props.type}</div>
      </span>
    );
  }
}
