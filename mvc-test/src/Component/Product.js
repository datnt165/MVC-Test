import React from "react";
import "../CSS/product.css";
import Popup from "./Popup";
import { useState } from "react";

export default function Product(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { product, stt, onAdd } = props;
  return (
    <span className="styleItem">
      <div className="product">
        <div
          className="thumbnail"
          onClick={() => {
            setButtonPopup(true);
          }}
        >
          <img src={product.image} alt="" />
        </div>
        <div className="product-info">
          <div className="product-name">
            {stt}. {product.name}
          </div>
          <div className="product-price">{product.price} VND</div>

          <button onClick={() => onAdd(product)}></button>
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={() => setButtonPopup(false)}
        detail={product.detail}
        type={product.type}
        name={product.name}
        image={product.image}
        price={product.price}
      />
    </span>
  );
}
