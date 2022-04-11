import React, { Component } from "react";
import "../CSS/product.css";

export class Product extends Component {
  render() {
    return (
      <span className="styleItem">
        <div className="product">
          <div className="thumbnail">
            <img src={this.props.image} alt="" />
          </div>
          <div className="product-info">
            <div className="product-name">
              {this.props.stt}. {this.props.title}
            </div>
            <div className="product-price">{this.props.price} VND</div>
            <button></button>
          </div>
        </div>
      </span>
    );
  }
}

export default Product;
