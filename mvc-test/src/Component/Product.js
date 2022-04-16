import React from "react";
import "../CSS/product.css";
import Popup from "./Popup";
import { useState } from "react";

export default function Product(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <span className="styleItem">
      <div
        className="product"
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        <div className="thumbnail">
          <img src={props.image} alt="" />
        </div>
        <div className="product-info">
          <div className="product-name">
            {props.stt}. {props.title}
          </div>
          <div className="product-price">{props.price} VND</div>

          <button></button>
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={() => setButtonPopup(false)}
        detail={props.detail}
        type={props.type}
        name={props.name}
        image={props.image}
        price={props.price}
      />
    </span>
  );
}
