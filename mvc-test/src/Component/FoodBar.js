import React, { Component } from "react";
import "../CSS/foodBar.css";
import Product from "./Product";
export default class FoodBar extends Component {
  render() {
    return (
      <div>
        <div className="title-food">
          <span>{this.props.type}</span>
          <div className="line"></div>
        </div>
        <div className="food-list">
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="1"
          />
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="2"
          />
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="2"
          />
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="2"
          />
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="2"
          />
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="2"
          />
          <Product
            title="Hamburger"
            image="img/hamburger.png"
            price="25.000"
            stt="2"
          />
        </div>
      </div>
    );
  }
}
