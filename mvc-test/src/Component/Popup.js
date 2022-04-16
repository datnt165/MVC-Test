import React, { useEffect, useRef, useState } from "react";
import "../CSS/popup.css";
export default function Popup(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (e.target.className === "popup") {
        props.setTrigger(false);
        console.log("!");
      }
    };
    document.addEventListener("click", checkIfClickOutside);
    return () => {
      document.removeEventListener("click", checkIfClickOutside);
    };
  });

  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecrease() {
    setQuantity((prevQuantity) =>
      prevQuantity === 0 ? prevQuantity : prevQuantity - 1
    );
    console.log(props.detail);
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="row row-1">
          <h2 className="detail-title col-2">ADD TO CART</h2>
          <button
            className="close-btn "
            onClick={() => props.setTrigger(false)}
          ></button>
        </div>
        <div className="row row-2">
          <div className="col-1">
            <img src={props.image} alt="" className="mini-img" />
          </div>
          <div className="col-2 ">
            <div className="row main-info">
              <div className="col-1">
                <h4>SKU</h4>
                <p>{props.detail.sku}</p>
              </div>
              <div className="col-2">
                <h4>{props.type}</h4>
                <p>{props.name}</p>
              </div>
              <div className="col-2 align-right">
                <h4>Unit Price</h4>
                <p>#Price</p>
              </div>
            </div>
            <div className="mini-line"></div>
            <div className="row pd-1">
              <div className="col-2">
                <h3>Quantity</h3>
              </div>
              <div className="col-2 ">
                <div className="row flex-right">
                  <button className="remove def" onClick={handleDecrease}>
                    -
                  </button>
                  <div className="quantity">{quantity}</div>
                  <button className="add def" onClick={handleIncrease}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="mini-line"></div>
            <div className="detail-info">
              <div>
                <strong>Protein:</strong> ...
              </div>
              <div>
                <strong>Additves:</strong> ...
              </div>
              <div>
                <strong>Baking material:</strong> ...
              </div>
              <div>
                <strong>Food decoration:</strong> ...
              </div>
            </div>
            <div className="row">
              <button className="add-cart-button col-1">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
