import React, { useEffect, useRef, useState } from "react";
import "../CSS/popup.css";
export default function Popup(props) {
  // const [trigger, setTrigger, product, onAdd] = props;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(props.product.price);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (e.target.className === "popup") {
        props.setTrigger(false);
        setPrice(props.product.price);
        setQuantity(1);
      }
    };
    document.addEventListener("click", checkIfClickOutside);
    return () => {
      document.removeEventListener("click", checkIfClickOutside);
    };
  });

  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
    let a = quantity * props.product.price + parseInt(props.product.price);
    setPrice(a + ".000");
  }

  function handleDecrease() {
    setQuantity((prevQuantity) =>
      prevQuantity === 0 ? prevQuantity : prevQuantity - 1
    );
    let a = quantity * props.product.price - parseInt(props.product.price);
    if (a > 0) setPrice(a + ".000");
    else if (a === 0) setPrice(0);
    // setPrice(quantity * props.price);
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="row row-1">
          <h2 className="detail-title col-2">ADD TO CART</h2>
          <button
            className="close-btn "
            onClick={() => {
              props.setTrigger(false);
              setPrice(props.product.price);
              setQuantity(1);
            }}
          ></button>
        </div>
        <div className="row row-2">
          <div className="col-1">
            <img src={props.product.image} alt="" className="mini-img" />
          </div>
          <div className="col-2 ">
            <div className="row main-info">
              <div className="col-1">
                <h4>SKU</h4>
                <p>{props.product.detail.sku}</p>
              </div>
              <div className="col-2">
                <h4>{props.product.type}</h4>
                <p>{props.product.name}</p>
              </div>
              <div className="col-2 align-right">
                <h4>Unit Price</h4>
                <p className="price">{props.product.price} VND</p>
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
                <strong>Protein:</strong>{" "}
                <span>{props.product.detail.protein}</span>
              </div>
              <div>
                <strong>Additves:</strong>{" "}
                <span>{props.product.detail.additive}</span>
              </div>
              <div>
                <strong>Baking material:</strong>{" "}
                <span>{props.product.detail.baking}</span>
              </div>
              <div>
                <strong>Food decoration:</strong>{" "}
                <span>{props.product.detail.decoration}</span>
              </div>
            </div>
            
            <div className="row">
              <button
                className="add-cart-button col-1"
                onClick={() => {
                  if (quantity !== 0) props.onAdd(props.product, quantity);
                  setQuantity(1);
                  setPrice(props.product.price);
                  props.setTrigger(false);
                }}
              >
                Th??m {price} VND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
